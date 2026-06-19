import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white text-black">
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 py-5 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.jpeg"
            alt="Lumen Books logo"
            width={88}
            height={88}
            className="rounded"
          />
          <span className="text-xl sm:text-2xl font-bold">Lumen Books</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 text-base sm:text-lg font-medium">
          <Link href="/" className="hidden md:block">
            Home
          </Link>
          <Link href="/about" className="hidden sm:block">
            About
          </Link>
          <Link href="/contacts">Contact Us</Link>
          <Link href="/books">Books</Link>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-200" />
        </div>
      </div>
    </header>
  );
}