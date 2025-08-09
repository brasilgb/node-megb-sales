import { Request, Response } from "express";
import { db } from "@/db/db";
import bcrypt from "bcrypt";
import { generateAccessToken } from "@/utils/generateJWT";
import { addMinutes } from "date-fns";
import { Resend } from 'resend';
import { generateEmailHTML } from "@/utils/generateEmailTemplate";
const resend = new Resend(process.env.RESEND_API_KEY);


export async function authorizeUser(req: Request, res: Response) {
    const { email, password } = req.body;
    
    try {

        const existingUser = await db.user.findUnique({
            where: {
                email,
            }
        });

        if (!existingUser) {
            return res.status(403).json({
                error: `Credenciais não encontradas`,
                data: null
            });
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(403).json({
                error: `Credenciais não encontradas`,
                data: null
            });
        }

        const { password: userPassword, ...userWithoutPassword } = existingUser;

        const accessToken = generateAccessToken(userWithoutPassword);

        const result = {
            ...userWithoutPassword,
            accessToken
        }

        return res.status(200).json({
            error: null,
            data: result
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao criar usuário",
            data: null
        });
    }

}


const generateToken = () => {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export async function forgotPassword(req: Request, res: Response) {
    try {
        const { email } = req.body;
        const existingUser = await db.user.findUnique({
            where: {
                email,
            }
        });

        if (!existingUser) {
            return res.status(404).json({
                data: null,
                error: `Usuário com e-mail ${email} não encontrado`
            });
        }
        const resetToken = generateToken().toString();
        const resetTokenExpiry = addMinutes(new Date(), 30);

        const updatedUser = await db.user.update({
            where: { email },
            data: {
                resetToken,
                resetTokenExpiry
            },
        });

        const emailHtml = generateEmailHTML({ resetToken });


        // send email reset password
        const { data, error} = await resend.emails.send({
            from: 'MEGB <resetting-password@megbos.com.br>',
            to: email,
            subject: 'Solicitação de Redefinição de Senha',
            html: emailHtml
        });

        if (error) {
            return res.status(500).json({error});
        }

        const result = {
            userId: updatedUser.id,
            emailId: data?.id
        }
        return res.status(200).json({
            message: `E-mail de redefinição de senha enviado para ${email}`,
            data: result
        });

    } catch (error) {
        return res.status(200).json({
            message: null,
            data: `Algo deu errado. Tente novamente mais tarde.`,
        });
    }

}

export async function verifyToken(req: Request, res: Response) {
    
    try {
        const { token } = req.query;
        const existingUser = await db.user.findFirst({
            where: {
                resetToken: token as string,
                resetTokenExpiry: {
                    gte: new Date()
                }
            }
        });

        if (!existingUser) {
            return res.status(404).json({
                data: null,
                error: `Token inválido ou expirado`
            });
        }
        return res.status(200).json({
            message: `Token válido`,
            data: null
        });

    } catch (error) {
        return res.status(200).json({
            message: null,
            data: `Algo deu errado. Tente novamente mais tarde.`,
        });
    }

}

export const changePassword = async (req: Request, res: Response) => {
  const { token } = req.query;
  const { newPassword } = req.body;
  try {
    const user = await db.user.findFirst({
      where: {
        resetToken: token as string,
        resetTokenExpiry: { gte: new Date() },
      },
    });
 
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }
 
    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
 
    // Update the user's password and clear the reset token and expiry
    await db.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });
 
    res.status(200).json({ message: "Senha alterada com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao alterar a senha", error: error });
  }
};