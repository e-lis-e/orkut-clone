import Header from "../components/header";


export default function Home() {
  return (
    <div>
        <Header/>
      <div className="main-home">
        
        <div className="column-left">
          <h2>Perfil</h2>
        </div>
        <div className="column-center">
          <input type="text" placeholder="Escreva seu post" id="post-input"/>
        </div>
        <div className="column-right">
          <h2>Amigos</h2>
        </div>
      </div>
    </div>
  );
}
