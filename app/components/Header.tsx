interface HeaderProps {
    title: string;
    subtitle: string;
}

export default function Header({title, subtitle}: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-12">
    <div>
      {/* Title and subtitle */}
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
        {title}
      </h1>
      <p className="mt-3 text-lg text-slate-600">
        {subtitle}
      </p>
    </div>
  </div>
  )
}
