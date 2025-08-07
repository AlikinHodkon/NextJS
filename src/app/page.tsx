"use client"
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession()
  return (
    <div className="text-center">
      <h2 className="text-2xl">Welcome to the Game</h2>
      <p>Fuck you, {session?.user?.name || "Igor"}!!!</p>
    </div>
  );
}
