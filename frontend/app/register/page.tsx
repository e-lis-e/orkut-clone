import Link from "next/link";

export default function login() {
    return (
        <div>
            <h1>
                Bem vindo ao [...]
            </h1>
            <a> Nome </a>
            <a> Email </a>
            <a> Senha </a>
            <h3>já possui conta? <Link href="../login">Fazer login</Link></h3>

        </div>
    )
}