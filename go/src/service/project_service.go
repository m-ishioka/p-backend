package service

import (
	context "context"
	base64 "encoding/base64"
	fmt "fmt"
	ent "./ent"
	project "./ent/project"
	entpb "./ent/proto/entpb"
	strconv "strconv"

	entproto "entgo.io/contrib/entproto"
	runtime "entgo.io/contrib/entproto/runtime"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
)

// ProjectService implements ProjectServiceServer
type CustomProjectService struct {
	client *ent.Client
	entpb.UnimplementedProjectServiceServer
}

// NewProjectService returns a new ProjectService
func NewCustomProjectService(client *ent.Client) *CustomProjectService {
	return &CustomProjectService{
		client: client,
	}
}

// toProtoProcessType transforms the ent type to the pb type
func toProtoProcessType(e *ent.ProcessType) (*entpb.ProcessType, error) {
	v := &entpb.ProcessType{}
	id := int64(e.ID)
	v.Id = id
	name := e.Name
	v.Name = name
	for _, edg := range e.Edges.Projects {
		id := int64(edg.ID)
		v.Projects = append(v.Projects, &entpb.Project{
			Id: id,
		})
	}
	return v, nil
}

// toProtoProject transforms the ent type to the pb type
func toProtoProject(e *ent.Project) (*entpb.Project, error) {
	v := &entpb.Project{}
	created_at := timestamppb.New(e.CreatedAt)
	v.CreatedAt = created_at
	description := e.Description
	v.Description = description
	end_date := timestamppb.New(e.EndDate)
	v.EndDate = end_date
	id := int64(e.ID)
	v.Id = id
	IDkey := e.IDKey
	v.IDKey = IDkey
	name := e.Name
	v.Name = name
	role := e.Role
	v.Role = role
	scale := int64(e.Scale)
	v.Scale = scale
	start_date := timestamppb.New(e.StartDate)
	v.StartDate = start_date
	updated_at := timestamppb.New(e.UpdatedAt)
	v.UpdatedAt = updated_at
	for _, edg := range e.Edges.ProcessTypes {
		pbEntity, err := toProtoProcessType(edg)
		v.ProcessTypes = append(v.ProcessTypes, pbEntity)
		if err != nil {
			return nil, status.Errorf(codes.Internal, "internal error: %s", err)
		}
	}
	for _, edg := range e.Edges.Skills {
		pbEntity, err := toProtoSkill(edg)
		v.Skills = append(v.Skills, pbEntity)
		if err != nil {
			return nil, status.Errorf(codes.Internal, "internal error: %s", err)
		}
	}
	return v, nil
}

// toProtoProjectList transforms a list of ent type to a list of pb type
func toProtoProjectList(e []*ent.Project) ([]*entpb.Project, error) {
	var pbList []*entpb.Project
	for _, entEntity := range e {
		pbEntity, err := toProtoProject(entEntity)
		if err != nil {
			return nil, status.Errorf(codes.Internal, "internal error: %s", err)
		}
		pbList = append(pbList, pbEntity)
	}
	return pbList, nil
}

// List implements ProjectServiceServer.List
func (svc *CustomProjectService) List(ctx context.Context, req *entpb.ListProjectRequest) (*entpb.ListProjectResponse, error) {
	var (
		err      error
		entList  []*ent.Project
		pageSize int
	)
	pageSize = int(req.GetPageSize())
	switch {
	case pageSize < 0:
		return nil, status.Errorf(codes.InvalidArgument, "page size cannot be less than zero")
	case pageSize == 0 || pageSize > entproto.MaxPageSize:
		pageSize = entproto.MaxPageSize
	}
	listQuery := svc.client.Project.Query().
		Order(ent.Desc(project.FieldID)).
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
			Where(project.IDLTE(pageToken))
	}
	switch req.GetView() {
	case entpb.ListProjectRequest_VIEW_UNSPECIFIED, entpb.ListProjectRequest_BASIC:
		entList, err = listQuery.All(ctx)
	case entpb.ListProjectRequest_WITH_EDGE_IDS:
		entList, err = listQuery.
			WithProcessTypes(func(query *ent.ProcessTypeQuery) {
				query.All(ctx)
			}).
			WithSkills(func(query *ent.SkillQuery) {
				query.WithSkillType(func(query *ent.SkillTypeQuery) {
					query.All(ctx)
				}).All(ctx)
			}).
			All(ctx)
	}
	switch {
	case err == nil:
		var nextPageToken string
		if len(entList) == pageSize+1 {
			nextPageToken = base64.StdEncoding.EncodeToString(
				[]byte(fmt.Sprintf("%v", entList[len(entList)-1].ID)))
			entList = entList[:len(entList)-1]
		}
		protoList, err := toProtoProjectList(entList)
		if err != nil {
			return nil, status.Errorf(codes.Internal, "internal error: %s", err)
		}
		return &entpb.ListProjectResponse{
			ProjectList:   protoList,
			NextPageToken: nextPageToken,
		}, nil
	default:
		return nil, status.Errorf(codes.Internal, "internal error: %s", err)
	}

}

func (svc *CustomProjectService) createBuilder(project *entpb.Project) (*ent.ProjectCreate, error) {
	m := svc.client.Project.Create()
	projectCreatedAt := runtime.ExtractTime(project.GetCreatedAt())
	m.SetCreatedAt(projectCreatedAt)
	projectDescription := project.GetDescription()
	m.SetDescription(projectDescription)
	projectEndDate := runtime.ExtractTime(project.GetEndDate())
	m.SetEndDate(projectEndDate)
	projectIDKey := project.GetIDKey()
	m.SetIDKey(projectIDKey)
	projectName := project.GetName()
	m.SetName(projectName)
	projectRole := project.GetRole()
	m.SetRole(projectRole)
	projectScale := int(project.GetScale())
	m.SetScale(projectScale)
	projectStartDate := runtime.ExtractTime(project.GetStartDate())
	m.SetStartDate(projectStartDate)
	projectUpdatedAt := runtime.ExtractTime(project.GetUpdatedAt())
	m.SetUpdatedAt(projectUpdatedAt)
	for _, item := range project.GetProcessTypes() {
		processtypes := int(item.GetId())
		m.AddProcessTypeIDs(processtypes)
	}
	for _, item := range project.GetSkills() {
		skills := int(item.GetId())
		m.AddSkillIDs(skills)
	}
	return m, nil
}
