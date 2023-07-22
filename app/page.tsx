import CurrentCard from '@/components/CurrentCard'
import DetailCard from '@/components/DetailCard'
import Search from '@/components/Search'
import Sidebar from '@/components/Sidebar'
import TodayCard from '@/components/TodayCard'
import WeekCard from '@/components/WeekCard'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen w-screen flex ">
      <Sidebar />
      {/* Main */}
      <div className="w-4/6 py-4">
        <Search />
        <CurrentCard />
        {/*  */}
        <TodayCard />
        {/* Box Detail */}
        <DetailCard />
      </div>
      {/* right side  */}
      <WeekCard />
    </div>
  )
}
