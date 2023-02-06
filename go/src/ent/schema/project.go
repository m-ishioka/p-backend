package schema

import (
	"time"

	"entgo.io/contrib/entproto"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// Project holds the schema definition for the Project entity.
type Project struct {
	ent.Schema
}

// Fields of the Project.
func (Project) Fields() []ent.Field {
	return []ent.Field{
		field.String("key").Annotations(
			entproto.Field(2),
		),
		field.String("name").Annotations(
			entproto.Field(3),
		),
		field.Time("start_date").
			Default(time.Now).Annotations(
			entproto.Field(4),
		),
		field.Time("end_date").
			Default(time.Now).Annotations(
			entproto.Field(5),
		),
		field.String("role").Annotations(
			entproto.Field(6),
		),
		field.Int("scale").Annotations(
			entproto.Field(7),
		),
		field.String("description").Annotations(
			entproto.Field(8),
		),
		field.Time("created_at").
			Default(time.Now).Immutable().Annotations(
			entproto.Field(9),
		),
		field.Time("updated_at").
			Default(time.Now).Annotations(
			entproto.Field(10),
		),
	}
}

// Edges of the Project.
func (Project) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("skills", Skill.Type).Annotations(
			entproto.Field(11),
		),
		edge.From("processTypes", ProcessType.Type).Ref("projects").Annotations(
			entproto.Field(12),
		),
	}
}

func (Project) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entproto.Message(),
		entproto.Service(),
	}
}
