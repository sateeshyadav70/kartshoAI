import { ArrowRight, Bot, MessageSquare, Send, Sparkles, X } from "lucide-react";
import useAIChat from "../../hooks/useAIChat";

export default function AISmartExplore({ isOpen, setIsOpen }) {
  const {
    chatRef,
    handleKeyDown,
    handleSend,
    input,
    isSending,
    messages,
    openExample,
    stage,
    setInput,
  } = useAIChat(isOpen);

  if (!isOpen) return null;

  const canShowCta = stage === "final";

  return (
    <div className="fixed bottom-20 right-6 z-50 w-[calc(100vw-1.5rem)] max-w-[24rem] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl animate-scaleIn">
      <div className="flex items-start justify-between border-b border-white/10 bg-gradient-to-r from-teal-500/20 via-cyan-500/10 to-cyan-500/20 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-teal-300">
            <Bot size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              AI Smart Explore
              <Sparkles size={14} className="text-teal-300" />
            </div>
            <p className="text-xs text-white/60">Lead gen, SaaS, and automation in one chat.</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/10 hover:text-white"
          aria-label="Close chat"
        >
          <X size={16} />
        </button>
      </div>

      <div ref={chatRef} className="max-h-[60vh] space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
                message.role === "user"
                  ? "bg-teal-500 text-slate-950"
                  : "border border-white/10 bg-white/5 text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        <div className="flex flex-wrap gap-2 pt-1">
          <button
            type="button"
            onClick={() => openExample("I want leads")}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75 transition hover:bg-white/10 hover:text-white"
          >
            I want leads
          </button>
          <button
            type="button"
            onClick={() => openExample("build SaaS")}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75 transition hover:bg-white/10 hover:text-white"
          >
            build SaaS
          </button>
          <button
            type="button"
            onClick={() => openExample("automate business")}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75 transition hover:bg-white/10 hover:text-white"
          >
            automate business
          </button>
        </div>
      </div>

      <div className="border-t border-white/10 bg-zinc-950 px-4 pb-4 pt-3">
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your goal..."
            rows={1}
            className="min-h-[48px] max-h-32 flex-1 resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-teal-400/60"
          />

          <button
            type="button"
            onClick={handleSend}
            disabled={!input.trim() || isSending}
            className="flex h-12 items-center gap-2 rounded-2xl bg-teal-400 px-4 text-sm font-semibold text-slate-950 transition hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send
            <Send size={15} />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-xs text-white/45">
            <MessageSquare size={13} />
            Fast qualification with a simple guided flow
          </p>

          {canShowCta ? (
            <a
              href="/book"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Book Discovery Call
              <ArrowRight size={14} />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}


