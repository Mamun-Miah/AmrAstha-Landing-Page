import Link from 'next/link'
import Image from 'next/image'
import {
  Users,
  TrendingUp,
  Clock,
  Shield,
  CheckCircle,
  Briefcase,
  Home,
  ShoppingCart
} from '@/components/ui/icons'
import CTASection from '@/components/sections/cta-section'

export const metadata = {
  title: 'Use Cases - AmrAstha',
  description: 'See how AmrAstha helps different types of workers and sellers build trust with customers across Bangladesh.',
}

export default function UseCasesPage() {
  const useCases = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Facebook Marketplace Sellers',
      description: 'Build trust with buyers in Facebook groups and Marketplace',
      problems: [
        'Buyers hesitate to pay advance',
        'No way to verify seller credibility',
        'Fake sellers damage trust for everyone'
      ],
      solutions: [
        'Verified identity shows you\'re real',
        'Work history proves reliable delivery',
        'Trust link works in Facebook comments'
      ],
      example: {
        name: 'Rasheda Akter',
        location: 'Chittagong',
        business: 'Handicraft Seller',
        confirmedJobs: 156,
        memberSince: 'Feb 2023'
      }
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Tutors & Teachers',
      description: 'Show verified teaching experience to attract more students',
      problems: [
        'Parents worry about fake credentials',
        'No way to show teaching track record',
        'Hard to prove student improvement'
      ],
      solutions: [
        'Verified identity and background',
        'Student confirmations show results',
        'Time-based trust proves consistency'
      ],
      example: {
        name: 'Kamal Hossain',
        location: 'Dhaka',
        business: 'Math Tutor',
        confirmedJobs: 89,
        memberSince: 'Mar 2022'
      }
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Delivery Riders',
      description: 'Prove reliable delivery history for food and packages',
      problems: [
        'Restaurants worry about reliability',
        'No delivery performance history',
        'Customers complain about delays'
      ],
      solutions: [
        'Delivery confirmations from customers',
        'Time-based reliability metrics',
        'Dispute resolution shows professionalism'
      ],
      example: {
        name: 'Imran Sheikh',
        location: 'Dhaka',
        business: 'Food Delivery',
        confirmedJobs: 1247,
        memberSince: 'Jan 2022'
      }
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Home Service Workers',
      description: 'Electricians, plumbers, cleaners show verified work history',
      problems: [
        'Homeowners fear letting strangers in',
        'No way to verify skills or reliability',
        'Quality concerns for expensive repairs'
      ],
      solutions: [
        'Identity verification for safety',
        'Customer confirmations prove quality',
        'Work photos and notes in profile'
      ],
      example: {
        name: 'Abdul Karim',
        location: 'Rajshahi',
        business: 'Electrician',
        confirmedJobs: 203,
        memberSince: 'Jun 2022'
      }
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Freelancers',
      description: 'Build portable reputation across platforms and clients',
      problems: [
        'Reputation stuck on one platform',
        'Hard to prove skills to new clients',
        'No standardized trust metrics'
      ],
      solutions: [
        'Cross-platform reputation portability',
        'Verified client feedback system',
        'Consistent trust metrics everywhere'
      ],
      example: {
        name: 'Nasrin Sultana',
        location: 'Khulna',
        business: 'Graphic Designer',
        confirmedJobs: 67,
        memberSince: 'Sep 2022'
      }
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/20 dark:to-primary-900/20">
        <div className="container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            Perfect for Every Small Business
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto text-balance">
            AmrAstha works for anyone who needs to build trust with customers. See how different workers and sellers use it across Bangladesh.
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="section">
        <div className="container">
          <div className="space-y-20">
            {useCases.map((useCase, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                      <div className="text-primary-600 dark:text-primary-400">
                        {useCase.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {useCase.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">
                        Problems They Face
                      </h4>
                      <ul className="space-y-2">
                        {useCase.problems.map((problem, problemIndex) => (
                          <li key={problemIndex} className="flex items-start space-x-2">
                            <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">
                        How AmrAstha Helps
                      </h4>
                      <ul className="space-y-2">
                        {useCase.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start space-x-2">
                            <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="card">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {useCase.example.name.charAt(0)}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {useCase.example.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {useCase.example.business} • {useCase.example.location}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {useCase.example.confirmedJobs}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Confirmed Jobs
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {useCase.example.memberSince.split(' ')[1]}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Member Since
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-green-600 dark:text-green-400 font-medium">
                        Identity Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Benefits */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Benefits for Everyone
            </h2>
            <p className="section-subtitle">
              No matter what you do, AmrAstha helps you build trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Verified Identity
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Prove you are who you say you are with official verification
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Build Reputation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Collect verified work confirmations over time
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Share Anywhere
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your trust link works on Facebook, WhatsApp, anywhere
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Fair Disputes
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Handle conflicts professionally without public shaming
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Portable Trust
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your reputation follows you across platforms and locations
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No App Required
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Buyers can check your profile without installing anything
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Trust for Your Business?"
        subtitle="Join the waitlist and be among the first to use AmrAstha for your work."
        primaryCTA={{ text: "Join Waitlist", href: "/contact" }}
        secondaryCTA={{ text: "See How It Works", href: "/how-it-works" }}
      />
    </>
  )
}