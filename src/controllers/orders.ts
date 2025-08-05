import { db } from "@/db/db";
import { Request, Response } from "express";

export async function createOrder(req: Request, res: Response) {
    const {
        user_id,
        customer_id,
        product_id,
        amount,
        value,
        total,
        flex,
        total_flex
    } = req.body;
    try {
        
        const newOrder = await db.order.create({
            data: {
                user_id,
                customer_id,
                product_id,
                amount,
                value,
                total,
                flex,
                total_flex
            },
        });

        return res.status(201).json({
            data: newOrder,
            error: null
        });
    } catch (error) {
        return res.status(500).json({
            error: `Erro ao criar pedido` + error,
            data: null
        });
    }

}

export async function getOrders(req: Request, res: Response) {

    try {
        const orders = await db.order.findMany({
            orderBy: {
                createdAt: "desc"
            },
        });

        return res.status(200).json({
            data: orders,
            error: null
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao listar pedido",
            data: null
        });

    }

}

export async function getOrderBiId(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const order = await db.order.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!order) {
            return res.status(404).json({
                data: null,
                error: `Pedido com ID ${id} não encontrado`
            });
        }

        return res.status(200).json({
            data: order,
            error: null
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao listar o pedido",
            data: null
        });
    }

}

export async function updateOrderBiId(req: Request, res: Response) {
    const { id } = req.params;
    const {
        user_id,
        customer_id,
        product_id,
        amount,
        value,
        total,
        flex,
        total_flex
    } = req.body;
    try {
        const order = await db.order.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!order) {
            return res.status(404).json({
                data: null,
                error: `Pedido com ID ${id} não encontrado`
            });
        }

        const updatedOrder = await db.order.update({
            where: {
                id: Number(id),
            },
            data: {
                user_id,
                customer_id,
                product_id,
                amount,
                value,
                total,
                flex,
                total_flex
            }
        });

        return res.status(200).json({
            data: updatedOrder,
            error: null
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao alterar dados do pedido",
            data: null
        });
    }

}

export async function deleteOrderBiId(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const order = await db.order.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!order) {
            return res.status(404).json({
                data: null,
                error: `Pedido com ID ${id} não encontrado`
            });
        }

        await db.order.delete({
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
            error: "Erro ao deletar o pedido",
            data: null
        });
    }

}