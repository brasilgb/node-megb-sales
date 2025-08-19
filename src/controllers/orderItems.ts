import { db } from "@/db/db";
import { Request, Response } from "express";

export async function createOrderItems(req: Request, res: Response) {
    const {
        user_id,
        order_id,
        product_id,
        quantity,
        price,
        total
    } = req.body;
    try {
        
        const newOrderItems = await db.orderItem.create({
            data: {
                order_id,
                product_id,
                quantity,
                price,
                total
            },
        });

        return res.status(201).json({
            data: newOrderItems,
            error: null
        });
    } catch (error) {
        return res.status(500).json({
            error: `Erro ao criar pedido` + error,
            data: null
        });
    }

}

export async function getOrderItemss(req: Request, res: Response) {

    try {
        const orders = await db.orderItem.findMany({
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

export async function getOrderItemsBiId(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const order = await db.orderItem.findUnique({
            where: { // Should be orderItem
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

export async function updateOrderItemsBiId(req: Request, res: Response) {
    const { id } = req.params;
    const {
        order_id,
        product_id,
        quantity,
        price,
        total
    } = req.body;
    try {
        const orderItem = await db.orderItem.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!orderItem) {
            return res.status(404).json({ // Should be orderItem
                data: null,
                error: `Pedido com ID ${id} não encontrado`
            });
        }

        const updatedOrderItems = await db.orderItem.update({
            where: {
                id: Number(id), // Should be orderItem
            },
            data: {
                order_id,
                product_id,
                quantity,
                price,
                total
            }
        });

        return res.status(200).json({
            data: updatedOrderItems,
            error: null
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao alterar dados do pedido",
            data: null
        });
    }

}

export async function deleteOrderItemsBiId(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const orderItem = await db.orderItem.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!orderItem) {
            return res.status(404).json({ // Should be orderItem
                data: null,
                error: `Pedido com ID ${id} não encontrado`
            });
        }

        await db.order.delete({
            where: {
                id: Number(id), // Should be orderItem
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