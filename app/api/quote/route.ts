import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: Request) {

  try {

    const body = await req.json();


    const {
      name,
      email,
      phone,
      company,
      service,
      budget,
      message
    } = body;



    // Generate unique token
    const token = randomUUID();



    // Save database
    const quote = await prisma.quoteRequest.create({

      data:{

        name,
        email,
        phone,
        company,
        service,
        budget,
        message,

        status:"pending",

        token

      }

    });



    const approveUrl =
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/approve?token=${token}`;


    const rejectUrl =
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/reject?token=${token}`;



    // Send mail to admin

    await resend.emails.send({

      from:"Apexon <onboarding@resend.dev>",

      to:process.env.ADMIN_EMAIL!,

      subject:"New Quote Request Received",

      html:`

      <h2>New Quote Request</h2>

      <p><b>Name:</b> ${name}</p>

      <p><b>Email:</b> ${email}</p>

      <p><b>Phone:</b> ${phone}</p>

      <p><b>Company:</b> ${company}</p>

      <p><b>Service:</b> ${service}</p>

      <p><b>Budget:</b> ${budget}</p>

      <p><b>Message:</b> ${message}</p>


      <br/>

      <a href="${approveUrl}"
      style="
      background:green;
      color:white;
      padding:10px 20px;
      text-decoration:none;
      border-radius:5px;
      ">
      Approve
      </a>


      &nbsp;


      <a href="${rejectUrl}"
      style="
      background:red;
      color:white;
      padding:10px 20px;
      text-decoration:none;
      border-radius:5px;
      ">
      Reject
      </a>


      `

    });



    return NextResponse.json({

      success:true,

      message:"Quote submitted successfully",

      id:quote.id

    });



  } catch(error:any){


    console.log(error);


    return NextResponse.json({

      success:false,

      message:error.message

    },{
      status:500
    });


  }

}


export async function GET() {
  try {
    const quotes = await prisma.quoteRequest.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(quotes);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}