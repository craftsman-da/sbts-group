"use client";
import { useState } from "react";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN"); // default language

  const languages = [
    { code: "EN", name: "English" },
    { code: "FR", name: "French" },
    { code: "ES", name: "Spanish" },
  ];

  return (
    <div className="relative inline-block text-left">
     
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-white"
      >
        {selectedLang}
        <span className="text-xs">▼</span>
      </button>

      
      {open && (
        <ul
          className="
            absolute 
            left-0 
            mt-2          
            bg-gray-800 
            text-white 
            rounded-md 
            shadow-lg 
            w-28 
            z-50
          "
        >
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang.code);
                setOpen(false);
              }}
              className="px-3 py-2 cursor-pointer hover:bg-gray-700 transition-colors"
            >
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
