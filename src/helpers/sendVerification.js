import { resend } from "@/lib/resend";


import VerificationEmail from "../../emails/verificationmail";

export async function sendVerificationEmail(email,username,verifyCode){
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'verification code',
            react: VerificationEmail(username, verifyCode),
          });
        
    } catch (emailError) {
        console.error("Error sending verification email",emailError);
        return 


        
    }
    

}









