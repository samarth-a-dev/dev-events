'use client'

import Link from "next/link"
import Image from "next/image"
import posthog from "posthog-js"

const Navbar = () => {
  const handleNavigationClick = (destination: string) => {
    if (
      process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      posthog.capture('navigation_link_clicked', {
        destination,
      })
    }
  }

  return (
    <header>
        <nav>
            <Link href="/" className="logo" onClick={() => handleNavigationClick('home')}>
                <Image src="/icons/logo.png" alt="logo" width={24} height={24} />

                <p>DevEvent</p>
            </Link>

            <ul>
                <Link href="/" onClick={() => handleNavigationClick('home')}>Home</Link>
                <Link href="/about" onClick={() => handleNavigationClick('events')}>Events</Link>
                <Link href="/contact" onClick={() => handleNavigationClick('create_event')}>Create Event</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar