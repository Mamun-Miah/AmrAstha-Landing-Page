import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - AmrAstha',
  description: 'Terms of service for using AmrAstha trust platform.',
}

export default function TermsPage() {
  const lastUpdated = 'January 1, 2024'

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div className="card p-8">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      1. Acceptance of Terms
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      By accessing and using AmrAstha (আমার আস্থা), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      2. Description of Service
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      AmrAstha provides trust and reputation infrastructure for individuals and small businesses in Bangladesh. Our services include identity verification, work confirmation systems, and dispute resolution mechanisms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      3. Eligibility
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      To use AmrAstha, you must:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>Be at least 18 years old</li>
                      <li>Be a resident of Bangladesh</li>
                      <li>Possess a valid Bangladesh National ID (NID)</li>
                      <li>Have a valid Bangladesh phone number</li>
                      <li>Agree to provide accurate and truthful information</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      4. Account Registration
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      When you create an account with AmrAstha, you agree to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>Provide accurate, current, and complete information</li>
                      <li>Maintain and promptly update your information</li>
                      <li>Maintain the security of your account credentials</li>
                      <li>Immediately notify us of any unauthorized use of your account</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      5. Identity Verification
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      AmrAstha requires identity verification using your Bangladesh National ID (NID) and phone number. By using our service, you consent to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>Providing your NID information for verification</li>
                      <li>SMS verification of your phone number</li>
                      <li>Photo verification if required</li>
                      <li>Storage of verification data according to our Privacy Policy</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      6. Work Confirmations
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Work confirmations are a core feature of AmrAstha. When you request or provide work confirmations:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>You must only confirm work that was actually completed</li>
                      <li>False confirmations may result in account suspension</li>
                      <li>We reserve the right to remove suspicious confirmations</li>
                      <li>Work confirmations contribute to your public trust profile</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      7. Dispute Resolution
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      AmrAstha provides dispute resolution services to help resolve conflicts between parties. Our dispute resolution process includes:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>Evidence submission from both parties</li>
                      <li>Review by AmrAstha team members</li>
                      <li>Fair and impartial decision-making</li>
                      <li>Privacy-protected resolution without public shaming</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      8. Prohibited Conduct
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      You agree not to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>Provide false or misleading information</li>
                      <li>Create multiple accounts</li>
                      <li>Use another person's identity</li>
                      <li>Attempt to manipulate trust scores</li>
                      <li>Engage in fraudulent activities</li>
                      <li>Harass or threaten other users</li>
                      <li>Use the platform for illegal purposes</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      9. Termination
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We reserve the right to suspend or terminate your account for:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>Violation of these Terms of Service</li>
                      <li>Fraudulent or illegal activities</li>
                      <li>Harm to other users or the platform</li>
                      <li>Failure to complete identity verification</li>
                      <li>At our discretion for any reason</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      10. Limitation of Liability
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      AmrAstha provides trust and reputation information, but users are ultimately responsible for their own decisions. We are not responsible for:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      <li>Transactions between users</li>
                      <li>Quality of goods or services</li>
                      <li>Disputes between parties</li>
                      <li>Financial losses or damages</li>
                      <li>Indirect or consequential damages</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      11. Changes to Terms
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We may update these Terms of Service from time to time. We will notify you of any material changes by posting the new terms on this page and updating the "Last updated" date. Your continued use of the service after changes constitutes acceptance of the new terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      12. Governing Law
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      These Terms of Service are governed by and construed in accordance with the laws of Bangladesh. Any disputes shall be resolved in the courts of Bangladesh.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      13. Contact Information
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      If you have questions about these Terms of Service, please contact us at:
                    </p>
                    <ul className="list-none text-gray-700 dark:text-gray-300 space-y-2">
                      <li>Email: <a href="mailto:legal@amrastha.com" className="text-primary-600 dark:text-primary-400 hover:underline">legal@amrastha.com</a></li>
                      <li>Address: Dhaka, Bangladesh</li>
                    </ul>
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