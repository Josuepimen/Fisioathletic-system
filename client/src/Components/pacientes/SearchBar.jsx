import React from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="bg-white border border-neutral/60 rounded-xl px-5 py-3 flex items-center gap-3 shadow-sm">
      <Search size={18} className="text-font/60" />
      <input
        type="text"
        placeholder="Buscar paciente..."
        className="bg-transparent outline-none flex-1 text-font"
      />
    </div>
  );
}
