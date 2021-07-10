import { useHistory } from "react-router-dom";

import IllustrationImg from "../assets/images/illustration.svg";
import LogoImg from "../assets/images/logo.svg";
import GoogleIconImg from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";
import { useAuth } from "../hooks/useAuth";

export function Home() {
  const history = useHistory();
  const { user, singInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await singInWithGoogle();
    }

    history.push("/rooms/new");
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={IllustrationImg}
          alt="Ilustração simbolizando uma perguntas e respostas"
        />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda &amp; compartilhe conhecimento com outras em tempo real.</p>
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
