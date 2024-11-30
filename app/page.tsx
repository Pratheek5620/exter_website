import { Button } from "@/components/ui/button";
import { Zap, Leaf, MapPin } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#locations">
            Locations
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

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
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

        <section id="about" className="w-full py-12 md:py-24 lg:py-10 bg-green-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">What we stand for</h2>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <Image
                src="/exter_exit-enter.png"
                alt="Battery Charging"
                width={550}
                height={550}
                className="rounded-lg"
              />
              <div className="flex flex-col space-y-4">
                <p className="text-lg">
                  In the journey toward a sustainable future, Exter stands as a pioneer in revolutionizing urban mobility. The name itself encapsulates our mission: Exit Emission symbolizes a decisive move away from fossil-fuel dependence and harmful carbon footprints. Enter Electric marks our commitment to embracing clean, green, and electric energy solutions.
                </p>
                <p className="text-lg">
                  At Exter, we specialize in battery-swapping solutions tailored for two-wheelers. Our innovative approach caters to the growing needs of delivery partners and eco-conscious individuals, providing a seamless experience for those who choose to prioritize sustainability without compromising efficiency.
                </p>
                <p className="text-lg">
                  With every swap, we're not just fueling vehicles; we're fueling a movement—one that aims to redefine transportation for a greener planet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">How It Works</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">1</div>
                <h3 className="text-xl font-bold">Locate</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Find the nearest Exter battery-swapping hub using our mobile app.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">2</div>
                <h3 className="text-xl font-bold">Swap</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Drive in, and our automated system will swap your battery in minutes.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">3</div>
                <h3 className="text-xl font-bold">Go</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">With a fully charged battery, you're ready to hit the road again.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 text-black bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Experience Battery-Swapping?</h2>
              </div>
              <div className="space-x-4">
                <Button variant="secondary">Sign Up Now</Button>
                <Button variant="outline">Contact Us</Button>
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
