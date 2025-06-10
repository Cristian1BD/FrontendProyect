import { useState } from "react";
import { ServicesGemmi } from "../../../services/ServciesGemmi/ServicesGemmi";
import {
    PaperAirplaneIcon,
    ChatBubbleLeftRightIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";

// Tipo para los mensajes del chat
type ChatMessage = {
    role: "user" | "bot";
    text: string;
};

const GeminiChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);


    const toggleChat = () => {
        setIsOpen((prev) => {
            const next = !prev;
            if (next && messages.length === 0) {
                const welcomeMessage: ChatMessage = {
                    role: "bot",
                    text: "¡Hola! 👋 Soy tu asistente especializado en salidas pedagógicas. Puedo ayudarte a planear, organizar y resolver dudas sobre salidas escolares. ¿En qué puedo ayudarte hoy?",
                };
                setMessages([welcomeMessage]);
            }
            return next;
        });
    };


    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: ChatMessage = { role: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        console.log("📤 Enviando mensaje a Gemini:", input);

        try {
            const response = await ServicesGemmi.googleGenAI.models.generateContent({
                model: "gemini-1.5-flash",
                contents: [{ role: "user", parts: [{ text: input }] }],
            });

            console.log("✅ Respuesta completa de Gemini:", response);

            const botText =
                response.candidates?.[0]?.content?.parts?.[0]?.text ||
                "No se recibió respuesta del modelo.";
            console.log("💬 Texto de respuesta de Gemini:", botText);

            const botMessage: ChatMessage = { role: "bot", text: botText };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("❌ Error al comunicarse con Gemini:", error);
            const errorMessage: ChatMessage = {
                role: "bot",
                text: "Ocurrió un error al obtener respuesta. Intenta nuevamente.",
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={toggleChat}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
            >
                {isOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                ) : (
                    <ChatBubbleLeftRightIcon className="h-6 w-6" />
                )}
            </button>

            {isOpen && (
                <div className="w-80 h-[500px] bg-white rounded-xl shadow-2xl flex flex-col mt-4 border border-gray-200 animate-fade-in">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-t-xl font-semibold text-lg">
                        🤖 Gemini ChatBot
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${msg.role === "user"
                                        ? "bg-blue-100 self-end text-right"
                                        : "bg-white border self-start text-left"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {loading && <div className="text-gray-400 text-sm">Escribiendo...</div>}
                    </div>
                    <div className="p-3 border-t flex items-center gap-2 bg-white">
                        <input
                            type="text"
                            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Escribe tu mensaje..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition"
                        >
                            <PaperAirplaneIcon className="h-5 w-5 rotate-45" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GeminiChatBot;
