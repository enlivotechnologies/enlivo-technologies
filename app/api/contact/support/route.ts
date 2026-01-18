/**
 * app/api/contact/support/route.ts
 *
 * PURPOSE: API route for handling support form submissions.
 * WHY: Processes form data and sends email notifications.
 */

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Email Template Helper
 */
function createEmailTemplate(data: {
  fullName: string;
  email: string;
  companyName?: string;
  phoneNumber?: string;
  countryCode?: string;
  message: string;
}) {
  const fullPhone = data.countryCode && data.phoneNumber 
    ? `${data.countryCode} ${data.phoneNumber}`
    : data.phoneNumber || "Not provided";

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.5;
            color: #1a1a1a;
            background-color: #fafafa;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          .email-wrapper {
            width: 100%;
            padding: 48px 20px;
            background-color: #fafafa;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          }
          .header {
            padding: 40px 48px 32px;
            background-color: #ffffff;
            border-bottom: 1px solid #f0f0f0;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
            color: #000000;
            letter-spacing: -0.025em;
            line-height: 1.2;
          }
          .content {
            padding: 40px 48px;
            background-color: #ffffff;
          }
          .intro {
            margin-bottom: 32px;
            padding-bottom: 24px;
            border-bottom: 1px solid #f0f0f0;
          }
          .intro-text {
            font-size: 15px;
            color: #666666;
            line-height: 1.6;
          }
          .fields-container {
            display: table;
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
          }
          .field {
            display: table-row;
          }
          .field-label,
          .field-value {
            display: table-cell;
            padding: 16px 0;
            vertical-align: top;
            border-bottom: 1px solid #f8f8f8;
          }
          .field:last-child .field-label,
          .field:last-child .field-value {
            border-bottom: none;
          }
          .field-label {
            width: 140px;
            font-weight: 500;
            color: #666666;
            font-size: 13px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            padding-right: 24px;
          }
          .field-value {
            font-size: 15px;
            color: #1a1a1a;
            line-height: 1.6;
            word-wrap: break-word;
          }
          .field-value a {
            color: #1a1a1a;
            text-decoration: none;
            border-bottom: 1px solid #e0e0e0;
            transition: border-color 0.2s;
          }
          .field-value a:hover {
            border-bottom-color: #1a1a1a;
          }
          .message-container {
            margin-top: 16px;
            padding: 20px 24px;
            background-color: #fafafa;
            border-radius: 4px;
          }
          .message-text {
            font-size: 15px;
            color: #1a1a1a;
            line-height: 1.7;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
          .divider {
            height: 1px;
            background-color: #f0f0f0;
            margin: 32px 0;
          }
          .footer {
            padding: 32px 48px;
            background-color: #fafafa;
            border-top: 1px solid #f0f0f0;
            text-align: left;
          }
          .footer-text {
            font-size: 12px;
            color: #999999;
            line-height: 1.6;
            margin: 0;
          }
          @media only screen and (max-width: 600px) {
            .email-wrapper {
              padding: 24px 12px;
            }
            .header {
              padding: 32px 24px 24px;
            }
            .header h1 {
              font-size: 22px;
            }
            .content {
              padding: 32px 24px;
            }
            .fields-container {
              display: block;
            }
            .field {
              display: block;
              margin-bottom: 24px;
              padding-bottom: 24px;
              border-bottom: 1px solid #f8f8f8;
            }
            .field:last-child {
              margin-bottom: 0;
              border-bottom: none;
            }
            .field-label,
            .field-value {
              display: block;
              padding: 0;
              border-bottom: none;
            }
            .field-label {
              width: 100%;
              margin-bottom: 8px;
              padding-right: 0;
            }
            .message-container {
              margin-top: 12px;
              padding: 16px 20px;
            }
            .footer {
              padding: 24px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="email-container">
            <div class="header">
              <h1>New Support Inquiry</h1>
            </div>
            
            <div class="content">
              <div class="intro">
                <p class="intro-text">A new support inquiry has been submitted through the contact form.</p>
              </div>

              <div class="fields-container">
                <div class="field">
                  <div class="field-label">Full Name</div>
                  <div class="field-value">${data.fullName}</div>
                </div>

                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>

                <div class="field">
                  <div class="field-label">Company</div>
                  <div class="field-value">${data.companyName || "—"}</div>
                </div>

                <div class="field">
                  <div class="field-label">Phone</div>
                  <div class="field-value">${fullPhone}</div>
                </div>
              </div>

              <div class="divider"></div>

              <div>
                <div class="field-label" style="display: block; margin-bottom: 12px;">Message</div>
                <div class="message-container">
                  <div class="message-text">${data.message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>

            <div class="footer">
              <p class="footer-text">
                This email was sent from the Enlivo Technologies support contact form.<br>
                Submitted at ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * POST Handler - Process support form submission
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, companyName, phoneNumber, countryCode, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
      console.error("Missing SMTP environment variables:", {
        SMTP_EMAIL: process.env.SMTP_EMAIL ? "set" : "missing",
        SMTP_PASSWORD: process.env.SMTP_PASSWORD ? "set" : "missing",
      });
      return NextResponse.json(
        { error: "Email service configuration error. Please contact support." },
        { status: 500 }
      );
    }

    // Create transporter
    // Use explicit host/port if provided, otherwise fallback to gmail service
    const transporter = nodemailer.createTransport(
      process.env.SMTP_HOST && process.env.SMTP_PORT
        ? {
            host: String(process.env.SMTP_HOST),
            port: parseInt(String(process.env.SMTP_PORT), 10),
            secure: false, // true for 465, false for other ports
            auth: {
              user: String(process.env.SMTP_EMAIL),
              pass: String(process.env.SMTP_PASSWORD),
            },
          }
        : {
            service: "gmail",
            auth: {
              user: String(process.env.SMTP_EMAIL),
              pass: String(process.env.SMTP_PASSWORD),
            },
          }
    );

    // Email content
    const smtpEmail = String(process.env.SMTP_EMAIL);
    const mailOptions = {
      from: `"Enlivo Support Form" <${smtpEmail}>`,
      to: smtpEmail,
      replyTo: email,
      subject: `New Support Inquiry from ${fullName}`,
      html: createEmailTemplate({
        fullName,
        email,
        companyName,
        phoneNumber,
        countryCode,
        message,
      }),
      text: `
New Support Inquiry

Name: ${fullName}
Email: ${email}
Company: ${companyName || "Not provided"}
Phone: ${countryCode && phoneNumber ? `${countryCode} ${phoneNumber}` : phoneNumber || "Not provided"}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString()}
      `.trim(),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Support inquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending support email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
