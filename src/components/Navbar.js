import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black/90 backdrop-filter backdrop-blur-lg bg-opacity-60 w-full fixed top-0 z-50 shadow-lg border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="text-white font-bold text-xl hover:text-gray-300 transition duration-300 ease-in-out">
            Emre Gunner
          </Link>
          <div className="flex items-center space-x-5">
            <Link href="/portfolio/index.html" className="text-gray-200 hover:text-white transition duration-300 ease-in-out" target='_blank'>
              Portfolio
            </Link>
            <Link href="/about" className="text-gray-200 hover:text-white transition duration-300 ease-in-out" target='_blank'>
              Book A Call
            </Link>
          </div>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
