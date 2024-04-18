'use client'
import {
    TableCell,
    TableRow
} from "@/components/ui/table"
import { IoTrashOutline } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";

const getProducts = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/products", {
            cache: "no-store"
        })

        if (!res.ok) {
            throw new Error("Falha no fetch dos produtos")
        }
        return res.json()
    } catch (error) {
        console.log("Erro de carregamento dos produtos:", error)
    }
}

export default async function UsersList() {

    const { products } = await getProducts()

    return (
        <>
            {products.map((rs: any, indice: number) => (
                < TableRow className="hover" key={rs._id}>
                    <TableCell className=" text-sm">{indice + 1}</TableCell>
                    <TableCell>{rs.name}</TableCell>
                    <TableCell>{rs.email}</TableCell>
                    <TableCell className="flex flex-row justify-end space-x-0.5">
                        <IoTrashOutline
                            size={16}
                        />
                        <RxUpdate
                            size={16}
                        />
                    </TableCell>
                </TableRow >
            ))
            }
        </>
    )
}