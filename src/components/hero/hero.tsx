import { NewsletterForm } from '@/components/newsletter-form'
import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'
import emailjs from 'emailjs-com'

type ScrollRevealRefElement = HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement

function Hero({
  className,
  content,
  illustration,
  title,
}: {
  className?: string
  content: string
  illustration?: ReactNode
  title: string
}) {
  const scrollRevealRef = useRef<ScrollRevealRefElement[]>([])

  useEffect(() => {
    if (scrollRevealRef.current.length > 0) {
      scrollRevealRef.current.map((ref) =>
        ScrollReveal().reveal(ref, {
          duration: 1000,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'top',
          interval: 150,
        }),
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

  function onNewsletterSubmit(values: any) {
    return new Promise((resolve) => {
      const templateParams = {
        to_name: 'Riddhi',
        from_name: values,
        message: 'Entered their contact details',
      }

      emailjs
        .send(
          'service_offfs8q', // Replace with your EmailJS service ID
          'template_2lfuksl', // Replace with your EmailJS template ID
          templateParams,
          'VqiQkdkQJvXKIAKqq', // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text)
          },
          (err) => {
            console.error('FAILED...', err)
          },
        )
      setTimeout(() => {
        resolve({ values })
      }, 1000)
    })
  }

  const addToScrollRevealRef = (el: ScrollRevealRefElement) => {
    scrollRevealRef.current.push(el)
  }

  return (
    <section className={cn('text-center lg:w-full lg:py-20 lg:text-left', className)}>
      <div className="hero mx-auto w-full max-w-6xl px-6">
        <div className="hero-inner relative lg:flex">
          <div className="hero-copy pb-16 pt-10 lg:min-w-[40rem] lg:pr-20 lg:pt-16">
            <div className="mx-auto w-full max-w-3xl">
              <h1
                className="mb-4 mt-0 text-4xl font-bold text-black md:text-5xl"
                ref={addToScrollRevealRef}
              >
                {title}
              </h1>
              <p className="prose prose-xl m-auto text-gray-500" ref={addToScrollRevealRef}>
                {content}
              </p>
            </div>

            <div ref={addToScrollRevealRef}>
              <NewsletterForm
                className="mx-auto mt-8 max-w-md lg:mx-0"
                submitText="Get early access"
                onSubmit={onNewsletterSubmit}
              />
            </div>
          </div>

          {!!illustration && (
            <div className="relative -mx-6 py-10 lg:mx-0 lg:p-0">{illustration}</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
