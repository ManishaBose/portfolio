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
        name: "Digital Books Showcase",
        url: "https://books-read-xfo8.onrender.com/",
        thumbnail: "/img/bookShowcase.png",
        video: "/projectDemo/bookShowcase.mp4",
        description: "A full-stack web app that's my personal books showcase.",
    },
    {
        name: "AI ChatBot",
        url: "https://github.com/ManishaBose/AI_ChatBot",
        thumbnail: "/img/chat_bot.png",
        video: "/projectDemo/chat_bot.mp4",
        description: "AI Chatbot can can run on your local server",
    },

]