import BookList from "@/components/BookList";

const Home = async () => {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-10">Welcome to eLibrary</h1>
      <BookList />
    </div>
  );
};

export default Home;
