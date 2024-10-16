import { db } from "."
import { goalCompletions, goals } from "./schema"

async function seed() {
    await db.delete(goalCompletions)
    await db.delete(goals)

    await db.insert(goals).values({
        
    })
}

await db.insert(goalCompletions).values({
    { goalId: result[0].id, createdAt: new Date() },
    { goalId: result[1].id, createdAt: new Date() },
})

seed().finally(() => {
    client.end()
})