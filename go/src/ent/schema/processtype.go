package schema

import (
	"entgo.io/contrib/entproto"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// ProcessType holds the schema definition for the ProcessType entity.
type ProcessType struct {
	ent.Schema
}

// Fields of the ProcessType.
func (ProcessType) Fields() []ent.Field {
	return []ent.Field{
		field.String("name").Annotations(
			entproto.Field(2),
		),
	}
}

// Edges of the ProcessType.
func (ProcessType) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("projects", Project.Type).Annotations(
			entproto.Field(3),
		),
	}
}

func (ProcessType) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entproto.Message(),
		entproto.Service(),
	}
}
