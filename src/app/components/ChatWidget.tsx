import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot, Volume2, VolumeX } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  audioPlayed?: boolean;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! 👋 How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  // Text-to-Speech function
  const playAudio = (text: string, messageId: string) => {
    // Stop any currently playing audio
    if (playingAudio) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setPlayingAudio(messageId);
    };

    utterance.onend = () => {
      setPlayingAudio(null);
    };

    utterance.onerror = () => {
      setPlayingAudio(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  // Stop audio playback
  const stopAudio = () => {
    window.speechSynthesis.cancel();
    setPlayingAudio(null);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userInput = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      // Call Groq API with free tier
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer gsk_VjkXmQqJ5qK5q5qK5qK5qK5qK5qK5qK5qK5qK`,
        },
        body: JSON.stringify({
          model: "mixtral-8x7b-32768",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant for Thomas Diky, a fullstack developer with expertise in React, Node.js, Flutter, and cloud architecture. Be concise and friendly in your responses. Keep answers under 200 characters.",
            },
            {
              role: "user",
              content: userInput,
            },
          ],
          temperature: 0.7,
          max_tokens: 200,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const result = await response.json();
      let generatedText = result.choices?.[0]?.message?.content || "Sorry, I couldn't process that.";

      // Trim if too long
      if (generatedText.length > 300) {
        generatedText = generatedText.substring(0, 300) + "...";
      }

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generatedText || "Thanks for your message! How can I help you further?",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Chat error:", error);

      // Smart fallback responses based on user input
      const lowerInput = userInput.toLowerCase();
      let fallbackResponse = "Thanks for your message! How can I help you further?";

      if (
        lowerInput.includes("hello") ||
        lowerInput.includes("hi") ||
        lowerInput.includes("hey")
      ) {
        fallbackResponse =
          "Hi there! 👋 I'm Thomas. Feel free to ask me about my projects, experience, or services!";
      } else if (
        lowerInput.includes("project") ||
        lowerInput.includes("portfolio")
      ) {
        fallbackResponse =
          "I've worked on various projects including mobile apps with Flutter, web apps with React, and backend services with Node.js. What interests you most?";
      } else if (
        lowerInput.includes("hire") ||
        lowerInput.includes("work") ||
        lowerInput.includes("available")
      ) {
        fallbackResponse =
          "I'm available for freelance projects and collaborations! What kind of project are you working on?";
      } else if (
        lowerInput.includes("tech") ||
        lowerInput.includes("technology")
      ) {
        fallbackResponse =
          "I specialize in: React, TypeScript, Node.js, Flutter, Firebase, Go, and cloud platforms. What would you like to build?";
      } else if (lowerInput.includes("contact") || lowerInput.includes("email")) {
        fallbackResponse =
          "You can reach me at merrythomas909@gmail.com or through the contact form on the website.";
      } else {
        // Random fallback responses
        const fallbackResponses = [
          "Great question! Tell me more about what you're looking for.",
          "I'm interested in learning more about your project needs.",
          "That sounds like an interesting topic! What would you like to know?",
          "I'd love to help! Can you provide more details?",
          "Thanks for asking! How can I assist you further?",
        ];
        fallbackResponse =
          fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      }

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: fallbackResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:shadow-xl transition-all z-40 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-8 w-96 h-[600px] rounded-3xl shadow-2xl z-40 flex flex-col overflow-hidden border border-border bg-white dark:bg-slate-900"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-6">
              <h3 className="text-xl font-bold mb-1">Let's Chat!</h3>
              <p className="text-sm text-white/80">
                Ask me anything about my work and services
              </p>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {/* Bot Avatar */}
                  {message.sender === "bot" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-xs px-4 py-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-muted text-muted-foreground rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm leading-relaxed break-words">
                      {message.text}
                    </p>
                    <div className="flex items-center justify-between gap-2 mt-2">
                      <span className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      {/* Audio Button for Bot Messages */}
                      {message.sender === "bot" && (
                        <motion.button
                          onClick={() =>
                            playingAudio === message.id
                              ? stopAudio()
                              : playAudio(message.text, message.id)
                          }
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-1 rounded hover:bg-black/20 transition-colors"
                          title={
                            playingAudio === message.id ? "Stop audio" : "Play audio"
                          }
                        >
                          {playingAudio === message.id ? (
                            <VolumeX className="w-4 h-4" />
                          ) : (
                            <Volume2 className="w-4 h-4" />
                          )}
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 justify-start"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-muted text-muted-foreground px-4 py-3 rounded-2xl rounded-bl-none">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-current"
                      />
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0.1,
                        }}
                        className="w-2 h-2 rounded-full bg-current"
                      />
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                        className="w-2 h-2 rounded-full bg-current"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSendMessage}
              className="border-t border-border p-4 flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-xl bg-muted border border-border focus:outline-none focus:border-primary transition-colors text-sm"
                disabled={isLoading}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading || !inputValue.trim()}
                className="p-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
