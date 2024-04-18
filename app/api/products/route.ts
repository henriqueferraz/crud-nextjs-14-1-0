import connectMongoDB from '@/lib/mongodb'
import Product from '@/models/productModel'
import { NextResponse } from 'next/server'

export async function POST(request: any) {
    const { name, email } = await request.json()
    await connectMongoDB
    await Product.create({ name, email })
    return NextResponse.json({ message: "Usuario criado com sucesso" }, { status: 201 })
}