package schema

import (
	"entgo.io/contrib/entproto"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// SkillType holds the schema definition for the SkillType entity.
type SkillType struct {
	ent.Schema
}

// Fields of the SkillType.
func (SkillType) Fields() []ent.Field {
	return []ent.Field{
		field.String("name").Annotations(
			entproto.Field(2),
		),
	}
}

// Edges of the SkillType.
func (SkillType) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("stsid", Skill.Type).Annotations(
			entproto.Field(3),
		),
	}
}

func (SkillType) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entproto.Message(),
		entproto.Service(),
	}
}
