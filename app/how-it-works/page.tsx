import Link from 'next/link'
import Image from 'next/image'
import FeatureGrid from '@/components/ui/feature-grid'
import CTASection from '@/components/sections/cta-section'
import {
  UserCheck,
  CheckCircle,
  LinkIcon,
  Shield,
  Clock,
  Users,
  Eye,
  TrendingUp
} from '@/components/ui/icons'

export const metadata = {
  title: 'How AmrAstha Works',
  description: 'Learn how AmrAstha helps you build portable trust through verified identity, work confirmations, and fair dispute resolution.',
}

export default function HowItWorksPage() {
  const steps = [
    {
      title: 'Verify Your Identity',
      description: 'Start by proving you are who you say you are',
      details: [
        'Submit your Bangladesh National ID (NID)',
        'Verify your phone number via SMS',
        'Take a selfie for face verification',
        'Wait for manual review (usually 24-48 hours)'
      ],
      icon: <UserCheck className="w-8 h-8" />,
      image: '/images/step1-identity.png'
    },
    {
      title: 'Record Work Events',
      description: 'Build your reputation through real work confirmations',
      details: [
        'Complete a job or service for your customer',
        'Generate a work confirmation request in the app',
        'Customer receives simple one-tap confirmation',
        'Both parties can add notes about the work'
      ],
      icon: <CheckCircle className="w-8 h-8" />,
      image: '/images/step2-work.png'
    },
    {
      title: 'Share Your Trust Profile',
      description: 'Your reputation goes wherever you go',
      details: [
        'Generate your unique trust profile link',
        'Share on Facebook, WhatsApp, or anywhere',
        'Buyers can view without installing the app',
        'Use QR codes on business cards or shops'
      ],
      icon: <LinkIcon className="w-8 h-8" />,
      image: '/images/step3-share.png'
    }
  ]

  const trustFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Evidence-Based Confirmations',
      description: 'Every confirmation comes from real work with verified customers, not anonymous reviews.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Diversity Requirement',
      description: 'Trust comes from varied customers over time. We look for diversity in your confirmation sources.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time-Based Growth',
      description: 'Real trust takes months and years to build. Sudden spikes are flagged for review.'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Pattern Detection',
      description: 'Our system detects suspicious patterns and requires manual review for fairness.'
    }
  ]

  const disputeProcess = [
    {
      step: 'Report Issue',
      description: 'Either party can report a problem within 7 days of work completion'
    },
    {
      step: 'Both Sides Present',
      description: 'Both parties submit evidence and their side of the story'
    },
    {
      step: 'Fair Resolution',
      description: 'AmrAstha reviews evidence and helps reach fair resolution'
    },
    {
      step: 'Record Outcome',
      description: 'Resolution is recorded without public shaming or permanent damage'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/20 dark:to-primary-900/20">
        <div className="container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            How AmrAstha Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto text-balance">
            Build portable trust through verified identity, work confirmations, and fair dispute resolution. Your reputation follows you everywhere.
          </p>
        </div>
      </section>

      {/* Three Steps Process */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Three Simple Steps
            </h2>
            <p className="section-subtitle">
              Start building trust that works across all platforms
            </p>
          </div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                      <div className="text-primary-600 dark:text-primary-400">
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                        Step {index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
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
                      <div className="w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        {step.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {step.title}
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

      {/* Trust Building Features */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              How We Ensure Trust
            </h2>
            <p className="section-subtitle">
              Multiple layers of verification and smart detection systems
            </p>
          </div>
          
          <FeatureGrid features={trustFeatures} cols={2} />
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
              Conflicts happen. How you handle them builds real trust.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Dispute Process
                </h3>
                <div className="space-y-6">
                  {disputeProcess.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {item.step}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary-50 dark:bg-primary-950/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  We Don't Do Public Shaming
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Unlike platforms that display public complaints forever, we believe in fair resolution and learning from mistakes. Disputes are handled privately and don't permanently damage your reputation if resolved fairly.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Fair resolution builds more trust than perfect records
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      No permanent black marks for resolved disputes
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Appeals process for fair review
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Example */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Your Public Trust Profile
            </h2>
            <p className="section-subtitle">
              What buyers see when they check your trust link
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">এম</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Md. Emran Hossain
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Handicraft Seller • Dhaka
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                      Identity Verified
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">47</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Confirmed Jobs</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Jan 2023</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Member Since</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">2/2</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Fair Disputes</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Recent Activity</h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Sold handmade bag to customer</span>
                    <span>2 days ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivered custom order</span>
                    <span>1 week ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Completed bulk order for event</span>
                    <span>2 weeks ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Your Trust Profile?"
        subtitle="Start building portable reputation that follows you everywhere in Bangladesh."
        primaryCTA={{ text: "Join Waitlist", href: "/contact" }}
        secondaryCTA={{ text: "See Live Demo", href: "/verify" }}
      />
    </>
  )
}