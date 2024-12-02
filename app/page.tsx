"use client"
import { Button } from "@/components/ui/button"
import { Zap, Leaf, MapPin } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      // Handle carousel selection if needed
    })
  }, [api])

  useEffect(() => {
    if (!api) {
      return
    }

    const intervalId = setInterval(() => {
      api.scrollNext()
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(intervalId)
  }, [api])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-[#334DA0] text-white">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/exter_name-logo.png"
            alt="Exter Logo"
            width={150}
            height={150}
            className="mr-2"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#what-we-believe-in">
            What We Believe In
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#why-choose-exter">
            Why Choose Exter
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact-us">
            Contact Us
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Power the Future of Mobility
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Experience the future of electric mobility with our instant battery-swapping technology. Get back on the road in minutes.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Find Nearest Station</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="what-we-believe-in" className="w-full py-12 md:py-24 lg:py-32 bg-green-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-black">What we believe in?</h2>
            <Carousel className="max-w-4xl mx-auto" opts={{ loop: true }} setApi={setApi}>
              <CarouselContent>
                {[
                  {
                    title: "Sustainable Mobility",
                    content: "At Exter, we're committed to revolutionizing urban mobility. Our mission is to provide sustainable, efficient, and accessible transportation solutions that reduce carbon emissions and promote a cleaner environment.",
                    image: "/exter_exit-enter.png"
                  },
                  {
                    title: "Innovative Technology",
                    content: "We specialize in cutting-edge battery-swapping solutions for two-wheelers. Our innovative approach ensures that eco-conscious individuals and delivery partners can enjoy seamless, uninterrupted journeys without compromising on efficiency.",
                    image: "/exter_battery_swapp-machine.png"
                  },
                  {
                    title: "Empowering Change",
                    content: "With every battery swap, we're not just powering vehicles; we're fueling a movement. Exter is dedicated to redefining transportation for a greener planet, one swap at a time. Join us in shaping a sustainable future for all.",
                    image: "/exter_logo.png",
                  }
                ].map((item, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-white rounded-lg shadow-lg h-full">
                      <CardContent className="p-6 flex flex-col md:flex-row items-center md:items-start gap-4">
                        <div className="w-full md:w-1/3 flex justify-center">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={300}
                            height={300}
                            className="rounded-lg object-cover"
                            style={{ maxWidth: '100%', height: 'auto' }}
                          />
                        </div>
                        <div className="w-full md:w-2/3">
                          <h3 className="text-2xl font-bold mb-4 text-green-500">{item.title}</h3>
                          <p className="text-gray-700">{item.content}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section id="why-choose-exter" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Why Choose Exter?</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Zap className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-bold">Lightning Fast</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Swap your battery in less than 5 minutes and get back on the road.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Leaf className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-bold">Eco-Friendly</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Reduce your carbon footprint with our sustainable energy solutions.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <MapPin className="h-8 w-8 text-red-500" />
                <h3 className="text-xl font-bold">Convenient Locations</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Find our swapping stations at easily accessible locations across the city.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-us" className="w-full py-12 md:py-24 lg:py-32 text-black bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Experience Exter?</h2>
                <h4 className="text-l font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h4>
              </div>
              <div className="space-x-4">
                <p>
                  <a
                    href="https://maps.app.goo.gl/vmQatQNuUbiPAL6G7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    1983, S End D Cross Rd, KSRTC Layout, Jayanagara 9th Block, J. P. Nagar, Bengaluru, Karnataka 560078
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#334DA0] text-white">
        <div className="items-center justify-between w-full">
          <p className="text-center justify-center text-xs text-gray-200">© 2024 Exter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
