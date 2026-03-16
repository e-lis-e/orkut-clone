import Image from "next/image";

export default function Header() {
    return (
        <header className="orkut-header">
            <div className="header-container">

                <div className="logo-area">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Logo_ORKUT.svg/500px-Logo_ORKUT.svg.png" alt="logo orkut" width={100} height={30} />
                </div>

                <nav className="menu">
                    <a href="">Início</a>
                    <a href="">Página de recados</a>
                    <a href="">Amigos</a>
                    <a href="">Comunidades</a>
                </nav>

                <div className="info">
                    <span className="user-email">user@email.com</span>
                    <input type="text" placeholder="pesquisa do orkut" />
                </div>
            </div>
        </header>
    );
}