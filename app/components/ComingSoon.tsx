interface ComingSoonProps {
    subtitle: string;
}

export default function ComingSoon({subtitle}: ComingSoonProps) {
  return (
    <div className='bg-white shadow-md rounded-lg p-8 border border-violet-100'>
        <h2 className='text-2xl font-bold text-slate-800 mb-4'>Coming Soon</h2>
        <p className='text-slate-600'>{subtitle}</p>
    </div>
  )
}
