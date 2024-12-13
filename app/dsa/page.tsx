import ComingSoon from 'app/components/ComingSoon'
import Header from 'app/components/Header'

export default function page() {
  return (
    // Main container for the page
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-violet-50 py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Header title={'Data Structures & Algorithms'} subtitle={'Learn about algorithms and data structures'}/>
        {/* Content container */}
        <ComingSoon/>
    </div>
  )
}
