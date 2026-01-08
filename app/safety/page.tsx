import Link from 'next/link'
import {
  Shield,
  CheckCircle,
  Users,
  Clock,
  Eye,
  AlertTriangle,
  Lock,
  Heart,
  Scale
} from '@/components/ui/icons'
import CTASection from '@/components/sections/cta-section'

export const metadata = {
  title: 'Safety & Anti-Fraud - AmrAstha',
  description: 'Learn about AmrAstha\'s comprehensive safety measures, anti-fraud controls, and fair dispute resolution system.',
}

export default function SafetyPage() {
  const safetyFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Identity Verification',
      description: 'Every user must verify their Bangladesh National ID and phone number before building trust.',
      details: [
        'NID verification through official database',
        'Phone number verification via SMS',
        'Face verification for additional security',
        'Manual review for suspicious profiles'
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Real Counterparty Confirmations',
      description: 'Work confirmations only come from verified customers who actually completed transactions.',
      details: [
        'Customers must have verified identity',
        'One-tap confirmation system',
        'Both parties can add work notes',
        'Photos can be attached as evidence'
      ]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Pattern Detection',
      description: 'Advanced algorithms detect and flag suspicious activity for manual review.',
      details: [
        'Sudden spikes in confirmations',
        'Unusual geographic patterns',
        'Fake account clusters',
        'Coordinated manipulation attempts'
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Time-Based Growth',
      description: 'Real trust takes time. We prioritize consistency over sudden popularity.',
      details: [
        'Trust builds gradually over months',
        'Consistency matters more than volume',
        'Seasonal patterns are considered',
        'Long-term reliability is rewarded'
      ]
    }
  ]

  const fraudPrevention = [
    {
      threat: 'Fake Reviews',
      solution: 'Confirmations only from verified customers with real transaction history',
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />
    },
    {
      threat: 'Multiple Fake Accounts',
      solution: 'NID verification prevents one person from creating multiple profiles',
      icon: <Lock className="w-6 h-6 text-blue-500" />
    },
    {
      threat: 'Review Manipulation',
      solution: 'Pattern detection flags coordinated confirmation campaigns',
      icon: <Eye className="w-6 h-6 text-green-500" />
    },
    {
      threat: 'Identity Theft',
      solution: 'Face verification and manual review catch stolen identity attempts',
      icon: <Shield className="w-6 h-6 text-purple-500" />
    },
    {
      threat: 'False Disputes',
      solution: 'Evidence-based dispute resolution with appeals process',
      icon: <Scale className="w-6 h-6 text-orange-500" />
    },
    {
      threat: 'Platform Hopping',
      solution: 'Portable trust means bad actors can\'t escape their history',
      icon: <CheckCircle className="w-6 h-6 text-indigo-500" />
    }
  ]

  const disputePrinciples = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Assume Good Intent',
      description: 'Most disputes are misunderstandings, not malicious behavior'
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Fair Process',
      description: 'Both parties get to present their side with evidence'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Human Review',
      description: 'Complex cases get human oversight, not just automated decisions'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Privacy Protection',
      description: 'Disputes are handled privately without public shaming'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
        <div className="container text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            Safety & Anti-Fraud
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto text-balance">
            Multiple layers of protection ensure AmrAstha remains trustworthy for honest workers and safe for buyers across Bangladesh.
          </p>
        </div>
      </section>

      {/* Core Safety Features */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Multi-Layer Safety System
            </h2>
            <p className="section-subtitle">
              Comprehensive protection at every step of trust building
            </p>
          </div>

          <div className="space-y-12">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <div className="text-green-600 dark:text-green-400">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 aspect-square flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        {feature.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Visual representation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fraud Prevention Table */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Fraud Prevention
            </h2>
            <p className="section-subtitle">
              How we protect against common trust manipulation tactics
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {fraudPrevention.map((item, index) => (
                <div key={index} className="card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {item.threat}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Fair Dispute Resolution
            </h2>
            <p className="section-subtitle">
              We don't do public shaming. Here's how we handle conflicts fairly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Our Dispute Philosophy
              </h3>
              <div className="space-y-6">
                {disputePrinciples.map((principle, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-blue-600 dark:text-blue-400">
                        {principle.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {principle.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Dispute Resolution Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">1</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Report issue within 7 days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">2</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Both parties submit evidence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">3</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">AmrAstha reviews fairly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">4</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Resolution recorded privately</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Important:</strong> Disputes don't create permanent black marks. Fair resolution shows professionalism and can actually improve your trust profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Don't Do Public Shaming */}
      <section className="section bg-pink-50 dark:bg-pink-950/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-pink-600 dark:text-pink-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              We Don't Do Public Shaming
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Many platforms permanently damage reputations with public complaints. At AmrAstha, we believe in fair resolution, not public humiliation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">
                  What We Don't Do
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Public complaint boards</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Permanent black marks</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Social media callouts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Anonymous complaints</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">
                  What We Do Instead
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Private dispute resolution</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fair evidence review</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Second chances for mistakes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Professional growth focus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Safety Tips for Users
            </h2>
            <p className="section-subtitle">
              How to stay safe while using AmrAstha and doing business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                For Buyers
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">1</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Always check the trust profile link before paying</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">2</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Look for identity verification and work history</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">3</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Use secure payment methods when possible</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">4</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Report suspicious profiles immediately</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                For Sellers & Workers
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-green-600 dark:text-green-400">1</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Complete identity verification to build trust</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-green-600 dark:text-green-400">2</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Always request work confirmations from customers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-green-600 dark:text-green-400">3</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Handle disputes professionally and fairly</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-green-600 dark:text-green-400">4</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Keep your profile updated with accurate information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Join a Safer Marketplace?"
        subtitle="Build trust with verified identity and fair dispute resolution. No public shaming, just honest reputation building."
        primaryCTA={{ text: "Join Waitlist", href: "/contact" }}
        secondaryCTA={{ text: "Try Verify Demo", href: "/verify" }}
      />
    </>
  )
}