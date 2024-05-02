import BookList from "@/components/BookList";
import { Suspense } from "react";
import Loading from "@/components/Loading";

const Home = async () => {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-5xl font-bold mb-10">Welcome to eLibrary</h1>
      <Suspense fallback={<Loading />}>
        <BookList />
      </Suspense>
    </div>
  );
};

export default Home;
