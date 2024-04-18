'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

import { useState } from "react"


// Caixa d dialogo para inserir nome e email

type Props = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export const InsertUser = ({ open, onOpenChange }: Props) => {

    //Informando variáveis
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!name || !email) {
            alert('Nome e e-mail são obrigatórios!')
            return
        }

        try {
            const res = await fetch("http://localhost:3000/api/products", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ name, email })
            })

            if (res.ok) {
                router.push("/")
            } else {
                throw new Error('Falha na criação do usuário')
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Incluir Usuário</DialogTitle>
                        <DialogDescription>
                            Inclua o usuário e o e-mail. Clique em salvar para continuar.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Nome:
                            </Label>
                            <Input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                defaultValue="Insira o nome do usuário"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                E-mail:
                            </Label>
                            <Input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                defaultValue="email@email.com"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Salvar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}