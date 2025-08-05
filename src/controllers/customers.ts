import { db } from "@/db/db";
import { Request, Response } from "express";

export async function createCustomer(req: Request, res: Response) {
    const {
        user_id,
        name,
        cpf_cnpj,
        birth_date,
        email,
        zip_code,
        state,
        city,
        district,
        street,
        complement,
        number,
        telephone,
        contact_name,
        whatsapp,
        contact_telephone,
        observations,
    } = req.body;
    try {
        const existingCustomerByReference = await db.customer.findUnique({
            where: {
                email,
            }
        });

        if (existingCustomerByReference) {
            res.status(409).json({
                error: `Esta ${email} já está em uso`,
                data: null
            })
        }

        const newCustomer = await db.customer.create({
            data: {
                user_id,
                name,
                cpf_cnpj,
                birth_date,
                email,
                zip_code,
                state,
                city,
                district,
                street,
                complement,
                number,
                telephone,
                contact_name,
                whatsapp,
                contact_telephone,
                observations
            },
        });

        return res.status(201).json({
            data: newCustomer,
            error: null
        });
    } catch (error) {
        return res.status(500).json({
            error: `Erro ao criar cliente` + error,
            data: null
        });
    }

}

export async function getCustomers(req: Request, res: Response) {

    try {
        const customers = await db.customer.findMany({
            orderBy: {
                createdAt: "desc"
            },
        });

        return res.status(200).json({
            data: customers,
            error: null
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao listar cliente",
            data: null
        });

    }

}

export async function getCustomerBiId(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const customer = await db.customer.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!customer) {
            return res.status(404).json({
                data: null,
                error: `Cliente com ID ${id} não encontrado`
            });
        }

        return res.status(200).json({
            data: customer,
            error: null
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao listar o cliente",
            data: null
        });
    }

}

export async function updateCustomerBiId(req: Request, res: Response) {
    const { id } = req.params;
    const {
        user_id,
        name,
        cpf_cnpj,
        birth_date,
        email,
        zip_code,
        state,
        city,
        district,
        street,
        complement,
        number,
        telephone,
        contact_name,
        whatsapp,
        contact_telephone,
        observations
    } = req.body;
    try {
        const customer = await db.customer.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!customer) {
            return res.status(404).json({
                data: null,
                error: `Cliente com ID ${id} não encontrado`
            });
        }

        const updatedCustomer = await db.customer.update({
            where: {
                id: Number(id),
            },
            data: {
                user_id,
                name,
                cpf_cnpj,
                birth_date,
                email,
                zip_code,
                state,
                city,
                district,
                street,
                complement,
                number,
                telephone,
                contact_name,
                whatsapp,
                contact_telephone,
                observations
            }
        });

        return res.status(200).json({
            data: updatedCustomer,
            error: null
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao alterar dados do cliente",
            data: null
        });
    }

}

export async function deleteCustomerBiId(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const customer = await db.customer.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!customer) {
            return res.status(404).json({
                data: null,
                error: `Cliente com ID ${id} não encontrado`
            });
        }

        await db.customer.delete({
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
            error: "Erro ao deletar o cliente",
            data: null
        });
    }

}