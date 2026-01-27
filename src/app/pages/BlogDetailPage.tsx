import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import { ImageWithSkeleton } from '../components/ImageWithSkeleton';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-20 bg-white dark:bg-stone-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8 text-center">
            <h1 className="text-2xl text-stone-900 dark:text-white mb-2">Post not found</h1>
            <p className="text-stone-600 dark:text-stone-300 mb-6">
              The blog post you are looking for does not exist.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center bg-[#3D9B93] text-white px-6 py-3 rounded-lg hover:bg-[#348780] transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-stone-950">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/blog" className="text-sm text-stone-500 dark:text-stone-400">
          ← Back to Blog
        </Link>
        <div className="mt-6 mb-8">
          <div className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
            {post.category} • {post.readTime}
          </div>
          <h1 className="text-4xl text-stone-900 dark:text-white mt-3 mb-4">{post.title}</h1>
          <div className="text-sm text-stone-500 dark:text-stone-400">{post.date}</div>
        </div>

        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-stone-50 dark:bg-stone-900 mb-10">
          <ImageWithSkeleton
            src={post.image}
            alt={post.title}
            loading="lazy"
            decoding="async"
            wrapperClassName="h-full w-full"
            imgClassName="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-6 text-lg text-stone-700 dark:text-stone-200">
          {post.content.map((paragraph, index) => (
            <p key={`${post.slug}-${index}`}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={`${post.slug}-${tag}`}
              className="text-xs uppercase tracking-[0.2em] bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 px-3 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
