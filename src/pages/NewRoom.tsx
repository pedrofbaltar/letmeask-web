import { Link } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import IllustrationImg from "../assets/images/illustration.svg";
import LogoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";

export function NewRoom() {
  const { user } = useAuth();

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
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui.</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
