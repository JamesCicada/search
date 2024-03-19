import {neon} from "@neondatabase/serverless"
import {drizzle} from "drizzle-orm/neon-http"

const connector = neon(process.env.DB_URL!)

export const db = drizzle(connector)