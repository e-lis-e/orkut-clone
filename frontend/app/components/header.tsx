export default function Header() {
    return (
        <header className="orkut-header">
            <div className="header-container">
                <div className="logo"></div>
                <nav className="menu">
                    <a href="">Início</a>
                    <a href="">Página de recados</a>
                    <a href="">Amigos</a>
                    <a href="">Comunidades</a>
                </nav>

                <div className="info">
                    <p>{"user.email"}</p>
                   <a href="/login"></a>
                </div>

                <div className="search">
                    <input type="text" placeholder="pesquisa do orkut" />
                </div>
            </div>
        </header>
    );   
}