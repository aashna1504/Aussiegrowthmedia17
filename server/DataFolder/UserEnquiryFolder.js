const nodemailer = require("nodemailer");
require("dotenv").config();

const ADMIN_EMAIL = "aashnasagar19@gmail.com";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const adminTemplate = ({ name, email, phone, callback, service }) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
  @keyframes shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position: 600px 0; }
  }
  @keyframes pulse {
    0%,100% { opacity:1; }
    50%      { opacity:.5; }
  }
  @keyframes fadeSlideIn {
    from { opacity:0; transform:translateY(16px); }
    to   { opacity:1; transform:translateY(0); }
  }
  .card   { animation: fadeSlideIn .6s ease both; }
  .row    { animation: fadeSlideIn .6s ease both; }
  .badge  { animation: pulse 2.4s ease infinite; }
  .bar    {
    background: linear-gradient(90deg,#e36a2e 0%,#ff9a5c 40%,#e36a2e 80%);
    background-size: 600px 100%;
    animation: shimmer 2.2s linear infinite;
  }
</style>
</head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:'Segoe UI',Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" class="card"
  style="background:linear-gradient(160deg,#141418 0%,#0f0f14 100%);
         border-radius:20px;overflow:hidden;
         border:1px solid rgba(227,106,46,0.2);
         box-shadow:0 24px 80px rgba(0,0,0,0.6),0 0 0 1px rgba(255,255,255,0.03);">

  <!-- Animated top bar -->
  <tr><td>
    <div class="bar" style="height:4px;width:100%;"></div>
  </td></tr>

  <!-- Header -->
  <tr><td style="padding:36px 40px 28px;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <img src="https://res.cloudinary.com/dbpzzvcik/image/upload/v1778231875/logoflat_euvua9.png"
               alt="Aussie Growth Media" height="40"
               style="display:block;height:40px;width:auto;"/>
        </td>
        <td align="right">
          <span class="badge" style="display:inline-block;background:linear-gradient(135deg,#e36a2e22,#e36a2e44);
                border:1px solid #e36a2e66;border-radius:20px;padding:5px 14px;
                font-size:11px;font-weight:700;color:#e36a2e;letter-spacing:.1em;text-transform:uppercase;">
            🔔 New Lead
          </span>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- Hero banner -->
  <tr><td style="padding:0 40px 32px;">
    <div style="background:linear-gradient(135deg,#e36a2e18 0%,#e36a2e08 100%);
                border:1px solid #e36a2e30;border-radius:16px;padding:28px 28px 24px;">
      <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#e36a2e;
                letter-spacing:.2em;text-transform:uppercase;">Incoming Enquiry</p>
      <h1 style="margin:0 0 8px;font-size:26px;font-weight:800;color:#ffffff;line-height:1.2;">
        ${name}
        <span style="color:#e36a2e;">wants to connect</span>
      </h1>
      <p style="margin:0;font-size:13px;color:#888;line-height:1.6;">
        Submitted via aussiegrowthmedia.com.au — respond within 2 business hours
      </p>
    </div>
  </td></tr>

  <!-- Details table -->
  <tr><td style="padding:0 40px 32px;">
    <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#555;
              letter-spacing:.18em;text-transform:uppercase;">Lead Details</p>

    <!-- Name -->
    <div class="row" style="display:flex;align-items:center;padding:14px 18px;
              background:#ffffff08;border-radius:12px;margin-bottom:8px;
              border:1px solid #ffffff08;">
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td width="32" style="vertical-align:middle;">
          <div style="width:32px;height:32px;border-radius:8px;
                      background:linear-gradient(135deg,#e36a2e,#c85520);
                      font-size:14px;font-weight:900;color:#fff;
                      text-align:center;line-height:32px;">${name.charAt(0).toUpperCase()}</div>
        </td>
        <td style="padding-left:14px;vertical-align:middle;">
          <p style="margin:0;font-size:11px;color:#666;font-weight:600;text-transform:uppercase;letter-spacing:.08em;">Full Name</p>
          <p style="margin:4px 0 0;font-size:15px;color:#fff;font-weight:700;">${name}</p>
        </td>
      </tr></table>
    </div>

    <!-- Email -->
    <div class="row" style="padding:14px 18px;background:#ffffff08;border-radius:12px;margin-bottom:8px;border:1px solid #ffffff08;">
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td width="32" style="vertical-align:middle;">
          <div style="width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#e36a2e33,#e36a2e11);font-size:15px;text-align:center;line-height:32px;">✉️</div>
        </td>
        <td style="padding-left:14px;vertical-align:middle;">
          <p style="margin:0;font-size:11px;color:#666;font-weight:600;text-transform:uppercase;letter-spacing:.08em;">Email Address</p>
          <p style="margin:4px 0 0;font-size:15px;color:#e36a2e;font-weight:700;">${email}</p>
        </td>
      </tr></table>
    </div>

    <!-- Phone -->
    <div class="row" style="padding:14px 18px;background:#ffffff08;border-radius:12px;margin-bottom:8px;border:1px solid #ffffff08;">
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td width="32" style="vertical-align:middle;">
          <div style="width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#e36a2e33,#e36a2e11);font-size:15px;text-align:center;line-height:32px;">📞</div>
        </td>
        <td style="padding-left:14px;vertical-align:middle;">
          <p style="margin:0;font-size:11px;color:#666;font-weight:600;text-transform:uppercase;letter-spacing:.08em;">Phone</p>
          <p style="margin:4px 0 0;font-size:15px;color:#fff;font-weight:700;">${phone || "Not provided"}</p>
        </td>
      </tr></table>
    </div>

    <!-- Callback -->
    <div class="row" style="padding:14px 18px;background:#ffffff08;border-radius:12px;margin-bottom:8px;border:1px solid #ffffff08;">
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td width="32" style="vertical-align:middle;">
          <div style="width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#e36a2e33,#e36a2e11);font-size:15px;text-align:center;line-height:32px;">🕐</div>
        </td>
        <td style="padding-left:14px;vertical-align:middle;">
          <p style="margin:0;font-size:11px;color:#666;font-weight:600;text-transform:uppercase;letter-spacing:.08em;">Preferred Callback Time</p>
          <p style="margin:4px 0 0;font-size:15px;color:#fff;font-weight:700;">${callback || "Not specified"}</p>
        </td>
      </tr></table>
    </div>

    <!-- Service -->
    <div class="row" style="padding:14px 18px;background:linear-gradient(135deg,#e36a2e18,#e36a2e08);
              border-radius:12px;border:1px solid #e36a2e33;">
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td width="32" style="vertical-align:middle;">
          <div style="width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#e36a2e66,#e36a2e33);font-size:15px;text-align:center;line-height:32px;">🎯</div>
        </td>
        <td style="padding-left:14px;vertical-align:middle;">
          <p style="margin:0;font-size:11px;color:#e36a2e99;font-weight:600;text-transform:uppercase;letter-spacing:.08em;">Service(s) Interested In</p>
          <p style="margin:4px 0 0;font-size:15px;color:#e36a2e;font-weight:800;">${service || "Not selected"}</p>
        </td>
      </tr></table>
    </div>
  </td></tr>

  <!-- CTA -->
  <tr><td style="padding:0 40px 36px;">
    <a href="mailto:${email}" style="display:block;text-align:center;
       background:linear-gradient(135deg,#e36a2e,#c85520);
       color:#fff;font-size:13px;font-weight:800;letter-spacing:.15em;text-transform:uppercase;
       padding:16px 32px;border-radius:50px;text-decoration:none;
       box-shadow:0 8px 32px rgba(227,106,46,0.4);">
      Reply to ${name} →
    </a>
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding:24px 40px;border-top:1px solid #ffffff0a;">
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td>
        <p style="margin:0;font-size:11px;color:#444;line-height:1.6;">
          Aussie Growth Media · Helping Aussie businesses grow online<br/>
          <a href="https://aussiegrowthmedia.com.au" style="color:#e36a2e88;text-decoration:none;">aussiegrowthmedia.com.au</a>
        </p>
      </td>
      <td align="right">
        <p style="margin:0;font-size:10px;color:#333;">Auto-generated alert</p>
      </td>
    </tr></table>
  </td></tr>

</table>
</td></tr>
</table>

</body>
</html>
`;

const userTemplate = ({ name, email, service }) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
  @keyframes shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position: 600px 0; }
  }
  @keyframes floatUp {
    from { opacity:0; transform:translateY(24px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  .hero  { animation: floatUp .7s ease both; }
  .card  { animation: floatUp .7s .1s ease both; }
  .step  { animation: floatUp .6s ease both; }
  .bar   {
    background: linear-gradient(90deg,#e36a2e,#ff9a5c 40%,#e36a2e 80%);
    background-size: 600px 100%;
    animation: shimmer 2.2s linear infinite;
  }
</style>
</head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:'Segoe UI',Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0"
  style="background:linear-gradient(160deg,#141418 0%,#0f0f14 100%);
         border-radius:20px;overflow:hidden;
         border:1px solid rgba(227,106,46,0.18);
         box-shadow:0 24px 80px rgba(0,0,0,0.6),0 0 0 1px rgba(255,255,255,0.03);">

  <!-- Animated top bar -->
  <tr><td>
    <div class="bar" style="height:4px;width:100%;"></div>
  </td></tr>

  <!-- Logo -->
  <tr><td style="padding:36px 40px 0;" class="hero">
    <img src="https://res.cloudinary.com/dbpzzvcik/image/upload/v1778231875/logoflat_euvua9.png"
         alt="Aussie Growth Media" height="38"
         style="display:block;height:38px;width:auto;"/>
  </td></tr>

  <!-- Hero greeting -->
  <tr><td style="padding:28px 40px 32px;" class="hero">
    <div style="background:linear-gradient(135deg,#e36a2e14,#e36a2e06);
                border:1px solid #e36a2e28;border-radius:20px;padding:32px 32px 28px;
                text-align:center;">
      <h1 style="margin:0 0 10px;font-size:28px;font-weight:900;color:#ffffff;line-height:1.2;">
        G'day, <span style="color:#e36a2e;">${name}!</span>
      </h1>
      <p style="margin:0;font-size:15px;color:#888;line-height:1.7;max-width:420px;margin:0 auto;">
        Thanks for reaching out to <strong style="color:#fff;">Aussie Growth Media</strong>.
        We've received your enquiry and we're on it!
      </p>
    </div>
  </td></tr>

  ${service ? `
  <!-- Selected service -->
  <tr><td style="padding:0 40px 28px;" class="card">
    <div style="background:#ffffff06;border:1px solid #ffffff0c;border-radius:16px;padding:20px 22px;">
      <p style="margin:0 0 8px;font-size:11px;color:#555;font-weight:700;text-transform:uppercase;letter-spacing:.12em;">You enquired about</p>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="font-size:18px;">🎯</span>
        <p style="margin:0;font-size:16px;font-weight:800;color:#e36a2e;">${service}</p>
      </div>
    </div>
  </td></tr>
  ` : ''}

  <!-- What happens next -->
  <tr><td style="padding:0 40px 28px;">
    <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#555;
              letter-spacing:.18em;text-transform:uppercase;">What happens next</p>

    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding-bottom:10px;">
          <div class="step" style="display:flex;align-items:flex-start;gap:0;padding:16px 18px;
                    background:#ffffff06;border-radius:12px;border:1px solid #ffffff08;">
            <table width="100%" cellpadding="0" cellspacing="0"><tr>
              <td width="36" style="vertical-align:top;">
                <div style="width:28px;height:28px;border-radius:50%;
                            background:linear-gradient(135deg,#e36a2e,#c85520);
                            font-size:12px;font-weight:900;color:#fff;
                            text-align:center;line-height:28px;">1</div>
              </td>
              <td style="padding-left:12px;vertical-align:top;">
                <p style="margin:0;font-size:13px;font-weight:700;color:#fff;">Enquiry Received</p>
                <p style="margin:4px 0 0;font-size:12px;color:#666;line-height:1.5;">Your message has landed safely in our inbox.</p>
              </td>
            </tr></table>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding-bottom:10px;">
          <div class="step" style="padding:16px 18px;background:#ffffff06;border-radius:12px;border:1px solid #ffffff08;">
            <table width="100%" cellpadding="0" cellspacing="0"><tr>
              <td width="36" style="vertical-align:top;">
                <div style="width:28px;height:28px;border-radius:50%;
                            background:linear-gradient(135deg,#e36a2eaa,#e36a2e66);
                            font-size:12px;font-weight:900;color:#fff;
                            text-align:center;line-height:28px;">2</div>
              </td>
              <td style="padding-left:12px;vertical-align:top;">
                <p style="margin:0;font-size:13px;font-weight:700;color:#fff;">Our Team Reviews It</p>
                <p style="margin:4px 0 0;font-size:12px;color:#666;line-height:1.5;">A specialist matched to your needs will review your enquiry.</p>
              </td>
            </tr></table>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="step" style="padding:16px 18px;background:linear-gradient(135deg,#e36a2e14,#e36a2e06);
                    border-radius:12px;border:1px solid #e36a2e30;">
            <table width="100%" cellpadding="0" cellspacing="0"><tr>
              <td width="36" style="vertical-align:top;">
                <div style="width:28px;height:28px;border-radius:50%;
                            background:linear-gradient(135deg,#e36a2e55,#e36a2e22);
                            font-size:12px;font-weight:900;color:#e36a2e;
                            text-align:center;line-height:28px;">3</div>
              </td>
              <td style="padding-left:12px;vertical-align:top;">
                <p style="margin:0;font-size:13px;font-weight:700;color:#e36a2e;">We'll be in touch — within 2 hrs</p>
                <p style="margin:4px 0 0;font-size:12px;color:#888;line-height:1.5;">Expect a call or email from us very soon!</p>
              </td>
            </tr></table>
          </div>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- CTA -->
  <tr><td style="padding:4px 40px 36px;">
    <a href="https://aussiegrowthmedia.com.au"
       style="display:block;text-align:center;
              background:linear-gradient(135deg,#e36a2e,#c85520);
              color:#fff;font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;
              padding:16px 32px;border-radius:50px;text-decoration:none;
              box-shadow:0 8px 32px rgba(227,106,46,0.35);">
      Visit Our Website →
    </a>
  </td></tr>

  <!-- Divider -->
  <tr><td style="padding:0 40px;">
    <div style="height:1px;background:linear-gradient(90deg,transparent,#e36a2e30,transparent);"></div>
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding:24px 40px 32px;">
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td>
        <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#fff;">Aussie Growth Media</p>
        <p style="margin:0;font-size:11px;color:#444;line-height:1.6;">
          Helping Aussie businesses grow online<br/>
          <a href="https://aussiegrowthmedia.com.au" style="color:#e36a2e88;text-decoration:none;">aussiegrowthmedia.com.au</a>
        </p>
      </td>
      <td align="right" style="vertical-align:bottom;">
        <p style="margin:0;font-size:10px;color:#333;line-height:1.5;">
          You're receiving this because<br/>you submitted an enquiry.
        </p>
      </td>
    </tr></table>
  </td></tr>

</table>
</td></tr>
</table>

</body>
</html>
`;

let enquiryInsert = async (req, res) => {
  const { name, email, phone, callback, service } = req.body;

  if (!name || !email) {
    return res
      .status(400)
      .json({ success: false, message: "Name and email are required." });
  }

  try {
    await transporter.sendMail({
      from: `"Aussie Growth Media" <${process.env.EMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: `🔔 New Enquiry from ${name} — ${service || "General"}`,
      html: adminTemplate({ name, email, phone, callback, service }),
    });

    await transporter.sendMail({
      from: `"Aussie Growth Media" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We've received your enquiry, ${name}!`,
      html: userTemplate({ name, email, service }),
    });

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { enquiryInsert };
