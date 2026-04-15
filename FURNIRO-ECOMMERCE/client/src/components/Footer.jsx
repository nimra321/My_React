function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-16 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-black mb-4">
            Furniro.
          </h2>
          <p className="text-sm leading-6">
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-black mb-4">Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer hover:text-black">
              <a href="/">Home</a>
            </li>
            <li className="cursor-pointer hover:text-black">
              <a href="/shop">Shop</a>
            </li>
            <li className="cursor-pointer hover:text-black">
                <a href="/about">About</a>
            </li>
            <li className="cursor-pointer hover:text-black">
                <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-black mb-4">Help</h3>
          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer hover:text-black">Payment Options</li>
            <li className="cursor-pointer hover:text-black">Returns</li>
            <li className="cursor-pointer hover:text-black">Privacy Policies</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-black mb-4">Newsletter</h3>

          <div className="flex items-center pb-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent outline-none text-sm flex-1  border-b border-gray-400"
            />
            <button className="text-black text-sm font-semibold ml-3">
              SUBSCRIBE
            </button>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-300 mt-12"></div>

      <div className="text-left text-sm py-6">
        2026 Furniro. All rights reserved
      </div>

    </footer>
  );
}

export default Footer;