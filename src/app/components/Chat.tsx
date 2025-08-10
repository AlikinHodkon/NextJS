"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { getCompletion, Message } from "../server-actions/getCompletions"
import { cn } from "@/lib/utils"

export const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([])
    const [message, setMessage] = useState("")

    const handleClick = async () => {
        const completetions = await getCompletion([
            ...messages,
            {
                role: "user",
                content: message
            }
        ])
        setMessage("")
        setMessages(completetions.messages)
    }

    return (
        <div className="space-y-3">
            {messages.map((message, i) => (   
                <div key={i} className="text-white">
                    <p 
                        className={cn("rounded-xl w-fit py-2 px-4", 
                            message.role === "user" 
                            ? "ml-auto bg-violet-600" 
                            : "mr-auto bg-gray-600")}
                    >
                        {message.content}
                    </p>
                </div>
            ))}
            <div className="flex gap-2">
                <input 
                    onChange={(e) => setMessage(e.target.value)} 
                    onKeyUp={(e) => {
                        if (e.key == "Enter") handleClick()
                    }} 
                    className="border border-gray-300 flex-grow" 
                />
                <Button onClick={handleClick} className="w-40">
                    Send
                </Button>
            </div>
        </div>
    )
}