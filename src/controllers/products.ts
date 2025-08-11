import { db } from "@/db/db";
import { Request, Response } from "express";

export async function createProduct(req: Request, res: Response) {
    const {
        user_id,
        name,
        reference,
        description,
        unity,
        measure,
        price,
        enabled
    } = req.body;
    try {

        const existingProductByReference = await db.product.findUnique({
            where: {
                reference,
            }
        });

        if (existingProductByReference) {
            res.status(409).json({
                error: `Esta ${reference} já está em uso`,
                data: null
            })
        }

        const newProduct = await db.product.create({
            data: {
                user_id: 1,
                name,
                reference,
                description,
                unity,
                measure,
                price,
                enabled
            },
        });

        return res.status(201).json({
            data: newProduct,
            error: null
        });
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            error: `Erro ao criar produto` + error,
            data: null
        });
    }

}

export async function getProducts(req: Request, res: Response) {

    try {
        const products = await db.product.findMany({
            orderBy: {
                createdAt: "desc"
            },
        });

        return res.status(200).json({
            data: products,
            error: null
        });

    } catch (error) {
        return res.status(500).json({
            error: `Erro ao listar produtos`,
            data: null
        });

    }

}

export async function getProductBiId(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const product = await db.product.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!product) {
            return res.status(404).json({
                data: null,
                error: `Produto com ID ${id} não encontrado`
            });
        }

        return res.status(200).json({
            data: product,
            error: null
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao listar o produto",
            data: null
        });
    }

}

export async function updateProductBiId(req: Request, res: Response) {
    const { id } = req.params;
    const { user_id, name, reference, description, unity, measure, price, enabled } = req.body;
    
    try {
        const product = await db.product.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!product) {
            return res.status(404).json({
                data: null,
                error: `Produto com ID ${id} não encontrado`
            });
        }

        const updatedProduct = await db.product.update({
            where: {
                id: Number(id),
            },
            data: {
                user_id,
                name,
                reference,
                description,
                unity,
                measure,
                price,
                enabled
            }
        });

        return res.status(200).json({
            data: updatedProduct,
            error: null
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao alterar dados do produto",
            data: null
        });
    }

}

export async function deleteProductBiId(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const product = await db.product.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!product) {
            return res.status(404).json({
                data: null,
                error: `Produto com ID ${id} não encontrado`
            });
        }

        await db.product.delete({
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
            error: "Erro ao deletar o produto",
            data: null
        });
    }

}