'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Shield,
  CheckCircle,
  Clock,
  Users,
  Eye,
  Search,
  Star,
  TrendingUp
} from '@/components/ui/icons'

// export const metadata = {
//   title: 'Verify Profile Demo - AmrAstha',
//   description: 'Try the AmrAstha profile verification demo. See how buyers check trust profiles before making purchases.',
// }

export default function VerifyPage() {
  const [showProfile, setShowProfile] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const sampleProfiles = [
    'https://amrastha.com/profile/emran-handicraft',
    'https://amrastha.com/profile/kamal-math-tutor',
    'https://amrastha.com/profile/imran-delivery'
  ]

  const handleVerify = () => {
    setShowProfile(true)
  }

  const resetDemo = () => {
    setShowProfile(false)
    setSearchQuery('')
  }

  if (showProfile) {
    return (
      <>
        {/* Profile Hero */}
        <section className="section bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/20 dark:to-primary-900/20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">এ</span>
                    </div>
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                        Md. Emran Hossain
                      </h1>
                      <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Handicraft Seller • Dhaka
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-2">
                          <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <span className="text-green-600 dark:text-green-400 font-medium">
                            Identity Verified
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <span className="text-blue-600 dark:text-blue-400 font-medium">
                            Member since Jan 2023
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={resetDemo}
                    className="btn btn-outline text-sm"
                  >
                    Verify Another
                  </button>
                </div>

                {/* Trust Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">47</div>
                    <div className="text-gray-600 dark:text-gray-400">Confirmed Jobs</div>
                    <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                      +3 this month
                    </div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">0</div>
                    <div className="text-gray-600 dark:text-gray-400">Unresolved Disputes</div>
                    <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                      2 resolved fairly
                    </div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">High</div>
                    <div className="text-gray-600 dark:text-gray-400">Trust Level</div>
                    <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Based on 11 months
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            Sold handmade bag to customer
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Confirmed by customer • Dhaka
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">2 days ago</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            Delivered custom order
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Confirmed by customer • Chittagong
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">1 week ago</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            Completed bulk order for event
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Confirmed by customer • Dhaka
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">2 weeks ago</div>
                    </div>
                  </div>
                </div>

                {/* Trust Reasons */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Why This Profile is Trustworthy
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Verified Identity</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          National ID and phone verified
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Consistent Growth</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          11 months of verified activity
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Diverse Customers</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Multiple cities and customer types
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Fair Disputes</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          2 disputes resolved professionally
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What This Means */}
                <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3">
                    What This Means for You
                  </h3>
                  <p className="text-green-800 dark:text-green-200 mb-4">
                    This seller has a proven track record of 47 successful transactions over 11 months. Their identity is verified, and they handle disputes professionally. You can buy with confidence.
                  </p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="font-medium text-green-800 dark:text-green-200">
                      Safe to transact
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-title text-gray-900 dark:text-white">
                How Profile Verification Works
              </h2>
              <p className="section-subtitle">
                Buyers can check trust profiles in seconds—no app installation required
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Share Trust Link
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Sellers share their unique AmrAstha profile link on Facebook, WhatsApp, or anywhere
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Buyer Checks Profile
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Buyers open the link in any browser—no app installation needed
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Make Informed Decision
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Buyers see verified identity, work history, and trust level before deciding
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-title text-gray-900 dark:text-white">
                Why This Matters
              </h2>
              <p className="section-subtitle">
                Profile verification changes everything for honest sellers and careful buyers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  For Sellers
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Build trust that follows you everywhere</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Get more customers with verified credibility</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Command better prices with proven track record</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Works on Facebook, WhatsApp, anywhere</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  For Buyers
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Verify sellers before making payments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">See real work history and customer feedback</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">No app installation required to check profiles</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Make confident purchasing decisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/20 dark:to-primary-900/20">
        <div className="container text-center">
          <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            Verify Profile Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto text-balance">
            See how buyers check trust profiles before making purchases. Try the demo below with sample profiles.
          </p>
        </div>
      </section>

      {/* Demo Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Check Any AmrAstha Profile
              </h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="profile-url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Paste AmrAstha profile link
                  </label>
                  <input
                    type="text"
                    id="profile-url"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="https://amrastha.com/profile/username"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
                
                <div className="text-center">
                  <button
                    onClick={handleVerify}
                    className="btn btn-primary w-full sm:w-auto px-8"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Verify Profile
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Try these sample profiles:
                </p>
                <div className="space-y-2">
                  {sampleProfiles.map((profile, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSearchQuery(profile)
                      }}
                      className="block w-full text-left px-3 py-2 text-sm text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/20 rounded-lg transition-colors"
                    >
                      {profile}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Demo Works */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 dark:text-white">
              How This Demo Works
            </h2>
            <p className="section-subtitle">
              This is a realistic simulation of the actual AmrAstha verification experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                What You're Seeing
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Realistic profile layout and design</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Sample trust metrics and activity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Trustworthiness explanations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">No app installation required</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                When You Join AmrAstha
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Create your own verified profile</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Build trust through real work confirmations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Share your trust link anywhere</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Get more customers with proven credibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Build Your Trust Profile?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Join the waitlist and be among the first to create your verified AmrAstha profile. Build trust that follows you everywhere.
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
      </div>
    </>
  )
}