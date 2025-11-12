'use client'

import { cn } from '@/lib/utils'
import gsap from 'gsap'
import Link from 'next/link'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

type MenuItem = {
  label: string
  href: string
}

const MENU_ITEMS: MenuItem[] = [
  { label: 'Work', href: '/' },
  { label: 'About', href: '/about' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)
  const menuItemRefs = useRef<(HTMLDivElement | null)[]>([])
  const timeline = useRef<GSAPTimeline | null>(null)

  // Initialize GSAP timeline
  useLayoutEffect(() => {
    if (!menuRef.current) return

    const menuElement = menuRef.current
    const menuItems = menuItemRefs.current

    // Set initial state
    gsap.set(menuElement, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    })
    gsap.set(menuItems, { y: 100, opacity: 0 })

    // Create and configure timeline
    const menuTimeline = gsap
      .timeline({ paused: true })
      .to(menuElement, {
        duration: 0.8,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'power4.inOut',
      })
      .to(
        menuItems,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'expo.out',
        },
        '-=0.5',
      )

    timeline.current = menuTimeline

    return () => {
      menuTimeline.kill()
    }
  }, [])

  // Toggle menu animation
  useEffect(() => {
    const playAnimation = async () => {
      if (!timeline.current) return

      if (isMenuOpen) {
        timeline.current.play()
      } else {
        timeline.current.reverse()
      }
    }

    playAnimation()
  }, [isMenuOpen])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <header className="w-full">
      <div className="fixed z-50 flex w-full items-center justify-between p-[0.75rem] mix-blend-difference sm:p-[1rem]">
        {/* logo */}
        <Link href="/" className="paragraph-accent text-primary-foreground">
          ltrq<span className="text-[#43E4DE]">.</span> {/* original color #BC1B21 */}
        </Link>

        {/* menu toggle */}
        <button
          onClick={toggleMenu}
          className={cn(
            'relative flex cursor-pointer items-center justify-center bg-transparent p-[0.75rem] sm:p-[1rem]',
            'before:absolute before:h-[0.08rem] before:w-[1.5rem] before:bg-primary-foreground before:transition-all before:duration-1000 before:content-[""] before:sm:h-[0.1rem] before:sm:w-[2rem]',
            'after:absolute after:h-[0.08rem] after:w-[1.5rem] after:bg-primary-foreground after:transition-all after:duration-1000 after:content-[""] after:sm:h-[0.1rem] after:sm:w-[2rem]',
            isMenuOpen
              ? 'before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45'
              : 'before:translate-y-[-0.15rem] after:translate-y-[0.15rem] before:sm:translate-y-[-0.25rem] after:sm:translate-y-[0.25rem]',
          )}
        />
      </div>

      {/* menu */}
      <div
        ref={menuRef}
        className="fixed left-0 top-0 flex h-screen w-full overflow-hidden bg-popover-foreground will-change-transform"
      >
        <nav className="fixed left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-[1rem] sm:gap-[2rem]">
          {MENU_ITEMS.map((item, index) => (
            <div
              key={item.href}
              ref={(el) => {
                menuItemRefs.current[index] = el
              }}
              className="flex cursor-pointer overflow-hidden"
            >
              <Link
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  'paragraph-link relative block text-center uppercase text-primary-foreground will-change-transform',
                  // Base cho underline: pseudo-element ẩn ban đầu
                  "after:absolute after:bottom-0 after:left-0 after:h-[0.08rem] after:w-0 after:bg-primary-foreground after:transition-all after:duration-700 after:ease-out after:content-['']",
                  // Hover: chạy từ trái sang phải
                  'hover:after:w-full',
                )}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
