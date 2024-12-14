import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
        <div className="flex items-center gap-2 h-16">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Learn2Code
            </span>
          </Link>
        </div>
    </header>
  )
}
