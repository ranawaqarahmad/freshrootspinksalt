import { useMemo, useState, type FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const PREVIEW_KEY = 'previewUnlocked';

export default function PreviewGate() {
  const previewPassword = useMemo(() => {
    const value = import.meta.env.VITE_PREVIEW_PASSWORD;
    return typeof value === 'string' && value.length > 0 ? value : null;
  }, []);
  const [unlocked, setUnlocked] = useState(() => localStorage.getItem(PREVIEW_KEY) === '1');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (unlocked) {
    return <Navigate to="/" replace />;
  }

  const handleUnlock = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    if (!previewPassword) {
      setError('Preview is locked. Set VITE_PREVIEW_PASSWORD to enable access.');
      return;
    }
    if (password.trim() !== previewPassword) {
      setError('Incorrect access code. Please try again.');
      return;
    }
    localStorage.setItem(PREVIEW_KEY, '1');
    setUnlocked(true);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-white flex items-center">
      <div className="max-w-xl mx-auto px-6 py-16 w-full">
        <div className="flex items-center gap-4 mb-8">
          <img src={logo} alt="Fresh Roots" className="h-12 w-auto object-contain" />
          <span className="text-xs uppercase tracking-[0.35em] text-stone-400">Preview</span>
        </div>
        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 shadow-xl">
          <h1 className="text-2xl font-semibold">Private Preview Access</h1>
          <p className="text-stone-300 mt-2">
            Enter the access code to view the full website.
          </p>
          <form className="mt-6 space-y-3" onSubmit={handleUnlock}>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Access code"
              className="w-full rounded-lg border border-transparent bg-white/10 px-4 py-3 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-white text-stone-900 px-4 py-3 font-semibold hover:bg-stone-200 transition-colors"
            >
              Unlock Preview
            </button>
            {error ? <p className="text-sm text-[#E88B7F]">{error}</p> : null}
          </form>
        </div>
        <a href="/coming-soon" className="mt-6 inline-flex text-sm text-stone-400 hover:text-stone-200">
          Back to Coming Soon
        </a>
      </div>
    </div>
  );
}
