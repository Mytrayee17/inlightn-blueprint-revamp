import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginFooterCTA() {
  return (
    <div className="text-center mt-6 text-sm text-white/80">
      <p>
        New to Inlighn?{" "}
        <Link
          to="/register"
          className="text-purple-300 font-semibold hover:underline transition"
        >
          Register Now
        </Link>
      </p>
    </div>
  );
} 