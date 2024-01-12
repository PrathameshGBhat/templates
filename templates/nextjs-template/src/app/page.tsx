import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LoginButton } from "@/components/auth/login-button"

export default function Home() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#f0f0f0]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tighter text-center md:text-6xl xl:text-7xl">
              Welcome to Our Amazing Platform
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-center mx-auto">
              Discover a world of possibilities with our state-of-the-art tools and features. Join us and start
              innovating today!
            </p>
          </div>
          <div className="w-full max-w-lg mx-auto space-y-2">
            <LoginButton>
              <Button className="w-full" type="submit">
                Sign Up
              </Button>
            </LoginButton>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              By signing up, you agree to our
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

