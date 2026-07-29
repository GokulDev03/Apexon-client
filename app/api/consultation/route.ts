import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const token = randomUUID();

    const consultation = await prisma.quoteRequest.create({
      data: {
        name: body.name,
        email: body.email,
        company: body.company || "",
        phone: "",
        service: "Consultation",
        budget: "",
        message: body.notes || "",
        status: "pending",
        token,
      },
    });

    await resend.emails.send({
      from: "Apexon <onboarding@resend.dev>",
      to: "gokul902564@gmail.com",
      subject: "🚀 New Consultation Request",

      html: `
        <div style="font-family: Arial, sans-serif; background-color:#f5ead9; padding:40px 20px;">
          <table style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 20px rgba(13,51,32,0.1);">

            <!-- Header -->
            <tr>
              <td style="background:#0d3320; padding:28px 32px;">
                <table style="width:100%;">
                  <tr>
                    <td>
                      <span style="color:#f5ead9; font-size:20px; font-weight:700; font-family:Georgia,serif;">
                        Apex<span style="color:#d4a574;">on</span>
                      </span>
                    </td>
                    <td style="text-align:right;">
                      <span style="color:#d4a574; font-size:12px; font-weight:600; letter-spacing:1px; text-transform:uppercase;">
                        New Lead
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px;">
                <h2 style="color:#0d3320; margin:0 0 4px; font-size:20px;">
                  New Consultation Request
                </h2>
                <p style="color:#0d3320; opacity:0.6; margin:0 0 24px; font-size:13px;">
                  Someone just submitted the consultation form on your website.
                </p>

                <table style="width:100%; border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0; border-bottom:1px solid #0d332015; color:#0d3320; opacity:0.5; font-size:13px; width:100px;">Name</td>
                    <td style="padding:10px 0; border-bottom:1px solid #0d332015; color:#0d3320; font-size:14px; font-weight:600;">${consultation.name}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0; border-bottom:1px solid #0d332015; color:#0d3320; opacity:0.5; font-size:13px;">Email</td>
                    <td style="padding:10px 0; border-bottom:1px solid #0d332015; color:#0d3320; font-size:14px;">${consultation.email}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0; border-bottom:1px solid #0d332015; color:#0d3320; opacity:0.5; font-size:13px;">Company</td>
                    <td style="padding:10px 0; border-bottom:1px solid #0d332015; color:#0d3320; font-size:14px;">${consultation.company || "-"}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0; border-bottom:1px solid #0d332015; color:#0d3320; opacity:0.5; font-size:13px;">Service</td>
                    <td style="padding:10px 0; border-bottom:1px solid #0d332015;">
                      <span style="background:#d4a57422; color:#a97c47; padding:4px 10px; border-radius:20px; font-size:12px; font-weight:600;">
                        ${consultation.service}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0; color:#0d3320; opacity:0.5; font-size:13px; vertical-align:top;">Message</td>
                    <td style="padding:10px 0; color:#0d3320; font-size:14px; line-height:1.5;">${consultation.message || "-"}</td>
                  </tr>
                </table>

                <!-- Action buttons -->
                <table style="width:100%; margin-top:28px;">
                  <tr>
                    <td style="padding-right:8px;">
                      <a
                        href="${process.env.NEXT_PUBLIC_SITE_URL}/api/approve?token=${token}"
                        style="
                          display:block;
                          background:#0d3320;
                          color:#f5ead9;
                          padding:14px 0;
                          text-align:center;
                          text-decoration:none;
                          border-radius:10px;
                          font-weight:600;
                          font-size:14px;
                        "
                      >
                        ✅ Approve
                      </a>
                    </td>
                    <td style="padding-left:8px;">
                      <a
                        href="${process.env.NEXT_PUBLIC_SITE_URL}/api/reject?token=${token}"
                        style="
                          display:block;
                          background:#ffffff;
                          color:#0d3320;
                          padding:14px 0;
                          text-align:center;
                          text-decoration:none;
                          border-radius:10px;
                          font-weight:600;
                          font-size:14px;
                          border:1.5px solid #0d332030;
                        "
                      >
                        ❌ Reject
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f5ead9; padding:18px 32px; text-align:center;">
                <p style="margin:0; color:#0d3320; opacity:0.4; font-size:11px;">
                  Apexon Development · Quality. Innovation. Results.
                </p>
              </td>
            </tr>

          </table>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      token,
      consultation,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save consultation request.",
      },
      {
        status: 500,
      }
    );
  }
}