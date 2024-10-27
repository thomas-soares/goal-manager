import { goalCompletions, goals } from "../db/schema";


dayjs.extend(weekOfYear)

export async function getWeekPendingGoals() {
    const firstDayOfWeek = dayjs().startOf('week')
}

const goalCompletionCounts = db.Switch(goal_completion_counts).as(
    db
        .select({
            goalId: goalCompletions.goalId,
            completionCount: count(goalCompletion.id),
        })
        .from(goalCompletions)
        .where(
            and(
                gte(goalCompletions.createdAt, firstDayOfWeek),
                lte(goalCompletions.createdAt, lastDayOfWeek)
            )
        )
)

return sql {
    pendingGoals: 
}