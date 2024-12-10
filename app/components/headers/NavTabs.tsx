'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavTabs() {
    const pathname = usePathname()

    const navItems = [
        {name: "Home", href: "/"},
        {name: "Flashcards", href: "/flashcards"},
        {name: "DSA", href: "/dsa"},
        {name: "OOP", href: "/oop"}
    ]

    return (
    <nav className="container border-b border-gray-200">
      <div className="flex h-12 items-center space-x-4 text-sm font-medium pl-5">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`
              "transition-colors hover:text-gray-800",
              ${pathname === item.href ? "border-b-2 border-violet-600 text-gray-900" : "text-gray-600"}
            `}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
