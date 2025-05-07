import React from "react";
import "@fontsource/nunito";
import { Leaf, Lightbulb, Users, ShieldCheck, AlertCircle, RefreshCcw, Shield, Target, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function UnmuddledSite() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const currentYear = new Date().getFullYear();

  return (
    <main className="bg-[#f3f5f4] text-gray-900 font-nunito scroll-smooth">
      <div className="text-center p-20">Your UnmuddledSite JSX goes here...</div>
      <footer className="text-center text-gray-500 text-sm mt-16 py-6 border-t border-gray-300">
        <p>© {currentYear} Unmuddled. All rights reserved.</p>
      </footer>
    </main>
  );
}
