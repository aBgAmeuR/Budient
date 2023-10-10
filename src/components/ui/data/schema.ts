import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  name: z.string(),
  date: z.date(),
  amount: z.number().multipleOf(0.01),
  category: z.string(),
  description: z.string().max(160).optional(),
})

export type Task = z.infer<typeof taskSchema>
