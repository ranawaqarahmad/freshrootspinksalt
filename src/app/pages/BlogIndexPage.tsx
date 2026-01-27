import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import { ImageWithSkeleton } from '../components/ImageWithSkeleton';

export default function BlogIndexPage() {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-stone-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#3D9B93]/10 text-[#3D9B93] px-4 py-2 rounded-full text-sm mb-4">
            Blogs & Knowledge Center
          </div>
          <h1 className="text-4xl lg:text-5xl text-stone-900 dark:text-white mb-3">Blogs & Knowledge Center</h1>
          <p className="text-lg text-stone-600 dark:text-stone-300 max-w-3xl">
            Our Blogs & Knowledge Center is an educational resource designed to help buyers understand
            product differences, appropriate usage, packaging selection, storage recommendations, and
            market insights. These articles provide practical guidance and in-depth information that
            supports informed decision-making. Whether you want to compare grain sizes for culinary use
            or assess the benefits of wellness salts, our blog content is crafted to add value to your
            buyer journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="aspect-[16/10] bg-stone-50 dark:bg-stone-800 overflow-hidden">
                <ImageWithSkeleton
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  wrapperClassName="h-full w-full"
                  imgClassName="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-stone-500 dark:text-stone-400 uppercase tracking-[0.2em]">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl text-stone-900 dark:text-white mt-3 mb-3">{post.title}</h2>
                <p className="text-stone-600 dark:text-stone-300 mb-4">{post.excerpt}</p>
                <div className="text-sm text-stone-500 dark:text-stone-400">{post.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
