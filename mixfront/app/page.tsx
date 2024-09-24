import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FeatureSection from "@/components/home-page/FeatureSection"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background lines */}
      <div className="absolute inset-0 flex justify-around pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-px bg-white/5 h-full" />
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col justify-around pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-px bg-white/5 w-full" />
        ))}
      </div>

      <header className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center border-x-4  border-white/10 rounded-full px-6 py-1">
          <Link href="/" className="text-xl sm:text-2xl font-bold">
            MixSplit
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/pricing" className="hover:text-blue-400">Pricing</Link>
            <Link href="/support" className="hover:text-blue-400">Support</Link>
            <Link href="/changelog" className="hover:text-blue-400">Changelog</Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="hidden md:inline-flex text-black">
              Sign Up
            </Button>
            <Button variant="default">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-400 mb-4">ACRCloud</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Convert Your Mix into Songs 
          </h1>
          <p className="text-gray-400 mb-8">
            MixSplit enables you to convert your SoundCloud Mix or Youtube Mix into individual songs WITHOUT having to Shazam each song individually.
          </p>
          <div className="flex justify-center ">
            <Button variant="default" className="px-6">
              Try Now
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gray-900 rounded-lg p-4 max-w-4xl mx-auto">
            <Image
              src="/placeholder.svg"
              alt="Rapidlaunch Dashboard"
              width={800}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        <FeatureSection />
      </main>
    </div>
  )
}