import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

import { IoTrashOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";
import { useState } from "react";
import { InsertUser } from "./checkout/dialog";

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
                        <TableHead ></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className=" text-sm">1</TableCell>
                        <TableCell>MARIA DA SILVA</TableCell>
                        <TableCell>mariasilva@oi.com.br</TableCell>
                        <TableCell className="flex flex-row justify-end space-x-0.5">
                            <IoTrashOutline
                                size={16}
                            />
                            <IoIosAddCircleOutline
                                size={16}
                            />
                            <RxUpdate
                                size={16}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className=" text-sm">2</TableCell>
                        <TableCell>JOSÉ DA SILVA</TableCell>
                        <TableCell>josesilva@oi.com.br</TableCell>
                        <TableCell className="flex flex-row justify-end space-x-0.5">
                            <IoTrashOutline
                                size={16}
                            />
                            <IoIosAddCircleOutline
                                size={16}
                            />
                            <RxUpdate
                                size={16}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className=" text-xs">3</TableCell>
                        <TableCell>MANOEL DAS COVES</TableCell>
                        <TableCell>manoelcoves@vivo.com.br</TableCell>
                        <TableCell className="flex flex-row justify-end space-x-0.5">
                            <IoTrashOutline
                                size={16}
                            />
                            <IoIosAddCircleOutline
                                size={16}
                            />
                            <RxUpdate
                                size={16}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className=" text-xs">4</TableCell>
                        <TableCell>APARECIDA TORRES</TableCell>
                        <TableCell>aparecidatorres@tim.com.br</TableCell>
                        <TableCell className="flex flex-row justify-end space-x-0.5">
                            <IoTrashOutline
                                size={16}
                            />
                            <IoIosAddCircleOutline
                                size={16}
                            />
                            <RxUpdate
                                size={16}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className=" text-xs">5</TableCell>
                        <TableCell>HENRIQUE FERRAZ</TableCell>
                        <TableCell>henriqueferraz@ofnet.com.br</TableCell>
                        <TableCell className="flex flex-row justify-end space-x-0.5">
                            <IoTrashOutline
                                size={16}
                            />
                            <IoIosAddCircleOutline
                                size={16}
                            />
                            <RxUpdate
                                size={16}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className=" text-xs">6</TableCell>
                        <TableCell>LUCIENE PIMENTA</TableCell>
                        <TableCell>lupimenta@ofnet.com.br</TableCell>
                        <TableCell className="flex flex-row justify-end space-x-0.5">
                            <IoTrashOutline
                                size={16}
                            />
                            <IoIosAddCircleOutline
                                size={16}
                            />
                            <RxUpdate
                                size={16}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div >
    )
}


