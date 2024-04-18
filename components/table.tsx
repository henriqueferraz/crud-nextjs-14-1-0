import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { InsertUser } from "./checkout/dialog";
import { UsersList } from "./users/users";

export const TableCrud = () => {

    const [buttonOpen, setButtonOpen] = useState(false)

    return (
        <div className=" text-xl">
            <Button
                onClick={() => setButtonOpen(true)}
                className="w-full hover:bg-slate-300"
                variant="secondary"
            >
                Incluir Usuário
            </Button>

            <InsertUser
                // Inseção de caixa de diálogo
                open={buttonOpen}
                onOpenChange={setButtonOpen}
            />

            <Table>
                <TableCaption>A lista dos usuários.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[20px]">#</TableHead>
                        <TableHead>NOME</TableHead>
                        <TableHead>EMAIL</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    <UsersList
                    // Inserção da tabela com a lista de usuários
                    />

                </TableBody>
            </Table>
        </div >
    )
}


