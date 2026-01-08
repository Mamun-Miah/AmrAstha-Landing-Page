import Link from 'next/link'

interface CTASectionProps {
  title: string
  subtitle: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

export default function CTASection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA
}: CTASectionProps) {
  return (
    <section className="section bg-primary-50 dark:bg-primary-950/20">
      <div className="container text-center">
        <h2 className="section-title text-balance">
          {title}
        </h2>
        <p className="section-subtitle text-balance">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link href={primaryCTA.href} className="btn btn-primary">
            {primaryCTA.text}
          </Link>
          {secondaryCTA && (
            <Link href={secondaryCTA.href} className="btn btn-outline">
              {secondaryCTA.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}