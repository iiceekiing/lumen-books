import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.jpeg"
            alt="Lumen Books logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-lg font-bold">Lumen Books</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contacts">Contact Us</Link>
          <Link href="/books">Books</Link>
        </div>
      </div>

      <div className="border-t border-gray-100 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lumen Books. All rights reserved.
      </div>
    </footer>
  );
}
