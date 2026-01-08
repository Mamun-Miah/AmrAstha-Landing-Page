import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Blog - AmrAstha',
  description: 'Insights about trust, verification, and small business in Bangladesh.',
}

export default function BlogPage() {
  const posts = [
    {
      title: 'Why Trust is the Biggest Challenge for Bangladeshi Small Businesses',
      excerpt: 'Explore how lack of verification affects commerce and what we can do about it.',
      author: 'AmrAstha Team',
      date: 'January 15, 2024',
      readTime: '5 min read',
      category: 'Trust & Safety',
      image: '/images/blog/trust-challenge.png'
    },
    {
      title: 'How to Build Reputation That Follows You Across Platforms',
      excerpt: 'Learn why portable trust matters and how to build it effectively.',
      author: 'Sarah Ahmed',
      date: 'January 10, 2024',
      readTime: '7 min read',
      category: 'Business Tips',
      image: '/images/blog/portable-reputation.png'
    },
    {
      title: 'The Problem with Star Ratings and What to Do Instead',
      excerpt: 'Why evidence-based trust beats anonymous reviews every time.',
      author: 'Kamal Hossain',
      date: 'January 5, 2024',
      readTime: '6 min read',
      category: 'Trust & Safety',
      image: '/images/blog/star-ratings.png'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/20 dark:to-primary-900/20">
        <div className="container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            AmrAstha Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto text-balance">
            Insights about trust, verification, and small business in Bangladesh.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {posts.map((post, index) => (
                <article key={index} className="card hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400 text-sm">Blog Image</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        <Link href={`/blog/${index + 1}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <span>{post.author}</span>
                          <span>•</span>
                          <time>{post.date}</time>
                        </div>
                        <Link
                          href={`/blog/${index + 1}`}
                          className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <span className="text-gray-600 dark:text-gray-400">More posts coming soon</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Get the latest posts and AmrAstha updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 max-w-sm px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}