import { useHistory } from "react-router-dom";

import { auth, firebase } from "../services/firebase";

import IllustrationImg from "../assets/images/illustration.svg";
import LogoImg from "../assets/images/logo.svg";
import GoogleIconImg from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";

export function Home() {
  const history = useHistory();

  function handleCreateRoom() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then((result) => {
      console.log(result);

      history.push("/rooms/new");
    });
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={IllustrationImg}
          alt="Ilustração simbolizando uma perguntas e respostas"
        />
        <strong>Toda pergunta tem uma resposta.</strong>

        <p>Aprenda e compartilhe conhecimento com outras em tempo real.</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={LogoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={GoogleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="sperator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da salas" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
