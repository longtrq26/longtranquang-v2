'use client'

import ICCopyright from '@/components/icons/ICCopyright'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type SocialItem = {
  label: string
  href: string
}

const SOCIAL_ITEMS: SocialItem[] = [
  { label: 'Linkedin', href: '/linkedin' },
  { label: 'Github', href: '/github' },
]

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="fixed bottom-0 z-50 flex w-full items-center justify-between p-[0.75rem] mix-blend-difference sm:p-[1rem]">
        {/* copyright */}
        <div className="flex w-full items-center gap-[0.25rem]">
          <ICCopyright className="size-[0.75rem] fill-primary-foreground" />
          <p className="caption no-select text-primary-foreground">
            {new Date().getFullYear()} long tran quang
          </p>
        </div>

        {/* socials */}
        <div className="flex items-center justify-between gap-[1rem] sm:gap-[2rem]">
          {SOCIAL_ITEMS.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'caption relative block text-center text-primary-foreground will-change-transform',
                  // Base cho underline: pseudo-element ẩn ban đầu
                  "after:absolute after:bottom-0 after:left-0 after:h-[0.04rem] after:w-0 after:bg-primary-foreground after:transition-all after:duration-700 after:ease-out after:content-['']",
                  // Hover: chạy từ trái sang phải
                  'hover:after:w-full',
                )}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
