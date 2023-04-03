import Login from "../components/Connexion/login";
import Register from "../components/Connexion/Register";
import { useState } from "react";

export default function Connexion() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div id="Connexion">
      <div className="left">
        {isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />}
      </div>
      <div className="image">
        <img src="connexion-white.png" alt="Application preview image" />
      </div>
    </div>
  );
}
