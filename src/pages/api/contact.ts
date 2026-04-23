import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const resend = new Resend('re_xxxxxxxxxxxx');

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
  }

  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400 });
  }

  const toEmail   = 'office@giocrete.com';
  const fromEmail = 'noreply@giocrete.com';

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#111318;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#6b7280;width:120px;">Name</td>
              <td style="padding:8px 0;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#6b7280;">Email</td>
              <td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#6b7280;">Phone</td>
              <td style="padding:8px 0;">${escapeHtml(phone)}</td>
            </tr>` : ''}
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#6b7280;vertical-align:top;">Message</td>
              <td style="padding:8px 0;">${escapeHtml(message).replace(/\n/g, '<br/>')}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Resend error:', err);
    return new Response(JSON.stringify({ error: 'Email delivery failed' }), { status: 500 });
  }
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
