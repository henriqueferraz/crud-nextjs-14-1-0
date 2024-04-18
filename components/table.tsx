import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import InsertUser from "./checkout/dialog";
import UsersList from "./user/users";

export const TableCrud = () => {

    return (
        <div className=" text-xl">
            <InsertUser
            // Inserção da chamada para inclusão do usuário
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


