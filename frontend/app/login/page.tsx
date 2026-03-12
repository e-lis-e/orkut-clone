import Link from "next/link";
import Image from "next/image";
import ButtonComponent from "./button";

export default function Login() {
    return (
        <div className="main-block">
            <div className="container-block">
                <p/>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Logo_ORKUT.svg/500px-Logo_ORKUT.svg.png" alt="logo orkut" width={150} height={50} />
                <p/>
                <h2> Conecta-se aos seus amigos e familiares usando recados e mensagens instantâneas</h2>
                <h2>Conheça novas pessoas através de amigos de seus amigos e comunidades</h2>
                <h2>Compartilhe seus videos, fotos e paixões em um só lugar</h2>

            </div>

            <div className="container-block">

                <h1>
                    Acesse o orkut.br com a sua conta
                </h1>
                <h2>E-mail: </h2><input type="email" name="" placeholder="E-mail ou número de celular" id="email"></input>
                <h2>Senha: </h2><input type="password" placeholder="Senha" id="password" />
                <input type="checkbox" name="info-save" />
                <label>Salvar as minhas informações neste computador. </label>
                <p></p>
                <ButtonComponent/>
                <p></p>
                <Link href="/recoverPassword">Não consegue acessar a sua conta?</Link>

                <div>
                    <h2>Ainda não é membro?</h2>
                    <Link href="/register">ENTRAR JÁ</Link>
                </div>

            </div>


        </div>
    )
}