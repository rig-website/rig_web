import { resend } from "@/lib/resend";


import VerificationEmail from "../../emails/verificationmail";

export async function sendVerificationEmail(email,rigid){
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'verification code',
            react: VerificationEmail(rigid),
          });
        
    } catch (emailError) {
        console.error("Error sending verification email",emailError);
        return 


        
    }
    

}









