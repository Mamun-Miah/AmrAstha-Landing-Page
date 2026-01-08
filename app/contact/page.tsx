import Link from 'next/link'
import WaitlistForm from '@/components/sections/waitlist-form'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Users
} from '@/components/ui/icons'

export const metadata = {
  title: 'Contact - AmrAstha',
  description: 'Get in touch with AmrAstha. Join our waitlist or send us a message.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/20 dark:to-primary-900/20">
        <div className="container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto text-balance">
            Join our waitlist, ask questions, or share your thoughts about building trust in Bangladesh.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Waitlist Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Join the Waitlist
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Be among the first to access AmrAstha when we launch. Get early bird pricing and help shape the platform.
                </p>
              </div>
              <WaitlistForm />
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Other Ways to Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Prefer to reach out directly? We're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        General Questions
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Have questions about how AmrAstha works?
                      </p>
                      <a href="mailto:hello@amrastha.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                        hello@amrastha.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        Business Partnerships
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Interested in partnering with AmrAstha?
                      </p>
                      <a href="mailto:partnerships@amrastha.com" className="text-green-600 dark:text-green-400 hover:underline">
                        partnerships@amrastha.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        Phone Support
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Call us for urgent matters
                      </p>
                      <a href="tel:+8801234567890" className="text-orange-600 dark:text-orange-400 hover:underline">
                        +880 1234 567890
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        Response Time
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        We typically respond within 24 hours during business days. For urgent matters, please call.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              Quick answers to common questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  When will AmrAstha launch?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We're targeting launch in early 2024. Waitlist members will get early access and special pricing.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Is there a cost to join the waitlist?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No, joining the waitlist is completely free. You'll get updates about our progress and early access when we launch.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Will AmrAstha work in my area?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  AmrAstha is designed for all of Bangladesh. As long as you have a Bangladesh National ID and phone number, you can use it.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  What if I have more questions?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Feel free to email us at hello@amrastha.com or use the contact form. We're happy to answer any questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Where We Are
            </h2>
            <p className="section-subtitle">
              Based in Bangladesh, serving the entire nation
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Dhaka, Bangladesh
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our team is based in Dhaka, but AmrAstha serves the entire country. Whether you're in Dhaka, Chittagong, Rajshahi, Khulna, or anywhere else in Bangladesh, AmrAstha is built for you.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>Serving all 64 districts</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>Bangladesh-first design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="section bg-primary-50 dark:bg-primary-950/20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of Bangladeshis who are ready to build trust and grow their businesses safely.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Join Waitlist
              </Link>
              <Link href="/verify" className="btn btn-outline">
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}