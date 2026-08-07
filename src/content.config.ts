import { defineCollection, reference } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const baseSchema = {
	title: z.string(),
	summary: z.string(),
	date: z.coerce.date(),
	tags: z.array(z.string()).default([]),
	draft: z.coerce.boolean(),
}

const relatedReferencesSchema = z.array(reference("references")).default([])

// references collection
const references = defineCollection({
  loader: glob({ base: "./src/content/references", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
		...baseSchema
  }),
})

// notes/memos collection
const notes = defineCollection({
  loader: glob({ base: "./src/content/notes", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
		relatedReferences: relatedReferencesSchema,
		...baseSchema,
  }),
})

// troubleshoots collection
const troubleshoots = defineCollection({
  loader: glob({ base: "./src/content/troubleshoots", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
		relatedReferences: relatedReferencesSchema,
		level: z.enum(['beginner', 'advanced']),
		...baseSchema,
  }),
})

export const collections = {
	notes,
	references,
	troubleshoots
}
