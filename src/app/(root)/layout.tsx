import ReactLenis from 'lenis/react'
import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>
}

export default RootLayout
