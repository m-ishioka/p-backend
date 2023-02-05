package schema

import (
	"entgo.io/contrib/entproto"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/index"
)

// ProjectProcess holds the schema definition for the ProjectProcess entity.
type ProjectProcess struct {
	ent.Schema
}

// Fields of the ProjectProcess.
func (ProjectProcess) Fields() []ent.Field {
	return nil
}

// Edges of the ProjectProcess.
func (ProjectProcess) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("project", Project.Type).
			Ref("pppid").Unique().Required().Annotations(
			entproto.Field(2),
		),
		edge.From("processType", ProcessType.Type).
			Ref("ptpid").Unique().Required().Annotations(
			entproto.Field(3),
		),
	}
}

func (ProjectProcess) Indexes() []ent.Index {
	return []ent.Index{
		index.Fields().Edges("project", "processType").
			Unique().Annotations(
			entproto.Field(4),
		),
	}
}

func (ProjectProcess) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entproto.Message(),
		entproto.Service(),
	}
}
