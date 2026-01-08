import Link from 'next/link'
import Image from 'next/image'
import {
  Heart,
  Shield,
  Users,
  Globe,
  Target,
  Lightbulb,
  CheckCircle
} from '@/components/ui/icons'
import CTASection from '@/components/sections/cta-section'

export const metadata = {
  title: 'About - AmrAstha',
  description: 'Learn about AmrAstha\'s mission to build trust infrastructure for Bangladesh.',
}

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Trust First',
      description: 'We believe trust is the foundation of all commerce and relationships.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety Always',
      description: 'Every decision prioritizes user safety and data protection.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Inclusive Design',
      description: 'Built for everyone, regardless of technical skill or background.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Bangladesh Focus',
      description: 'Deeply understanding and serving the unique needs of Bangladesh.'
    }
  ]

  const team = [
    {
      name: 'Team Member 1',
      role: 'Founder & CEO',
      bio: 'Passionate about building trust in Bangladesh commerce.'
    },
    {
      name: 'Team Member 2',
      role: 'Head of Engineering',
      bio: 'Building scalable trust infrastructure for millions.'
    },
    {
      name: 'Team Member 3',
      role: 'Head of Operations',
      bio: 'Ensuring fair and safe experiences for all users.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/20 dark:to-primary-900/20">
        <div className="container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            Building Trust for Bangladesh
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto text-balance">
            AmrAstha (আমার আস্থা) is creating portable trust infrastructure for people and small businesses across Bangladesh.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Every day, millions of Bangladeshis buy and sell through Facebook, WhatsApp, and direct sales. But without proper verification, both buyers and sellers face real risks—from fake sellers taking advance payments to buyers not knowing if service providers are trustworthy.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                AmrAstha solves this by creating portable trust. We don't run a marketplace—we provide the trust infrastructure that works everywhere. When you build trust on AmrAstha, it follows you across all platforms and locations.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Our goal is simple: make it safe and easy for honest people to prove their credibility, and for careful buyers to verify who they're dealing with.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-12 h-12 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Portable Trust Infrastructure
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Trust that works everywhere, not locked to any single platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Our Values
            </h2>
            <p className="section-subtitle">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                    <div className="text-primary-600 dark:text-primary-400">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-8">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4">
                The Problem
              </h3>
              <ul className="space-y-3 text-red-800 dark:text-red-200">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Fake sellers take advance payments and disappear</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Reputation doesn't transfer between platforms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>No way to verify if someone is who they claim to be</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Star ratings can be easily manipulated</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
                Our Solution
              </h3>
              <ul className="space-y-3 text-green-800 dark:text-green-200">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <span>Verified identity through National ID and phone</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <span>Portable trust that works across all platforms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <span>Evidence-based confirmations from real customers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <span>Time-based trust that can't be faked quickly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Our Team
            </h2>
            <p className="section-subtitle">
              Passionate people building trust infrastructure for Bangladesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              Our Journey
            </h2>
            <p className="section-subtitle">
              From idea to implementation—building trust infrastructure
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary-600 dark:text-primary-400">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Idea Conception
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2023</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Recognizing the trust gap in Bangladeshi commerce and the need for portable reputation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary-600 dark:text-primary-400">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Research & Development
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2023 - 2024</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Talking to hundreds of sellers, buyers, and service providers across Bangladesh to understand their trust challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary-600 dark:text-primary-400">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Platform Development
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2024</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Building the core trust infrastructure with identity verification, work confirmations, and dispute resolution.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Launch & Growth
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2024 - Future</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Launching with pilot partners and expanding to serve all of Bangladesh's small businesses and service providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Us in Building Trust"
        subtitle="Be part of the movement to make Bangladesh commerce safer and more trustworthy for everyone."
        primaryCTA={{ text: "Join Waitlist", href: "/contact" }}
        secondaryCTA={{ text: "Learn How It Works", href: "/how-it-works" }}
      />
    </>
  )
}