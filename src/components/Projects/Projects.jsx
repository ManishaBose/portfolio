import { VideoCard } from "./VideoCard/VideoCard";

export function Projects(){
    return (
        <div>
            Projects
            <div className="mt-12 mb-46 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {showcase.map((showcase) => (
                <VideoCard key={showcase.name} showcase={showcase} />
                ))}
            </div>
        </div>
    )
}

const showcase = [
    {
        name: "AI_ChatBot",
        url: "https://github.com/ManishaBose/AI_ChatBot",
        thumbnail: "/img/chat_bot.png",
        video: "/projectDemo/chat_bot.mp4",
        description: "AI Chatbot can can run on your local server",
    },
]