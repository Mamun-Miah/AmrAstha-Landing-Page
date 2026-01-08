import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - AmrAstha',
  description: 'Privacy policy for AmrAstha trust platform.',
}

export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2024'

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div className="card p-8">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      1. Introduction
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      At AmrAstha (আমার আস্থা), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our trust and reputation platform. By using our service, you agree to the collection and use of information in accordance with this policy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      2. Information We Collect
                    </h2>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Personal Information
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We collect the following personal information:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>Bangladesh National ID (NID) number and information</li>
                      <li>Full name as it appears on your NID</li>
                      <li>Bangladesh phone number</li>
                      <li>Email address (optional)</li>
                      <li>Profile photo (optional)</li>
                      <li>Business information (if applicable)</li>
                      <li>Location (city/division)</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Work and Transaction Information
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We collect information about your work activities:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>Work confirmations from customers</li>
                      <li>Dispute history and resolutions</li>
                      <li>Customer feedback and ratings</li>
                      <li>Photos of completed work (if provided)</li>
                      <li>Transaction dates and details</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Device and Usage Information
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We automatically collect certain information:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>Device identifiers and IP addresses</li>
                      <li>Browser type and version</li>
                      <li>Access times and dates</li>
                      <li>Pages viewed and features used</li>
                      <li>Referring website information</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      3. How We Use Your Information
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We use your information for the following purposes:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>To verify your identity and prevent fraud</li>
                      <li>To create and maintain your trust profile</li>
                      <li>To facilitate work confirmations between users</li>
                      <li>To resolve disputes between parties</li>
                      <li>To improve our services and develop new features</li>
                      <li>To communicate with you about your account</li>
                      <li>To comply with legal obligations</li>
                      <li>To protect the security and integrity of our platform</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      4. Information Sharing
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We do not sell your personal information. We only share information in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>With your consent or at your direction</li>
                      <li>To comply with legal requirements or respond to lawful requests</li>
                      <li>To protect the rights, property, and safety of AmrAstha, our users, or others</li>
                      <li>With service providers who help us operate our platform</li>
                      <li>In connection with a merger, acquisition, or sale of assets</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      5. Public Trust Profile
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Your trust profile is designed to be shared publicly. This includes:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>Your verified status (but not your NID details)</li>
                      <li>Your work confirmation count and history</li>
                      <li>Your dispute resolution record</li>
                      <li>Your member since date</li>
                      <li>Your business information (if provided)</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Your NID number, phone number, and other sensitive information are never displayed publicly.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      6. Data Security
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We implement appropriate technical and organizational measures to protect your data:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>Encryption of sensitive data in transit and at rest</li>
                      <li>Access controls and authentication requirements</li>
                      <li>Regular security assessments and monitoring</li>
                      <li>Staff training on data protection</li>
                      <li>Secure data storage with reputable providers</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      7. Data Retention
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We retain your information for as long as your account is active or as needed to provide services. If you close your account:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>Your public trust profile is deactivated</li>
                      <li>Your personal information is retained for legal compliance</li>
                      <li>Work confirmations may be anonymized but retained for platform integrity</li>
                      <li>Some information may be retained in backups</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      8. Your Rights
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      You have the right to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Request deletion of your data (subject to legal requirements)</li>
                      <li>Object to certain processing of your data</li>
                      <li>Export your data</li>
                      <li>Withdraw consent (where applicable)</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      To exercise these rights, contact us at <a href="mailto:privacy@amrastha.com" className="text-primary-600 dark:text-primary-400 hover:underline">privacy@amrastha.com</a>.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      9. International Data Transfers
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Your data is stored and processed in Bangladesh. We do not transfer your personal data outside of Bangladesh without appropriate safeguards and legal basis.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      10. Children's Privacy
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      AmrAstha is not intended for use by children under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      11. Changes to This Policy
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of the service after changes constitutes acceptance of the new policy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      12. Contact Information
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      If you have questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <ul className="list-none text-gray-700 dark:text-gray-300 space-y-2">
                      <li>Data Protection Officer: <a href="mailto:dpo@amrastha.com" className="text-primary-600 dark:text-primary-400 hover:underline">dpo@amrastha.com</a></li>
                      <li>General Privacy Questions: <a href="mailto:privacy@amrastha.com" className="text-primary-600 dark:text-primary-400 hover:underline">privacy@amrastha.com</a></li>
                      <li>Address: Dhaka, Bangladesh</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      13. Data Protection Authority
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      If you have concerns about our data processing, you have the right to lodge a complaint with the relevant data protection authority in Bangladesh.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}