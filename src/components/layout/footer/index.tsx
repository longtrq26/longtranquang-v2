'use client'

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="fixed bottom-0 z-50 flex w-full items-center justify-between p-[0.75rem] mix-blend-difference sm:p-[1rem]">
        {/* copyright */}
        <p className="font-clashDisplay text-[0.875rem] text-primary-foreground sm:text-[1rem]">
          © {new Date().getFullYear()} ltrq. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
