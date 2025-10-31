export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-[1400px] mx-auto px-6 md:px-6 lg:px-6 py-6 flex flex-col md:flex-row items-center justify-between border-t border-gray-800">

        {/* Logo */}
        <h2 className="text-3xl font-extrabold uppercase tracking-wider mb-4 md:mb-0 text-yellow-400"> BITCOIN
        </h2>

        {/* Tagline */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} MemeCoins. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
