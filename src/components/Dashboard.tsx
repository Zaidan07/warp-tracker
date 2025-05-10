import GameSelector from "./GameSelector";
import Bg from "@/assets/background.webp";

export default function Dashboard() {
  return (
    <div
      className="min-h-screen mx-auto max-w-[1500px] flex items-center"
      style={{ backgroundImage: `url(${Bg.src})` }}
    >
      <GameSelector />
    </div>
  );
}
