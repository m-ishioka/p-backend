package schema

import (
	"time"

	"entgo.io/contrib/entproto"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// Skill holds the schema definition for the Skill entity.
type Skill struct {
	ent.Schema
}

// Fields of the Skill.
func (Skill) Fields() []ent.Field {
	return []ent.Field{
		field.String("name").Annotations(
			entproto.Field(2),
		),
		field.String("key").Annotations(
			entproto.Field(3),
		),
		field.Int("level").Annotations(
			entproto.Field(4),
		),
		field.Float32("experience").Annotations(
			entproto.Field(5),
		),
		field.String("description").Annotations(
			entproto.Field(6),
		),
		field.Time("created_at").
			Default(time.Now).Immutable().Annotations(
			entproto.Field(7),
		),
		field.Time("updated_at").
			Default(time.Now).Annotations(
			entproto.Field(8),
		),
	}
}

// Edges of the Skill.
func (Skill) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("skillType", SkillType.Type).
			Ref("skillType").
			Unique().Required().Annotations(
			entproto.Field(9),
		),
		edge.From("projects", Project.Type).Ref("skills").Annotations(
			entproto.Field(10),
		),
	}
}

func (Skill) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entproto.Message(),
		entproto.Service(),
	}
}
