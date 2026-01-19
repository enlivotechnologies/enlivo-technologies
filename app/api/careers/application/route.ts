/**
 * app/api/careers/application/route.ts
 *
 * PURPOSE: API route for handling job application form submissions.
 * WHY: Processes application data and sends email notifications.
 */

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Email Template Helper for Job Applications
 */
function createJobApplicationEmailTemplate(data: {
  jobTitle: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  countryCode?: string;
  resumeFile?: string;
  managerExperience?: string;
  dotnetVersionExperience?: string;
  willingToRelocate?: string;
  noticePeriod?: string;
  noticePeriodNegotiable?: string;
  productCompanyExperience?: string;
  dotnet8910Experience?: string;
  indiaCitizen?: string;
  currentCTCRange?: string;
  currentCTCBreakup?: string;
  expectedCTC?: string;
  linkedinProfile?: string;
  proudProject?: string;
  jobOffers?: string;
  foundJobOpportunity?: string;
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
          .badge {
            display: inline-block;
            padding: 4px 12px;
            background-color: #1A1A1A;
            color: #ffffff;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-radius: 4px;
            margin-bottom: 12px;
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
          .job-title {
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
            margin-top: 8px;
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
            width: 180px;
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
          .section-divider {
            height: 1px;
            background-color: #f0f0f0;
            margin: 32px 0;
          }
          .section-title {
            font-size: 16px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 20px;
            margin-top: 8px;
          }
          .text-container {
            margin-top: 12px;
            padding: 20px 24px;
            background-color: #fafafa;
            border-radius: 4px;
          }
          .text-content {
            font-size: 15px;
            color: #1a1a1a;
            line-height: 1.7;
            white-space: pre-wrap;
            word-wrap: break-word;
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
            .text-container {
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
              <span class="badge">Job Application</span>
              <h1>New Job Application</h1>
              <div class="job-title">Position: ${data.jobTitle}</div>
            </div>
            
            <div class="content">
              <div class="intro">
                <p class="intro-text">A new job application has been submitted through the careers page.</p>
              </div>

              <!-- Personal Information Section -->
              <div class="section-title">Personal Information</div>
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
                  <div class="field-label">Phone</div>
                  <div class="field-value">${fullPhone}</div>
                </div>

                ${data.resumeFile ? `
                <div class="field">
                  <div class="field-label">Resume</div>
                  <div class="field-value">${data.resumeFile}</div>
                </div>
                ` : ''}

                ${data.linkedinProfile ? `
                <div class="field">
                  <div class="field-label">LinkedIn</div>
                  <div class="field-value"><a href="${data.linkedinProfile}" target="_blank">${data.linkedinProfile}</a></div>
                </div>
                ` : ''}
              </div>

              <!-- Experience & Qualifications Section -->
              ${(data.managerExperience || data.dotnetVersionExperience || data.dotnet8910Experience || data.productCompanyExperience) ? `
              <div class="section-divider"></div>
              <div class="section-title">Experience & Qualifications</div>
              <div class="fields-container">
                ${data.managerExperience ? `
                <div class="field">
                  <div class="field-label">Manager Experience</div>
                  <div class="field-value">${data.managerExperience}</div>
                </div>
                ` : ''}

                ${data.dotnetVersionExperience ? `
                <div class="field">
                  <div class="field-label">DotNet 9.0+ Experience</div>
                  <div class="field-value">${data.dotnetVersionExperience}</div>
                </div>
                ` : ''}

                ${data.dotnet8910Experience ? `
                <div class="field">
                  <div class="field-label">DotNet 8/9/10 Experience</div>
                  <div class="field-value">${data.dotnet8910Experience}</div>
                </div>
                ` : ''}

                ${data.productCompanyExperience ? `
                <div class="field">
                  <div class="field-label">Product Company Experience</div>
                  <div class="field-value">${data.productCompanyExperience}</div>
                </div>
                ` : ''}
              </div>
              ` : ''}

              <!-- Availability Section -->
              ${(data.willingToRelocate || data.noticePeriod || data.noticePeriodNegotiable) ? `
              <div class="section-divider"></div>
              <div class="section-title">Availability</div>
              <div class="fields-container">
                ${data.willingToRelocate ? `
                <div class="field">
                  <div class="field-label">Willing to Relocate</div>
                  <div class="field-value">${data.willingToRelocate}</div>
                </div>
                ` : ''}

                ${data.noticePeriod ? `
                <div class="field">
                  <div class="field-label">Notice Period</div>
                  <div class="field-value">${data.noticePeriod}</div>
                </div>
                ` : ''}

                ${data.noticePeriodNegotiable ? `
                <div class="field">
                  <div class="field-label">Notice Period Negotiable</div>
                  <div class="field-value">${data.noticePeriodNegotiable}</div>
                </div>
                ` : ''}
              </div>
              ` : ''}

              <!-- Compensation Section -->
              ${(data.currentCTCRange || data.currentCTCBreakup || data.expectedCTC) ? `
              <div class="section-divider"></div>
              <div class="section-title">Compensation</div>
              <div class="fields-container">
                ${data.currentCTCRange ? `
                <div class="field">
                  <div class="field-label">Current CTC Range</div>
                  <div class="field-value">${data.currentCTCRange}</div>
                </div>
                ` : ''}

                ${data.currentCTCBreakup ? `
                <div class="field">
                  <div class="field-label">Current CTC Breakup</div>
                  <div class="field-value">${data.currentCTCBreakup}</div>
                </div>
                ` : ''}

                ${data.expectedCTC ? `
                <div class="field">
                  <div class="field-label">Expected CTC</div>
                  <div class="field-value">${data.expectedCTC}</div>
                </div>
                ` : ''}
              </div>
              ` : ''}

              <!-- Additional Information Section -->
              ${(data.indiaCitizen || data.proudProject || data.jobOffers || data.foundJobOpportunity) ? `
              <div class="section-divider"></div>
              <div class="section-title">Additional Information</div>
              <div class="fields-container">
                ${data.indiaCitizen ? `
                <div class="field">
                  <div class="field-label">India Citizen & Based</div>
                  <div class="field-value">${data.indiaCitizen}</div>
                </div>
                ` : ''}

                ${data.proudProject ? `
                <div class="field">
                  <div class="field-label">Proud Project</div>
                  <div class="field-value">
                    <div class="text-container">
                      <div class="text-content">${data.proudProject.replace(/\n/g, '<br>')}</div>
                    </div>
                  </div>
                </div>
                ` : ''}

                ${data.jobOffers ? `
                <div class="field">
                  <div class="field-label">Job Offers</div>
                  <div class="field-value">
                    <div class="text-container">
                      <div class="text-content">${data.jobOffers.replace(/\n/g, '<br>')}</div>
                    </div>
                  </div>
                </div>
                ` : ''}

                ${data.foundJobOpportunity ? `
                <div class="field">
                  <div class="field-label">Found Job Opportunity</div>
                  <div class="field-value">
                    <div class="text-container">
                      <div class="text-content">${data.foundJobOpportunity.replace(/\n/g, '<br>')}</div>
                    </div>
                  </div>
                </div>
                ` : ''}
              </div>
              ` : ''}
            </div>

            <div class="footer">
              <p class="footer-text">
                This email was sent from the Enlivo Technologies careers page job application form.<br>
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
 * POST Handler - Process job application form submission
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      jobTitle,
      fullName,
      email,
      phoneNumber,
      countryCode,
      resumeFile,
      managerExperience,
      dotnetVersionExperience,
      willingToRelocate,
      noticePeriod,
      noticePeriodNegotiable,
      productCompanyExperience,
      dotnet8910Experience,
      indiaCitizen,
      currentCTCRange,
      currentCTCBreakup,
      expectedCTC,
      linkedinProfile,
      proudProject,
      jobOffers,
      foundJobOpportunity,
    } = body;

    // Validate required fields
    if (!jobTitle || !fullName || !email) {
      return NextResponse.json(
        { error: "Missing required fields: jobTitle, fullName, and email are required" },
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
      from: `"Enlivo Careers" <${smtpEmail}>`,
      to: smtpEmail,
      replyTo: email,
      subject: `New Job Application: ${jobTitle} - ${fullName}`,
      html: createJobApplicationEmailTemplate({
        jobTitle,
        fullName,
        email,
        phoneNumber,
        countryCode,
        resumeFile,
        managerExperience,
        dotnetVersionExperience,
        willingToRelocate,
        noticePeriod,
        noticePeriodNegotiable,
        productCompanyExperience,
        dotnet8910Experience,
        indiaCitizen,
        currentCTCRange,
        currentCTCBreakup,
        expectedCTC,
        linkedinProfile,
        proudProject,
        jobOffers,
        foundJobOpportunity,
      }),
      text: `
New Job Application

Position: ${jobTitle}

Personal Information:
Name: ${fullName}
Email: ${email}
Phone: ${countryCode && phoneNumber ? `${countryCode} ${phoneNumber}` : phoneNumber || "Not provided"}
Resume: ${resumeFile || "Not provided"}
LinkedIn: ${linkedinProfile || "Not provided"}

Experience & Qualifications:
Manager Experience: ${managerExperience || "Not provided"}
DotNet 9.0+ Experience: ${dotnetVersionExperience || "Not provided"}
DotNet 8/9/10 Experience: ${dotnet8910Experience || "Not provided"}
Product Company Experience: ${productCompanyExperience || "Not provided"}

Availability:
Willing to Relocate: ${willingToRelocate || "Not provided"}
Notice Period: ${noticePeriod || "Not provided"}
Notice Period Negotiable: ${noticePeriodNegotiable || "Not provided"}

Compensation:
Current CTC Range: ${currentCTCRange || "Not provided"}
Current CTC Breakup: ${currentCTCBreakup || "Not provided"}
Expected CTC: ${expectedCTC || "Not provided"}

Additional Information:
India Citizen & Based: ${indiaCitizen || "Not provided"}
Proud Project: ${proudProject || "Not provided"}
Job Offers: ${jobOffers || "Not provided"}
Found Job Opportunity: ${foundJobOpportunity || "Not provided"}

---
Submitted at: ${new Date().toLocaleString()}
      `.trim(),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Job application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending job application email:", error);
    return NextResponse.json(
      { error: "Failed to send application. Please try again later." },
      { status: 500 }
    );
  }
}
