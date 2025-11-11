import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import ReactLenis from 'lenis/react'
import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis root>
      <div className="flex min-h-screen w-full flex-col overflow-hidden">
        <Header />
        <main className="flex flex-1 items-center justify-center">{children}</main>
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default RootLayout
