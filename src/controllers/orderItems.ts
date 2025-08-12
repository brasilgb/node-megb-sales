import { db } from "@/db/db";
import { Request, Response } from "express";

export async function createOrderItems(req: Request, res: Response) {
    const {
        user_id,
        order_id,
        product_id,
        quantity
    } = req.body;
    try {
        
        const newOrderItems = await db.orderItems.create({
            data: {
                order_id,
                product_id,
                quantity
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
        const orders = await db.orderItems.findMany({
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
        const order = await db.orderItems.findUnique({
            where: { // Should be orderItems
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
        quantity
    } = req.body;
    try {
        const orderItems = await db.orderItems.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!orderItems) {
            return res.status(404).json({ // Should be orderItems
                data: null,
                error: `Pedido com ID ${id} não encontrado`
            });
        }

        const updatedOrderItems = await db.orderItems.update({
            where: {
                id: Number(id), // Should be orderItems
            },
            data: {
                order_id,
                product_id,
                quantity
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
        const orderItems = await db.orderItems.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!orderItems) {
            return res.status(404).json({ // Should be orderItems
                data: null,
                error: `Pedido com ID ${id} não encontrado`
            });
        }

        await db.order.delete({
            where: {
                id: Number(id), // Should be orderItems
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