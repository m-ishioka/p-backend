package service

import (
	context "context"
	base64 "encoding/base64"
	fmt "fmt"
	ent "ent"
	entpb "ent/proto/entpb"
	skill "ent/skill"
	strconv "strconv"

	entproto "entgo.io/contrib/entproto"
	runtime "entgo.io/contrib/entproto/runtime"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
)

// SkillService implements SkillServiceServer
type CustomSkillService struct {
	client *ent.Client
	entpb.UnimplementedSkillServiceServer
}

// NewSkillService returns a new SkillService
func NewCustomSkillService(client *ent.Client) *CustomSkillService {
	return &CustomSkillService{
		client: client,
	}
}

// toProtoSkillType transforms the ent type to the pb type
func toProtoSkillType(e *ent.SkillType) (*entpb.SkillType, error) {
	v := &entpb.SkillType{}
	id := int64(e.ID)
	v.Id = id
	name := e.Name
	v.Name = name
	for _, edg := range e.Edges.SkillType {
		id := int64(edg.ID)
		v.SkillType = append(v.SkillType, &entpb.Skill{
			Id: id,
		})
	}
	return v, nil
}

// toProtoSkill transforms the ent type to the pb type
func toProtoSkill(e *ent.Skill) (*entpb.Skill, error) {
	v := &entpb.Skill{}
	created_at := timestamppb.New(e.CreatedAt)
	v.CreatedAt = created_at
	description := e.Description
	v.Description = description
	experience := e.Experience
	v.Experience = experience
	_IDKey := e.IDKey
	v.IDKey = _IDKey
	iconName := e.IconName
	v.IconName = iconName
	id := int64(e.ID)
	v.Id = id
	level := int64(e.Level)
	v.Level = level
	name := e.Name
	v.Name = name
	updated_at := timestamppb.New(e.UpdatedAt)
	v.UpdatedAt = updated_at
	for _, edg := range e.Edges.Projects {
		pbEntity, err := toProtoProject(edg)
		v.Projects = append(v.Projects, pbEntity)
		if err != nil {
			return nil, status.Errorf(codes.Internal, "internal error: %s", err)
		}
	}
	if edg := e.Edges.SkillType; edg != nil {
		pbEntity, err := toProtoSkillType(edg)
		v.SkillType = pbEntity
		if err != nil {
			return nil, status.Errorf(codes.Internal, "internal error: %s", err)
		}
	}
	return v, nil
}

// toProtoSkillList transforms a list of ent type to a list of pb type
func toProtoSkillList(e []*ent.Skill) ([]*entpb.Skill, error) {
	var pbList []*entpb.Skill
	for _, entEntity := range e {
		pbEntity, err := toProtoSkill(entEntity)
		if err != nil {
			return nil, status.Errorf(codes.Internal, "internal error: %s", err)
		}
		pbList = append(pbList, pbEntity)
	}
	return pbList, nil
}

// List implements SkillServiceServer.List
func (svc *CustomSkillService) List(ctx context.Context, req *entpb.ListSkillRequest) (*entpb.ListSkillResponse, error) {
	var (
		err      error
		entList  []*ent.Skill
		pageSize int
	)
	pageSize = int(req.GetPageSize())
	switch {
	case pageSize < 0:
		return nil, status.Errorf(codes.InvalidArgument, "page size cannot be less than zero")
	case pageSize == 0 || pageSize > entproto.MaxPageSize:
		pageSize = entproto.MaxPageSize
	}
	listQuery := svc.client.Skill.Query().
		Order(ent.Asc(skill.FieldID)).
		Limit(pageSize + 1)
	if req.GetPageToken() != "" {
		bytes, err := base64.StdEncoding.DecodeString(req.PageToken)
		if err != nil {
			return nil, status.Errorf(codes.InvalidArgument, "page token is invalid")
		}
		token, err := strconv.ParseInt(string(bytes), 10, 32)
		if err != nil {
			return nil, status.Errorf(codes.InvalidArgument, "page token is invalid")
		}
		pageToken := int(token)
		listQuery = listQuery.
			Where(skill.IDLTE(pageToken))
	}
	switch req.GetView() {
	case entpb.ListSkillRequest_VIEW_UNSPECIFIED, entpb.ListSkillRequest_BASIC:
		entList, err = listQuery.All(ctx)
	case entpb.ListSkillRequest_WITH_EDGE_IDS:
		entList, err = listQuery.
			WithProjects(func(query *ent.ProjectQuery) {
				query.All(ctx)
			}).
			WithSkillType(func(query *ent.SkillTypeQuery) {
				query.All(ctx)
			}).
			All(ctx)
		fmt.Println(entList[len(entList)-1])
	}
	switch {
	case err == nil:
		var nextPageToken string
		if len(entList) == pageSize+1 {
			nextPageToken = base64.StdEncoding.EncodeToString(
				[]byte(fmt.Sprintf("%v", entList[len(entList)-1].ID)))
			entList = entList[:len(entList)-1]
		}
		protoList, err := toProtoSkillList(entList)
		if err != nil {
			return nil, status.Errorf(codes.Internal, "internal error: %s", err)
		}
		return &entpb.ListSkillResponse{
			SkillList:     protoList,
			NextPageToken: nextPageToken,
		}, nil
	default:
		return nil, status.Errorf(codes.Internal, "internal error: %s", err)
	}

}

func (svc *CustomSkillService) createBuilder(skill *entpb.Skill) (*ent.SkillCreate, error) {
	m := svc.client.Skill.Create()
	skillCreatedAt := runtime.ExtractTime(skill.GetCreatedAt())
	m.SetCreatedAt(skillCreatedAt)
	skillDescription := skill.GetDescription()
	m.SetDescription(skillDescription)
	skillExperience := float32(skill.GetExperience())
	m.SetExperience(skillExperience)
	skillIDKey := skill.GetIDKey()
	m.SetIDKey(skillIDKey)
	skillIconName := skill.GetIconName()
	m.SetIconName(skillIconName)
	skillLevel := int(skill.GetLevel())
	m.SetLevel(skillLevel)
	skillName := skill.GetName()
	m.SetName(skillName)
	skillUpdatedAt := runtime.ExtractTime(skill.GetUpdatedAt())
	m.SetUpdatedAt(skillUpdatedAt)
	for _, item := range skill.GetProjects() {
		projects := int(item.GetId())
		m.AddProjectIDs(projects)
	}
	if skill.GetSkillType() != nil {
		skillSkillType := int(skill.GetSkillType().GetId())
		m.SetSkillTypeID(skillSkillType)
	}
	return m, nil
}
