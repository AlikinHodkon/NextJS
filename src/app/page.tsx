import { Chat } from "./components/Chat";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession()
  return (
    <div className="text-center space-y-3">
      <h2 className="text-2xl">Welcome to the Game</h2>
      <p>Fuck you, {session?.user?.name || "Igor"}!!!</p>
      {session?.user?.name && <Chat />}
    </div>
  );
}
