import Header from '../components/Header';
import ComingSoon from '../components/ComingSoon';

export default function page() {
  return (
    // Main container for the page
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-violet-50 py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Header title={'Object Oriented Programming'} subtitle={'Learn more about OOP and design patterns'}/>
        {/* Content container */}
        <ComingSoon subtitle={`I'm currently working on creating a code editing environment for practicing OOP. Check back soon for practice problems!`}/>
    </div>
  )
}
