import { useState } from "react";
import WebcamClassifier from "./WebcamClassifier";

// Estados do principais jogo (movimentos, resultados e placar)
export default function Game() {
  const [playerMove, setPlayerMove] = useState("Nada");
  const [cpuMove, setCpuMove] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ player: 0, cpu: 0 });

  // Contador para a rodada
  const [countdown, setCountdown] = useState(3);
  const [counting, setCounting] = useState(false);
  const [canPredict, setCanPredict] = useState(false);

  // Inicia uma nova rodada
  function startRound() {
    if (counting) return;
    setResult("");
    setCpuMove("");
    setCounting(true);
    setCanPredict(true);

    let time = 3;
    setCountdown(time);
    const interval = setInterval(() => {
      time--;
      setCountdown(time);

      // Quando o contador chega a zero, para a contagem e faz a jogada
      if (time === 0) {
        clearInterval(interval);
        setCounting(false);
        setCanPredict(false);
        play();
      }
    }, 1000);
  }

  // Lógica do jogo para determinar o vencedor
  function play() {
    if (playerMove === "Nada") {
      setResult("Mostre pedra, papel ou tesoura!");
      return;
    }

    const options = ["Pedra", "Papel", "Tesoura"];
    const cpu = options[Math.floor(Math.random() * 3)];

    setCpuMove(cpu);

    const res = checkWinner(playerMove, cpu);
    setResult(res);

    setScore((prev) => {
      if (res.includes("Você venceu"))
        return { ...prev, player: prev.player + 1 };

      if (res.includes("Computador venceu"))
        return { ...prev, cpu: prev.cpu + 1 };

      return prev;
    });
  }

  // Verifica o vencedor com base nas regras do jogo
  function checkWinner(player, cpu) {
    if (player === cpu) return "Empate 🤝";

    if (
      (player === "Pedra" && cpu === "Tesoura") ||
      (player === "Papel" && cpu === "Pedra") ||
      (player === "Tesoura" && cpu === "Papel")
    ) {
      return "Você venceu 🎉";
    }

    return "Computador venceu 💻";
  }

  return (
    <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold">Pedra ✊ • Papel ✋ • Tesoura ✌️</h1>

      <WebcamClassifier
        onPredict={setPlayerMove}
        canPredict={canPredict}
      />

      <div className="text-center">
        <p>
          Sua jogada:
          <span className="text-green-400 ml-2">{playerMove}</span>
        </p>

        <p>
          CPU:
          <span className="text-red-400 ml-2">{cpuMove}</span>
        </p>

        <p className="text-xl font-semibold mt-2">{result}</p>
      </div>

      <button
        onClick={startRound}
        disabled={counting}
        className={`px-6 py-3 rounded-xl font-bold text-white
        ${counting ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"}`}
      >
        {counting ? countdown : "Jogar"}
      </button>

      <p className="mt-2 text-lg">
        🧑 {score.player} x {score.cpu} 🤖
      </p>
    </div>
  );
}
