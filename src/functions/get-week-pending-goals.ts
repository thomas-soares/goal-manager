import { goalCompletions, goals } from "../db/schema";


dayjs.extend(weekOfYear)

export async function getWeekPendingGoals() {
    const firstDayOfWeek = dayjs().startOf('week')
}