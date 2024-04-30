import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-slate-800">
      <nav className="flex items-center justify-between py-4 text-white max-w-6xl mx-auto">
        <div>
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.png" alt="logo" height={50} width={50} />
            <span className="font-bold text-3xl text-[#0096E1]">e-Library</span>
          </Link>
        </div>

        <div>right</div>
      </nav>
    </div>
  );
};

export default Navbar;