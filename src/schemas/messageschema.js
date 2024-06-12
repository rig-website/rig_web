import {z} from "zod"

export const acceptMessageschema= z.object({
    content:z
    .string()
    .min(10,{message:"messages must be as long as of 10 charcters"})
    .max(300,min(10,{message:"messages must not be as longer than 300 charcters"}))

})