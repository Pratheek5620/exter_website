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
            Why Choose exter
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact-us">
            Contact Us
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full h-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/exter-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Power the Future of Mobility</h1>
              <p className="text-xl md:text-2xl mb-8">Battery swapping for electric two-wheelers, compatible with 80+ models of electric scooters</p>
              <div className="space-x-4">
                <a href="https://www.linkedin.com/company/exterapp/posts/?feedView=all">
                  <Button
                    variant="outline"
                    className="text-white border-[#334DA0] text-[#334DA0] hover:text-black hover:bg-white hover:border-[#334DA0] transition-colors duration-300"
                  >
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="what-we-believe-in" className="w-full py-12 md:py-24 lg:py-32 bg-green-500 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">What we believe in?</h2>
            <Carousel className="max-w-4xl mx-auto" opts={{ loop: true }} setApi={setApi}>
              <CarouselContent>
                {[
                  {
                    title: "Sustainable Mobility",
                    content: "Battery swapping technology is a process where electric vehicle (EV) batteries can be quickly and easily swapped out for fully charged ones at battery swapping stations. This technology has several benefits and can play a significant role in reducing carbon emissions. So what’s all about carbon footprint and carbon emissions. You may be aware of carbon emissions or the CO2 emissions. The measure of these emissions released into the atmosphere is carbon footprint.",
                    image: "/exter_battery_benefit.png"
                  },
                  {
                    title: "🔋 Time to Swap: The EV Fueling Revolution ⏳",
                    content: "Electric vehicles (EVs) are on the rise, promising a cleaner, more sustainable future for transportation. However, one persistent challenge has been the time it takes to recharge EV batteries compared to refueling a ICE Vehicle. This is where battery swapping comes into play, offering a groundbreaking solution to save you valuable time while driving an EV.",
                    image: "/exter_time_swap.png"
                  },
                  {
                    title: "Empowering Change",
                    content: "The electric vehicle (EV) revolution is in full swing, and businesses are increasingly opting for electric fleets to boost efficiency and sustainability. While charging infrastructure is steadily expanding, traditional charging methods can still hinder fleet operations due to lengthy charging times and range anxiety. This is where battery swapping emerges as a powerful alternative, offering significant advantages for EV fleets.",
                    image: "/exter_battery_swapp-machine.png"
                  }
                ].map((item, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-white rounded-lg shadow-lg h-full">
                      <CardContent className="p-6 flex flex-col md:flex-row items-center md:items-start gap-4">
                        <div className="w-full md:w-1/3 flex justify-center">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={700}
                            height={500}
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
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Why Choose exter?</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
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
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Ready to Experience exter?</h2>
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t bg-[#334DA0] text-white">
        <div className="items-center justify-between w-full">
          <p className="text-center justify-center text-xs text-gray-200">© 2024 Exter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
