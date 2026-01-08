import Link from 'next/link'
import Image from 'next/image'
import FeatureGrid from '@/components/ui/feature-grid'
import TestimonialCards from '@/components/ui/testimonial-cards'
import WaitlistForm from '@/components/sections/waitlist-form'
import CTASection from '@/components/sections/cta-section'
import {
  Shield,
  CheckCircle,
  UserCheck,
  LinkIcon,
  Clock,
  Users,
  TrendingUp,
  AlertTriangle,
  Eye
} from '@/components/ui/icons'
import FAQAccordion from '@/components/ui/faq-accordion'

export default function HomePage() {
  const features = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Verified Identity',
      description: 'National ID and phone verification ensures every profile represents a real person or business.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      description: 'Work confirmations from real customers build your reputation over time with evidence-based trust.',
      title: 'Verified Work'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      description: 'Fair dispute resolution builds credibility. How you handle conflicts matters more than perfect ratings.',
      title: 'Dispute Behavior'
    },
    {
      icon: <LinkIcon className="w-6 h-6" />,
      description: 'Share your public trust profile anywhere—Facebook, WhatsApp, or print it as a QR code.',
      title: 'Portable Trust Link'
    }
  ]

  const useCases = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Facebook Sellers',
      description: 'Build trust in Facebook Marketplace and buy/sell groups with verified seller profiles.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Tutors & Teachers',
      description: 'Show verified teaching experience and student feedback to attract more students.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Delivery Riders',
      description: 'Prove reliable delivery history and customer satisfaction for food and package delivery.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Home Services',
      description: 'Electricians, plumbers, and cleaners can show verified work history and customer trust.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Freelancers',
      description: 'Build portable reputation across platforms with verified client feedback and work history.'
    }
  ]

  const testimonials = [
    {
      quote: 'AmrAstha helped me build trust with customers beyond just Facebook reviews. Now I can show my verified work history anywhere.',
      author: 'Rasheda Begum',
      role: 'Handicraft Seller',
      company: 'Rajshahi'
    },
    {
      quote: 'As a tutor, parents want to see verified credentials. AmrAstha makes it easy to share my teaching history and student feedback.',
      author: 'Kamal Hossain',
      role: 'Math Tutor',
      company: 'Dhaka'
    }
  ]

  const faqItems = [
    {
      question: 'Is AmrAstha a marketplace?',
      answer: 'No, AmrAstha is not a marketplace. It\'s trust infrastructure that works with any platform—Facebook, WhatsApp, or direct sales. Think of it as your portable reputation that follows you everywhere.'
    },
    {
      question: 'How is AmrAstha different from star ratings?',
      answer: 'Unlike public star ratings that can be manipulated, AmrAstha focuses on verified work confirmations and time-based consistency. We don\'t show public ratings—instead, we show evidence of real work and fair dispute resolution.'
    },
    {
      question: 'Do buyers need to install the app to check trust?',
      answer: 'No, buyers can view your public trust profile link in any web browser—no app installation required. This makes it perfect for sharing on Facebook, WhatsApp, or even as a QR code on business cards.'
    },
    {
      question: 'How does identity verification work?',
      answer: 'We verify your Bangladesh National ID and phone number to ensure every profile represents a real person or business. This prevents fake profiles and builds foundational trust.'
    },
    {
      question: 'What happens during a dispute?',
      answer: 'Disputes are handled fairly with both parties presenting their side. How you handle conflicts actually builds trust—fair resolution shows you\'re a professional. We don\'t allow public shaming or permanent black marks.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/20 dark:to-primary-900/20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
                Portable Trust for People & Small Businesses
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 text-balance">
                AmrAstha helps buyers verify and helps honest sellers/workers build trust that follows them everywhere in Bangladesh.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
                  Join Waitlist
                </Link>
                <Link href="/verify" className="btn btn-outline w-full sm:w-auto">
                  Try Verify Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-12 h-12 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Trusted Profile
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Verify identity • Build reputation • Share trust
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              The Trust Problem in Bangladesh Commerce
            </h2>
            <p className="section-subtitle">
              Without proper verification, both buyers and sellers face real risks every day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Fraud Risk
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fake sellers take advance payments and disappear. Fake buyers waste time with no real intention to purchase.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Trust Resets
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                When you move to a new platform or area, you start from zero. Your reputation doesn't travel with you.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No Verification
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Anyone can create multiple fake profiles. There's no way to know if someone is who they claim to be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              One Trust Profile. Works Everywhere.
            </h2>
            <p className="section-subtitle">
              Build verified trust through real work confirmations and fair dispute resolution
            </p>
          </div>
          
          <FeatureGrid features={features} cols={2} />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              How AmrAstha Works
            </h2>
            <p className="section-subtitle">
              Three simple steps to build portable trust that follows you everywhere
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Verify Identity
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Submit your Bangladesh National ID and phone number. We verify you are a real person or business.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Record Work Events
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                After completing work, request one-tap confirmation from your customer. Build verified work history over time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Share Trust Link
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Buyers can check your trust profile in any browser—no app installation needed. Works on Facebook, WhatsApp, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Perfect for Every Small Business
            </h2>
            <p className="section-subtitle">
              AmrAstha works for anyone who needs to build trust with customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mx-auto mb-4">
                  <div className="text-primary-600 dark:text-primary-400">
                    {useCase.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trustworthy Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why AmrAstha is Trustworthy
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Evidence-Based Confirmations
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Trust is built through real work confirmations from verified customers, not anonymous reviews.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Diversity Requirement
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Trust comes from varied customers over time, not just friends or family reviews.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Time-Based Growth
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Real trust takes time. Consistent work history over months proves reliability better than sudden spikes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      No Public Shaming
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We focus on building trust, not destroying reputations. Disputes are handled fairly and privately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 dark:bg-primary-950/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Trust Metrics That Matter
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">Identity Verified</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">✓ Yes</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">Confirmed Jobs</span>
                  <span className="font-semibold text-gray-900 dark:text-white">47 completed</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">Member Since</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Jan 2023</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700 dark:text-gray-300">Disputes Resolved</span>
                  <span className="font-semibold text-gray-900 dark:text-white">2/2 fairly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Join Our Pilot Partners
            </h2>
            <p className="section-subtitle">
              Early adopters are already building trust with AmrAstha
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 mb-16">
            {/* Placeholder logos */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-4 h-16 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Partner {i}</span>
              </div>
            ))}
          </div>
          
          <TestimonialCards testimonials={testimonials} />
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Join the Waitlist
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Be among the first to build portable trust in Bangladesh. Get early access and help shape the future of local commerce.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Early access to the platform</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Help shape product features</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Exclusive updates and insights</span>
                </div>
              </div>
            </div>
            
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle">
              Everything you need to know about AmrAstha
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Build Portable Trust?"
        subtitle="Join thousands of honest sellers, workers, and service providers who want to prove their credibility in Bangladesh."
        primaryCTA={{ text: "Join Waitlist", href: "/contact" }}
        secondaryCTA={{ text: "Try Verify Demo", href: "/verify" }}
      />
    </>
  )
}