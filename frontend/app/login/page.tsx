import Link from "next/link";

export default function login() {
    return (
        <div>
            <h1>
                Bem vindo ao [...]
            </h1>
            <a> Email </a>
            <a> Senha </a>
            <h3>Não possui conta? <Link href="../register">Cadastre se</Link></h3>

        </div>
    )
}