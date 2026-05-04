import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle, Video, Send, Mic, MicOff, VideoOff, PhoneOff, X, Stethoscope } from "lucide-react";

type Msg = { id: number; from: "doctor" | "patient"; text: string; time: string };

const initialMessages: Msg[] = [
  { id: 1, from: "doctor", text: "Hello! I'm Dr. Sarah Johnson. How can I help you today? 👋", time: "10:02 AM" },
];

const autoReplies = [
  "I understand. Could you tell me when the symptoms started?",
  "Thanks for sharing. On a scale of 1-10, how would you rate the discomfort?",
  "Got it. I'll prepare a prescription and share it shortly.",
  "Please make sure to stay hydrated and rest well. 💧",
  "Let's schedule a follow-up in 3 days. Sound good?",
];

const ConsultationSection = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [callSeconds, setCallSeconds] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Webcam handling
  useEffect(() => {
    if (!videoOpen) {
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
      setCallSeconds(0);
      return;
    }
    navigator.mediaDevices
      ?.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
      })
      .catch(() => {
        // Permission denied — keep mock UI
      });

    const interval = setInterval(() => setCallSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [videoOpen]);

  // Toggle tracks
  useEffect(() => {
    streamRef.current?.getAudioTracks().forEach((t) => (t.enabled = micOn));
  }, [micOn]);
  useEffect(() => {
    streamRef.current?.getVideoTracks().forEach((t) => (t.enabled = camOn));
  }, [camOn]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg: Msg = {
      id: Date.now(),
      from: "patient",
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((m) => [...m, newMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        {
          id: Date.now() + 1,
          from: "doctor",
          text: autoReplies[Math.floor(Math.random() * autoReplies.length)],
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 1400);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  return (
    <section id="consultation" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Live <span className="text-primary">Consultation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Connect instantly with your doctor through secure chat or HD video calls.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all space-y-4 text-center">
            <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground">Chat with Doctor</h3>
            <p className="text-muted-foreground text-sm">
              Send messages, share symptoms, and get quick guidance from certified doctors.
            </p>
            <Button onClick={() => setChatOpen(true)} className="w-full gradient-primary text-primary-foreground hover:opacity-90">
              Start Chat
            </Button>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all space-y-4 text-center">
            <div className="w-16 h-16 mx-auto rounded-full gradient-accent flex items-center justify-center">
              <Video className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground">Video Consultation</h3>
            <p className="text-muted-foreground text-sm">
              Face-to-face HD video appointments with end-to-end encrypted calls.
            </p>
            <Button onClick={() => setVideoOpen(true)} className="w-full gradient-accent text-accent-foreground hover:opacity-90">
              Start Video Call
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Dialog */}
      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogContent className="max-w-md p-0 gap-0 overflow-hidden">
          <DialogHeader className="p-4 border-b border-border bg-card">
            <DialogTitle className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xl">👩‍⚕️</div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
              </div>
              <div className="text-left">
                <div className="font-heading text-base">Dr. Sarah Johnson</div>
                <div className="text-xs text-muted-foreground font-normal">Cardiologist • Online</div>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div className="h-96 overflow-y-auto p-4 space-y-3 bg-background">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === "patient" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                    m.from === "patient"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-secondary text-secondary-foreground rounded-bl-sm"
                  }`}
                >
                  <p>{m.text}</p>
                  <p className={`text-[10px] mt-1 opacity-70`}>{m.time}</p>
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-secondary rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-border bg-card flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button onClick={sendMessage} size="icon" className="gradient-primary text-primary-foreground">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Call Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl p-0 gap-0 overflow-hidden bg-slate-900 border-slate-800">
          <DialogHeader className="p-4 border-b border-slate-800">
            <DialogTitle className="flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xl">👩‍⚕️</div>
                <div className="text-left">
                  <div className="font-heading text-base">Dr. Sarah Johnson</div>
                  <div className="text-xs text-slate-400 font-normal flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    {formatTime(callSeconds)}
                  </div>
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div className="relative aspect-video bg-slate-800">
            {/* Doctor "remote" placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-4">
              <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center text-7xl shadow-elevated">
                👩‍⚕️
              </div>
              <div className="text-center">
                <p className="font-heading font-semibold text-lg">Dr. Sarah Johnson</p>
                <p className="text-sm text-slate-400 flex items-center gap-2 justify-center">
                  <Stethoscope className="w-4 h-4" /> Connected securely
                </p>
              </div>
            </div>

            {/* Patient self-view */}
            <div className="absolute bottom-4 right-4 w-40 h-28 sm:w-48 sm:h-32 rounded-lg overflow-hidden border-2 border-white/20 shadow-elevated bg-black">
              {camOn ? (
                <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover scale-x-[-1]" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-700 text-white">
                  <VideoOff className="w-8 h-8" />
                </div>
              )}
              <div className="absolute bottom-1 left-2 text-xs text-white bg-black/40 px-1.5 py-0.5 rounded">You</div>
            </div>
          </div>

          <div className="p-4 flex items-center justify-center gap-3 bg-slate-900 border-t border-slate-800">
            <Button
              onClick={() => setMicOn(!micOn)}
              size="icon"
              variant={micOn ? "secondary" : "destructive"}
              className="rounded-full w-12 h-12"
            >
              {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
            </Button>
            <Button
              onClick={() => setCamOn(!camOn)}
              size="icon"
              variant={camOn ? "secondary" : "destructive"}
              className="rounded-full w-12 h-12"
            >
              {camOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
            </Button>
            <Button
              onClick={() => setVideoOpen(false)}
              size="icon"
              variant="destructive"
              className="rounded-full w-14 h-12"
            >
              <PhoneOff className="w-5 h-5" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ConsultationSection;
