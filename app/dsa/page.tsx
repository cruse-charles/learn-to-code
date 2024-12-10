import ComingSoon from 'app/components/ComingSoon'
import SubHeader from 'app/components/headers/SubHeader'

export default function page() {
  return (
    // Main container for the page
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-violet-50 py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SubHeader title={'Data Structures & Algorithms'} subtitle={'Learn about algorithms and data structures'}/>
        {/* Content container */}
        <ComingSoon subtitle={`I'm currently working on creating a code editing environment for practicing data structures and algorithms. Check back soon for practice problems!`}/>
    </div>
  )
}
