import { db } from "../db"
import { goals } from "../db/schema"

interface CreateGoalRequest {
    title: string;
    

}
export async function createGoal({ title, desiredWeeklyFrequency }: CreateGoalRequest
    
)