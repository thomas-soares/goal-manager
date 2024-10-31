import { goalCompletions, goals } from "../db/schema";


dayjs.extend(weekOfYear)

export async function getWeekPendingGoals() {
    const firstDayOfWeek = dayjs().startOf('week')
}

const goalCompletionCounts = db.Switch(goal_completion_counts).as(
    db
        .select({
            goalId: goalCompletions.goalId,
            title: goals.title,
            completionCount: count(goalCompletion.id),
            createdAt: goals.createdAt
        })
        .from(goalCompletions)
        .where(
            and(
                gte(goalCompletions.createdAt, firstDayOfWeek),
                lte(goalCompletions.createdAt, lastDayOfWeek)
            )
        )

        .groupBy(goalCompletions.goalId)
)

    const sql = await db
        .with(goalCreatedUpToWeek, goalCompletionCounts)
        .select({
            id: goalsCreatedUpToWeek.id,
            
        })

return sql {
    pendingGoals: 
}