import { db } from "@/db/db";
import { Request, Response } from "express";

export async function createTenant(req: Request, res: Response) {
    // console.log(req.body);

    const { tenant_id, name, email, telephone, whatsapp, password, role, status } = req.body;
    try {
        const newTenant = await db.tenant.create({
            data: {
                name,
                email,
                telephone,
                whatsapp,
                password,
                role,
                status,
            },
        });
        return res.status(201).json(newTenant);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
    }

}


export async function getTenants(req: Request, res: Response) {

    try {
        const Tenants = await db.tenant.findMany({
            where: {
                status: "active",
            },
            orderBy: {
                createdAt: "desc"
            },
        });
        return res.status(200).json(Tenants);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error });

    }

}

export async function getTenantBiId(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const Tenant = await db.tenant.findUnique({
            where: {
                id: Number(id),
            },
        });
        return res.status(200).json(Tenant);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }

}