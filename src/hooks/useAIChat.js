import { useEffect, useRef, useState } from "react";

const initialMessages = [
  {
    role: "bot",
    text: "Hey, I’m your AI venture assistant. What are you trying to build?",
  },
];

function detectIntent(text) {
  const value = text.toLowerCase();

  if (value.includes("lead") || value.includes("leads") || value.includes("calls")) {
    return "lead";
  }

  if (value.includes("saas") || value.includes("mvp") || value.includes("app")) {
    return "saas";
  }

  if (value.includes("automate") || value.includes("automation") || value.includes("system")) {
    return "automation";
  }

  return "unknown";
}

export default function useAIChat(isOpen) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [stage, setStage] = useState("start");
  const [isSending, setIsSending] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const timer = window.setTimeout(() => {
      chatRef.current?.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [isOpen, messages]);

  const addReply = (userText, botText, nextStage) => {
    setMessages((current) => [
      ...current,
      { role: "user", text: userText },
      { role: "bot", text: botText },
    ]);
    setStage(nextStage);
    setInput("");
    setIsSending(false);
  };

  const handleSend = () => {
    if (isSending) return;

    const text = input.trim();
    if (!text) return;

    setIsSending(true);
    const intent = detectIntent(text);

    if (stage === "start") {
      if (intent === "lead") {
        addReply(text, "Got it. You want more leads. How many leads per month are you targeting?", "lead_goal");
        return;
      }

      if (intent === "saas") {
        addReply(text, "Nice. Are you starting from scratch, or do you already have an idea?", "saas_goal");
        return;
      }

      if (intent === "automation") {
        addReply(text, "Automation is powerful. What part of your business do you want to automate?", "automation_goal");
        return;
      }

      setMessages((current) => [
        ...current,
        { role: "user", text },
        { role: "bot", text: "I can help with leads, SaaS, or automation. Try one of those and I’ll guide you." },
      ]);
      setIsSending(false);
      setInput("");
      return;
    }

    if (stage === "lead_goal") {
      addReply(
        text,
        "Perfect. We can build an AI system that responds instantly and books qualified meetings for you.",
        "final"
      );
      return;
    }

    if (stage === "saas_goal") {
      addReply(
        text,
        "Great. We can scope a fast MVP, validate the idea, and turn it into a real roadmap.",
        "final"
      );
      return;
    }

    if (stage === "automation_goal") {
      addReply(
        text,
        "Nice. We can map the workflow and turn it into a 24/7 automated system.",
        "final"
      );
      return;
    }

    if (stage === "final") {
      addReply(text, "Best next step: book a quick call and we’ll map the full system together.", "final");
      return;
    }

    setIsSending(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };

  const openExample = (value) => {
    if (isSending) return;
    setInput(value);
  };

  return {
    chatRef,
    handleKeyDown,
    handleSend,
    input,
    isSending,
    messages,
    openExample,
    stage,
    setInput,
  };
}
