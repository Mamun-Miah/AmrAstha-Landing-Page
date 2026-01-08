import { ReactNode } from 'react'

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
  cols?: 2 | 3 | 4
}

export default function FeatureGrid({ features, cols = 3 }: FeatureGridProps) {
  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <div className={`grid ${gridClasses[cols]} gap-8`}>
      {features.map((feature, index) => (
        <div key={index} className="card hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-4">
            <div className="text-primary-600 dark:text-primary-400">
              {feature.icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}