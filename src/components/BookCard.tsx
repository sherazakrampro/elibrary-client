import { Book } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex gap-5 border p-5 shadow-md rounded">
      <Image src={book.coverImage} alt={book.title} width={200} height={200} />
      <div>
        <h2 className="line-clamp-2 text-xl font-bold text-slate-900 text-balance">
          {book.title}
        </h2>
        <p className="font-bold text-slate-900 mt-1">
          {book.author?.name ?? "Unknown author"}
        </p>
        <Link
          href={`/books/${book._id}`}
          className="py-1 px-2 rounded border border-slate-500 mt-4 inline-block text-slate-900 font-medium text-sm
                    hover:border-primary-100 hover:bg-slate-100 transition"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
