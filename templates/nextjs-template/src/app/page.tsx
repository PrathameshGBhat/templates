import Image from 'next/image'
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <div>
      <h1>Next.js Template</h1>
      <Image src="/logo.svg" alt="Vercel Logo" width={72} height={16} />
      <Button>Button</Button>
    </div>
  )
}
