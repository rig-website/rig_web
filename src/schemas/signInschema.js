import {z} from "zod"

export const signInschema= z.object({
    rigid : z.number(),
    email : z.string(),
    password : z.string()

})