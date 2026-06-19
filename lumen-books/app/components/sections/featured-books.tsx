import { getBooks } from "@/lib/data";
import BookCard from "../ui/book-cards";

export default async function FeaturedBooks() {
  const books = await getBooks();
  const featured = Array.from(
    { length: 12 },
    (_, i) => books[i % books.length],
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Featured Books
      </h2>

      <div className="mt-4 flex justify-center gap-6 text-sm font-medium text-white sm:mt-6">
        <span className="border-b-2 border-black pb-1 text-green-500">
          Featured
        </span>
        <span>On Sale</span>
        <span>Most Viewed</span>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {featured.map((book, i) => (
          <BookCard key={`${book.id}-${i}`} book={book} showFormat />
        ))}
      </div>
    </section>
  );
}
