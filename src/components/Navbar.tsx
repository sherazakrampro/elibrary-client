import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-slate-800 shadow-lg">
      <nav className="flex items-center justify-between py-4 text-white max-w-6xl mx-auto">
        <div>
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.png" alt="logo" height={50} width={50} />
            <span className="font-bold text-3xl text-[#0096E1]">eLibrary</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="border border-[#0087e1] px-3 py-2 rounded-lg font-medium hover:bg-[#0096E1]">
            Sign in
          </button>
          <button className="bg-[#0096E1] px-3 py-2 rounded-lg font-medium hover:bg-[#007ce1]">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
