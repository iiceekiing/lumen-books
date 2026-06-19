import Link from "next/link";
import { getBestsellers } from "@/lib/data";
import BookCard from "../ui/book-cards";

export default async function BestSellers() {
  const books = await getBestsellers();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
      <h2 className="text-center text-3xl font-extrabold text-black">
        Best Seller Books
      </h2>

      <div className="mt-10 flex items-center gap-6">
        <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-4">
          {books.map((book) => {
            const percentOff = book.originalPrice
              ? Math.round((1 - book.price / book.originalPrice) * 100)
              : 10;

            return (
              <BookCard
                key={book.id}
                book={book}
                badge={`${percentOff}% OFF`}
              />
            );
          })}
        </div>

        <Link
          href="/books"
          className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-green-500 text-xl text-green-600 transition hover:bg-green-500 hover:text-white sm:flex"
        >
          →
        </Link>
      </div>
    </section>
  );
}
