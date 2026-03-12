import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactRequestBody = {
  name?: string;
  email: string;
  message: string;
};

type ContactResponse =
  | { success: true }
  | { success: false; error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { name, email, message } = req.body as ContactRequestBody;

  if (!email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "Email e mensagem são obrigatórios." });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({
      success: false,
      error: "Servidor: RESEND_API_KEY não está configurada no .env.local",
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || "adelmouhaidly6@gmail.com",
      subject: `Contato pelo portfólio - ${name || "Interessado(a)"}`,
      reply_to: email,
      text: [
        `Nome: ${name || "não informado"}`,
        `Email do contato: ${email}`,
        "",
        "Mensagem:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend API error:", error);
      return res.status(400).json({
        success: false,
        error: error.message || "Falha ao enviar email. Verifique a API key e o domínio na Resend.",
      });
    }

    return res.status(200).json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erro desconhecido";
    console.error("Erro ao enviar email de contato:", error);
    return res.status(500).json({
      success: false,
      error: message || "Erro ao enviar mensagem. Tente novamente.",
    });
  }
}

