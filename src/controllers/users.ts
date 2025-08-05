import { db } from "@/db/db";
import { Request, Response } from "express";
import bcrypt from "bcrypt";


export async function createUser(req: Request, res: Response) {
    const { tenant_id, name, email, telephone, whatsapp, password, role, status } = req.body;
    try {

        const existingUserByEmail = await db.user.findUnique({
            where: {
                email,
            }
        });

        if (existingUserByEmail) {
            res.status(409).json({
                error: `E-mail ${email} já está em uso`,
                data: null
            })
        }

        const hashedPassword: string = await bcrypt.hash(password, 10);

        const newUser = await db.user.create({
            data: {
                name,
                email,
                telephone,
                whatsapp,
                password: hashedPassword,
                role,
                status,
            },
        });

        const { password: savedPassword, ...userWithoutPassword } = newUser;


        return res.status(201).json({
            data: userWithoutPassword,
            error: null
        });
    } catch (error) {
        return res.status(500).json({
            error: `Erro ao criar usuário`,
            data: null
        });
    }

}

export async function getUsers(req: Request, res: Response) {

    try {
        const users = await db.user.findMany({
            where: {
                status: "active",
            },
            orderBy: {
                createdAt: "desc"
            },
        });

        const filteredUsers = users.map((user) => {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        });

        return res.status(200).json({
            data: filteredUsers,
            error: null
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao listar usuário",
            data: null
        });

    }

}

export async function getUserBiId(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const user = await db.user.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!user) {
            return res.status(404).json({
                data: null,
                error: `Usuário com ID ${id} não encontrado`
            });
        }

        const { password, ...userWithoutPassword } = user as any;

        return res.status(200).json({
            data: userWithoutPassword,
            error: null
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao listar o usuário",
            data: null
        });
    }

}

export async function updateUserBiId(req: Request, res: Response) {
    const { id } = req.params;
    const { tenant_id, name, email, telephone, whatsapp, password, role, status } = req.body;
    try {
        const user = await db.user.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!user) {
            return res.status(404).json({
                data: null,
                error: `Usuário com ID ${id} não encontrado`
            });
        }

        const updatedUser = await db.user.update({
            where: {
                id: Number(id),
            },
            data: {
                name,
                email,
                telephone,
                whatsapp,
                role,
                status,
            }
        });

        const { password, ...userWithoutPassword } = updatedUser;

        return res.status(200).json({
            data: userWithoutPassword,
            error: null
        });


    } catch (error) {
        return res.status(500).json({
            error: "Erro ao alterar dados do usuário",
            data: null
        });
    }

}

export async function updateUserPasswordBiId(req: Request, res: Response) {
    const { id } = req.params;
    const { oldPassword, newPassword } = req.body;

    try {
        const user = await db.user.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!user) {
            return res.status(404).json({
                data: null,
                error: `Usuário com ID ${id} não encontrado`
            });
        }

        const passwordMatch = await bcrypt.compare(oldPassword, user.password);
        if (!passwordMatch) {
            return res.status(403).json({
                error: `Senha antiga não confere`,
                data: null
            });
        }


        const hashedPassword: string = await bcrypt.hash(newPassword, 10);

        const updateUser = await db.user.update({
            where: {
                id: Number(id),
            },
            data: {
                password: hashedPassword
            }
        });

        const { password: savedPassword, ...userWithoutPassword } = updateUser;

        return res.status(200).json({
            data: userWithoutPassword,
            error: null
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao alterar a senha do usuário",
            data: null
        });
    }

}

export async function deleteUserBiId(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const user = await db.user.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!user) {
            return res.status(404).json({
                data: null,
                error: `Usuário com ID ${id} não encontrado`
            });
        }

        await db.user.delete({
            where: {
                id: Number(id),
            },
        });

        return res.status(200).json({
            success: true,
            data: null,
            error: null
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao deletar o usuário",
            data: null
        });
    }

}