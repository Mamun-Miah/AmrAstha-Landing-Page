import Link from 'next/link'
import {
  CheckCircle,
  Clock,
  Star,
  Users,
  Shield,
  TrendingUp
} from '@/components/ui/icons'
import CTASection from '@/components/sections/cta-section'

export const metadata = {
  title: 'Pricing - AmrAstha',
  description: 'Simple, transparent pricing for trust building in Bangladesh. Free tier available for everyone.',
}

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '৳০',
      period: 'forever',
      description: 'Perfect for individuals getting started',
      features: [
        'Verified identity profile',
        'Public trust link',
        'Basic work confirmations',
        'Dispute resolution',
        'Mobile web access',
        'Community support'
      ],
      cta: 'Get Started Free',
      popular: false,
      badge: null
    },
    {
      name: 'Pro',
      price: '৳১৯৯',
      period: 'per month',
      description: 'For serious sellers and service providers',
      features: [
        'Everything in Free',
        'Privacy controls',
        'Advanced analytics',
        'Priority dispute support',
        'Custom profile branding',
        'Work photo uploads',
        'QR code generation',
        'Email support'
      ],
      cta: 'Join Pro Waitlist',
      popular: true,
      badge: 'Most Popular'
    },
    {
      name: 'Business',
      price: '৳২,৯৯৯',
      period: 'per month',
      description: 'For teams and growing businesses',
      features: [
        'Everything in Pro',
        'Team management (coming soon)',
        'Advanced verification checks',
        'Bulk work confirmations',
        'API access (coming soon)',
        'Priority support',
        'Custom integrations',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false,
      badge: 'Coming Soon'
    }
  ]

  const faqItems = [
    {
      question: 'Is there really a free plan?',
      answer: 'Yes! Our free plan includes identity verification, public trust profile, basic work confirmations, and dispute resolution. We believe everyone deserves to build trust, regardless of their budget.'
    },
    {
      question: 'How does the Pro plan help me earn more?',
      answer: 'Pro users get advanced analytics to understand their reputation growth, privacy controls to manage their profile, priority dispute support for faster resolution, and custom branding to look more professional. These features help attract more customers and command better rates.'
    },
    {
      question: 'When will Business features be available?',
      answer: 'Business features like team management and API access are in development. Join our waitlist to get early access and help shape these features based on your business needs.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you\'ll be charged the difference. If you downgrade, you\'ll keep the higher plan features until your billing period ends.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bKash, Nagad, Rocket, and major credit/debit cards. For Business plans, we also accept bank transfers and corporate payment methods.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/20 dark:to-primary-900/20">
        <div className="container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto text-balance">
            Build trust for free. Upgrade when you're ready to grow. All plans include our core safety and verification features.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            <span>Early bird pricing for waitlist members</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card relative ${plan.popular ? 'ring-2 ring-primary-500 shadow-xl' : ''}`}
              >
                {plan.badge && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium ${
                    plan.popular
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                    {plan.badge}
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center space-x-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      /{plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.name === 'Business' ? '/contact' : '/contact'}
                  className={`btn w-full text-center ${
                    plan.popular ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              All plans include our core safety features: identity verification, dispute resolution, and data protection.
            </p>
            <Link href="/contact" className="text-primary-600 dark:text-primary-400 hover:underline">
              Need custom pricing? Contact us →
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Compare Features
            </h2>
            <p className="section-subtitle">
              See what's included in each plan
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                        Free
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                        Pro
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                        Business
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {[
                      { feature: 'Identity Verification', free: true, pro: true, business: true },
                      { feature: 'Public Trust Profile', free: true, pro: true, business: true },
                      { feature: 'Work Confirmations', free: true, pro: true, business: true },
                      { feature: 'Dispute Resolution', free: true, pro: true, business: true },
                      { feature: 'Privacy Controls', free: false, pro: true, business: true },
                      { feature: 'Advanced Analytics', free: false, pro: true, business: true },
                      { feature: 'Priority Support', free: false, pro: true, business: true },
                      { feature: 'Custom Branding', free: false, pro: true, business: true },
                      { feature: 'Team Management', free: false, pro: false, business: true },
                      { feature: 'API Access', free: false, pro: false, business: true },
                      { feature: 'Dedicated Manager', free: false, pro: false, business: true }
                    ].map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.free ? (
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mx-auto" />
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.pro ? (
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mx-auto" />
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.business ? (
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mx-auto" />
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Pricing FAQ
            </h2>
            <p className="section-subtitle">
              Common questions about our pricing and plans
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Note */}
      <section className="section bg-yellow-50 dark:bg-yellow-950/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Launching Soon
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              We're putting the finishing touches on AmrAstha. Join our waitlist to get early access and secure early bird pricing when we launch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Join Waitlist
              </Link>
              <Link href="/how-it-works" className="btn btn-outline">
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Trust?"
        subtitle="Join the waitlist and be the first to know when AmrAstha launches. Early members get special pricing."
        primaryCTA={{ text: "Join Waitlist", href: "/contact" }}
        secondaryCTA={{ text: "Try Verify Demo", href: "/verify" }}
      />
    </>
  )
}