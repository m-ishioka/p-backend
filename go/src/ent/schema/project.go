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
		field.Time("start_date").
			Default(time.Now).Annotations(
			entproto.Field(2),
		),
		field.Time("end_date").
			Default(time.Now).Annotations(
			entproto.Field(3),
		),
		field.String("role").Annotations(
			entproto.Field(4),
		),
		field.String("scale").Annotations(
			entproto.Field(5),
		),
		field.Time("created_at").
			Default(time.Now).Immutable().Annotations(
			entproto.Field(6),
		),
		field.Time("updated_at").
			Default(time.Now).Annotations(
			entproto.Field(7),
		),
	}
}

// Edges of the Project.
func (Project) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("ppsid", ProjectSkills.Type).Unique().Annotations(
			entproto.Field(8),
		),
		edge.To("pppid", ProjectProcess.Type).Unique().Annotations(
			entproto.Field(9),
		),
	}
}

func (Project) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entproto.Message(),
		entproto.Service(),
	}
}
