import Image from 'next/image'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  image?: string
}

interface TestimonialCardsProps {
  testimonials: Testimonial[]
}

export default function TestimonialCards({ testimonials }: TestimonialCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="card">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              {testimonial.image ? (
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-1">
              <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </span>
                <span className="text-gray-500 dark:text-gray-400">•</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}