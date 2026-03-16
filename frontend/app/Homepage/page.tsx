import Header from "../components/header";


export default function Home() {
  return (
    <div>
        <Header/>
      <div className="main-home">
        
        <aside className="column-left">
          <h2>Perfil</h2>
        </aside>
        <main className="column-center">
          <input type="text" placeholder="Escreva seu post" id="post-input"/>
        </main>
        <aside className="column-right">
          <h2>Amigos</h2>
        </aside>
      </div>
    </div>
  );
}
