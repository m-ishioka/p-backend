package schema

import (
	"entgo.io/contrib/entproto"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/index"
)

// ProjectSkills holds the schema definition for the ProjectSkills entity.
type ProjectSkills struct {
	ent.Schema
}

// Fields of the ProjectSkills.
func (ProjectSkills) Fields() []ent.Field {
	return nil
}

// Edges of the ProjectSkills.
func (ProjectSkills) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("skill", Skill.Type).
			Ref("spsid").Unique().Required().Annotations(
			entproto.Field(2),
		),
		edge.From("project", Project.Type).
			Ref("ppsid").Unique().Required().Annotations(
			entproto.Field(3),
		),
	}
}

func (ProjectSkills) Indexes() []ent.Index {
	return []ent.Index{
		index.Fields().Edges("skill", "project").
			Unique().Annotations(
			entproto.Field(4),
		),
	}
}

func (ProjectSkills) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entproto.Message(),
		entproto.Service(),
	}
}
