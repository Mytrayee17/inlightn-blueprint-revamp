import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    // TODO: Integrate login API
    alert("Login submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-white">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/70 transition-colors"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            id="password"
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/70 transition-colors"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute inset-y-0 right-3 flex items-center text-sm text-white/80 hover:text-white"
          >
            {showPass ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-inlighn-accent hover:bg-inlighn-accent-dark transition rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Login
      </button>
    </form>
  );
} 