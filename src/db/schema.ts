import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core'

export const goals = pgTable('goals', {
    id: text('id').primaryKey(),
})

export const goalCompletions = pgTable('goal_completion', {
    id: text('id').primaryKey(),
})
