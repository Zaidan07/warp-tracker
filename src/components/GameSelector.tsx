import Link from "next/link";
import HSR from "@/assets/Icon/hsr.png";
import ZZZ from "@/assets/Icon/zzz.png";
import Wuwa from "@/assets/Icon/wuwa.png";
import Image from "next/image";

const games = [
  {
    id: "honkai-star-rail",
    name: "Honkai Star Rail",
    icon: HSR,
    link: "https://starrailstation.com/en/warp#char_event",
  },
  {
    id: "zenless-zone-zero",
    name: "Zenless Zone Zero",
    icon: ZZZ,
    link: "",
  },
  {
    id: "wuthering-waves",
    name: "Wuthering Waves",
    icon: Wuwa,
    link: "https://wuwatracker.com/id/tracker",
  },
];

export default function GameSelector() {
  return (
    <div className="flex flex-col gap-4 w-full h-auto justify-center items-center">
      <h1 className="text-[60px] text-white font-semibold uppercase italic">
        Warp Tracker
      </h1>
      <div className="flex gap-[10px]">
        {games.map((game) =>
          game.link ? (
            <Link
              key={game.id}
              href={game.link}
              className="text-white px-6 py-3 flex flex-col items-center rounded-xl shadow hover:bg-white/40 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={game.icon} alt="" className="w-[50px]" />
              {game.name}
            </Link>
          ) : (
            <div
              key={game.id}
              className="text-white px-6 py-3 flex flex-col items-center rounded-xl shadow bg-gray-600 cursor-not-allowed opacity-50"
            >
              <Image src={game.icon} alt="" className="w-[50px]" />
              {game.name}
            </div>
          )
        )}
      </div>
    </div>
  );
}
