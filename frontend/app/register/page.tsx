import Image from "next/image";
import ButtonComponent from "./button";

export default function Register() {
    return (
        <div>
            <div className="main-block">
                <div className="container-block">
                    <p />
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Logo_ORKUT.svg/500px-Logo_ORKUT.svg.png" alt="logo orkut" width={150} height={50} />
                    <p />
                    <h2> Conecta-se aos seus amigos e familiares usando recados e mensagens instantâneas</h2>
                    <h2>Conheça novas pessoas através de amigos de seus amigos e comunidades</h2>
                    <h2>Compartilhe seus videos, fotos e paixões em um só lugar</h2>

                </div>

                <div className="container-block">

                    <h1>
                        Crie a sua conta do orkut
                    </h1>
                    <h2>Nome: </h2><input type="name" name="" placeholder="nome" id="name"></input>
                    <h2>E-mail: </h2><input type="email" name="" placeholder="E-mail" id="email"></input>
                    <h2>Escolha sua senha: </h2><input type="password" placeholder="Senha" id="password" />
                    <h2>Digite a senha novamente: </h2><input type="password" placeholder="Senha" id="password" />
                    <input type="checkbox" name="info-save" />
                    <label>Salvar as minhas informações neste computador. </label>
                    <p></p>
                    <ButtonComponent />

                </div>

            </div>
        </div>
    )
}