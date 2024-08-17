import { Menu } from '@/components/menu'
import { SocialLinks } from '@/components/social-links'

function Footer() {
  return (
    <footer className="bg-primary-400 py-6 text-sm leading-5 tracking-normal text-black lg:bg-transparent lg:text-gray-400">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative items-center gap-6">
          <nav className="">
            <SocialLinks className="flex gap-4" />
            {/* <Menu className="flex gap-4" /> */}
          </nav>
          <div className="pt-4">&copy; Wrapped Happiness</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
