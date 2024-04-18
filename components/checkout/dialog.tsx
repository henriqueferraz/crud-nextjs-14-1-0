'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"

// Caixa de dialogo para inserir nome e email

export default function InsertUser() {

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
                window.location.reload()
                router.push("/")
            } else {
                throw new Error('Falha na criação do usuário')
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="w-full hover:bg-slate-300"
                >
                    Inserir Usuário
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Incluir Usuário</DialogTitle>
                    <DialogDescription>
                        Inclua o usuário e o e-mail. Clique em salvar para continuar.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Nome:
                            </Label>
                            <Input
                                className="col-span-3"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                type="text"
                                placeholder="Informe o nome do usuário"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                E-mail:
                            </Label>
                            <Input
                                className="col-span-3"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder="Informe o e-mail"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Salvar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}