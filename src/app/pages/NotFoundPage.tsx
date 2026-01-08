import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-stone-950 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl text-stone-900 dark:text-white mb-2">Page not found</h1>
        <p className="text-stone-600 dark:text-stone-300 mb-6">The page you are looking for doesn’t exist.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-[#3D9B93] text-white px-6 py-3 rounded-lg hover:bg-[#348780] transition-colors"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
