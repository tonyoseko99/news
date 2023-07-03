import Image from 'next/image'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Navbar />
      welcome to the main page
    </main>
  )
}
