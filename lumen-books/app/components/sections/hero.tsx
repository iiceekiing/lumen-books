import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mx-4 mt-6 overflow-hidden rounded-3xl sm:mx-6 lg:mx-10">
      <Image
        src="/assets/heroBg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative flex flex-col-reverse items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:flex-row lg:gap-16">
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

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
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
