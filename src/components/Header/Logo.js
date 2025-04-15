import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-light">
      <span className="font-bold text-xl md:text-2xl">Beyond the Arc</span>
    </Link>
  )
}

export default Logo