import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Coming Soon!"
        content="Unwrap the magic of gifting with us!"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
