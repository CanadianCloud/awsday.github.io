'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Ensures hash links scroll the target into view after navigation (including
 * client-side). Works with `scroll-padding-top` on `html` so the sticky header
 * does not cover section titles.
 */
export function ScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1)
      if (!hash) return
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    scrollToHash()
    const t = window.setTimeout(scrollToHash, 100)

    window.addEventListener('hashchange', scrollToHash)
    return () => {
      window.clearTimeout(t)
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [pathname])

  return null
}
