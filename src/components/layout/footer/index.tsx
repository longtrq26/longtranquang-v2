'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="fixed bottom-0 z-50 flex w-full items-center justify-between p-[0.75rem] mix-blend-difference sm:p-[1rem]">
        {/* copyright */}
        <p className="paragraph-14 text-primary-foreground">© {new Date().getFullYear()} ltrq.</p>

        {/* socials */}
        <div className="flex items-center justify-between gap-[1rem] sm:gap-[2rem]">
          <Link
            href={'#'}
            className={cn(
              'paragraph-14 relative block text-center uppercase text-primary-foreground will-change-transform',
              // Base cho underline: pseudo-element ẩn ban đầu
              "after:absolute after:bottom-0 after:left-0 after:h-[0.08rem] after:w-0 after:bg-primary-foreground after:transition-all after:duration-700 after:ease-out after:content-['']",
              // Hover: chạy từ trái sang phải
              'hover:after:w-full',
            )}
          >
            Linkedin
          </Link>

          <Link
            href={'#'}
            className={cn(
              'paragraph-14 relative block text-center uppercase text-primary-foreground will-change-transform',
              // Base cho underline: pseudo-element ẩn ban đầu
              "after:absolute after:bottom-0 after:left-0 after:h-[0.08rem] after:w-0 after:bg-primary-foreground after:transition-all after:duration-700 after:ease-out after:content-['']",
              // Hover: chạy từ trái sang phải
              'hover:after:w-full',
            )}
          >
            github
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
