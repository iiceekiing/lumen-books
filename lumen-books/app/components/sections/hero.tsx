import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mt-6 overflow-hidden">
      <Image
        src="/assets/heroBg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:gap-16 lg:px-10">
        <Image
          src="/assets/heroImage.jpeg"
          alt="A book floating between rows of shelves in a library"
          width={300}
          height={450}
          className="w-56 shrink-0 rounded-2xl object-cover shadow-2xl sm:w-72"
        />

        <div className="max-w-xl text-center lg:text-left">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Featured Collection
          </span>
          <h1 className="mt-3 text-4xl font-extrabold text-black sm:text-5xl">
            Stories That <span className="text-indigo-600">Stay</span> With
            You
          </h1>
          <p className="mt-4 text-base text-gray-700 sm:text-lg">
            From timeless classics to the latest bestsellers, find your next
            great read at Lumen Books — curated by readers, for readers.
          </p>

          <form
            action="/books"
            method="GET"
            className="mx-auto mt-6 flex max-w-md lg:mx-0"
          >
            <input
              type="text"
              name="search"
              placeholder="Search by title or author..."
              className="flex-1 rounded-l-full border border-gray-300 bg-white px-5 py-3 text-sm text-black outline-none"
            />
            <button
              type="submit"
              className="rounded-r-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Search
            </button>
          </form>

          <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="/books"
              className="rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Browse Books
            </Link>
            <Link
              href="/become-an-author"
              className="rounded-full border-2 border-black px-7 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Become An Author
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
