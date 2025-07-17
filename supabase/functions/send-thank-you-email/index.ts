import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ThankYouEmailRequest {
  name: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email }: ThankYouEmailRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Manthan AI Hackathon <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to Manthan AI Hackathon! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9ff;">
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; font-size: 28px; margin: 0; font-weight: bold;">
              🎉 Registration Successful!
            </h1>
            <p style="color: #e0e7ff; font-size: 16px; margin: 10px 0 0 0;">
              Welcome to Manthan AI Hackathon
            </p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 15px; margin-bottom: 20px;">
            <h2 style="color: #4f46e5; margin-top: 0;">Hi ${name}! 👋</h2>
            
            <p style="color: #374151; line-height: 1.6; font-size: 16px;">
              Thank you for registering for <strong>Manthan AI Hackathon</strong>! We're excited to have you join us for this incredible journey into the world of artificial intelligence.
            </p>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h3 style="color: #4f46e5; margin-top: 0;">📅 Event Details</h3>
              <ul style="color: #374151; line-height: 1.8;">
                <li><strong>Date:</strong> March 15-17, 2024</li>
                <li><strong>Duration:</strong> 48 Hours</li>
                <li><strong>Format:</strong> In-person + Virtual participation</li>
                <li><strong>Prize Pool:</strong> ₹2,50,000</li>
              </ul>
            </div>
            
            <h3 style="color: #4f46e5;">🚀 What's Next?</h3>
            <ul style="color: #374151; line-height: 1.8;">
              <li>You'll receive event details and venue information 1 week before the event</li>
              <li>Access to pre-event resources and APIs will be shared soon</li>
              <li>Join our Discord community for updates and networking</li>
              <li>Start preparing your innovative AI solutions!</li>
            </ul>
            
            <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 20px; border-radius: 10px; margin: 20px 0; text-align: center;">
              <h3 style="color: white; margin: 0;">💡 Pro Tip</h3>
              <p style="color: #d1fae5; margin: 10px 0 0 0;">
                Start exploring the problem statements and gather your team. The best solutions often come from diverse skill sets working together!
              </p>
            </div>
          </div>
          
          <div style="text-align: center; color: #6b7280; font-size: 14px;">
            <p>
              Follow us for updates: 
              <a href="#" style="color: #4f46e5;">Twitter</a> | 
              <a href="#" style="color: #4f46e5;">LinkedIn</a> | 
              <a href="#" style="color: #4f46e5;">Discord</a>
            </p>
            <p style="margin-top: 20px;">
              Questions? Reply to this email or contact us at support@manthanhackathon.com
            </p>
            <p style="color: #9ca3af;">
              Manthan AI Hackathon Team<br>
              Building the Future with AI
            </p>
          </div>
        </div>
      `,
    });

    console.log("Thank you email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-thank-you-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);