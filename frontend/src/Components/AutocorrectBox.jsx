import { useEffect, useState } from "react";
import { correctWord } from "../api";

export default function AutocorrectBox() {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!input.trim()) {
      setSuggestion("");
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const data = await correctWord(input);
        setSuggestion(data.correction);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }, 400); // debounce

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <div className="w-full max-w-md p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg">

        <h1 className="text-2xl font-bold text-center mb-6">
          Autocorrect System
        </h1>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a word..."
          className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 focus:border-blue-500 outline-none"
        />

        {loading && (
          <p className="text-sm text-zinc-400 mt-3">Checking...</p>
        )}

        {suggestion && !loading && (
          <div className="mt-6 p-4 rounded-xl bg-zinc-800 border border-zinc-700">
            <p className="text-sm text-zinc-400">Suggestion</p>
            <p className="text-xl font-semibold text-blue-400">
              {suggestion}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}