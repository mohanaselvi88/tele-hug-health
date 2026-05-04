import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Mail, Lock, User, Stethoscope, UserCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<"patient" | "doctor">("patient");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Account created!", description: `Welcome to Smart Telehealth as a ${role}. (Demo only)` });
      navigate("/");
    }, 900);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 px-4 py-12">
      <Card className="w-full max-w-md shadow-xl border-primary/20">
        <CardHeader className="text-center">
          <Link to="/" className="flex items-center justify-center gap-2 font-heading font-bold text-2xl text-primary mb-2">
            <Heart className="w-7 h-7 fill-primary text-primary-foreground" />
            Smart Telehealth
          </Link>
          <CardTitle className="text-2xl">Create Your Account</CardTitle>
          <CardDescription>Join thousands managing their health online</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2 mb-6 p-1 bg-secondary rounded-lg">
            <button
              type="button"
              onClick={() => setRole("patient")}
              className={`flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-all ${
                role === "patient" ? "bg-card shadow-sm text-primary" : "text-muted-foreground"
              }`}
            >
              <User className="w-4 h-4" /> Patient
            </button>
            <button
              type="button"
              onClick={() => setRole("doctor")}
              className={`flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-all ${
                role === "doctor" ? "bg-card shadow-sm text-primary" : "text-muted-foreground"
              }`}
            >
              <Stethoscope className="w-4 h-4" /> Doctor
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <UserCircle2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="name" required placeholder="John Doe" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="email" type="email" required placeholder="you@example.com" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="password" type="password" required placeholder="At least 8 characters" className="pl-10" />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating account..." : "Create Account"}
            </Button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-4">
            By signing up, you agree to our Terms & Privacy Policy.
          </p>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
