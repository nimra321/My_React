function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 shadow-sm bg-white">
      
      {/* Logo */}
      <img src="/assets/furniroLogo.png" className="h-[41px] w-auto object-contain" />

      {/* Menu */}
      <ul className="flex gap-[75px] text-gray-700 font-medium list-none m-0 p-0 text-[16px] font-poppins">
        <li className="cursor-pointer hover:text-[#B88E2F]">Home</li>
        <li className="cursor-pointer hover:text-[#B88E2F]">Shop</li>
        <li className="cursor-pointer hover:text-[#B88E2F]">About</li>
        <li className="cursor-pointer hover:text-[#B88E2F]">Contact</li>
      </ul>

      {/* Icons */}
      <div className="flex gap-5 items-center">
        <img src="/assets/icons/user.png" className="w-7 h-7 cursor-pointer" />
        <img src="/assets/icons/search.png" className="w-7 h-7 cursor-pointer" />
        <img src="/assets/icons/heart.png" className="w-7 h-7 cursor-pointer" />
        <img src="/assets/icons/shopping-cart.png" className="w-7 h-7 cursor-pointer" />
      </div>

    </div>
  )
}

export default Navbar