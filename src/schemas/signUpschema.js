import {z} from "zod"

export const rigidValidation= z
.number()
.min(8,"RIG ID must be atleast 8 characters long")
 


export const signUpSchema = z.object({
    rigid : rigidValidation,
    email : z.string().email({message:'Invalid email address'}),
    password : z.string().min(8,{message:"Password must be at least 8 chaeracters"})
})