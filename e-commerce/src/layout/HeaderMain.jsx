import { ChevronDown, ChevronUp, Heart, Search, ShoppingCart, User, UserPlus, X } from "lucide-react";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function HeaderMain() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isShopOpen, setShopOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen((prev) => !prev);
    }
    const closeAll = () => {
        setMenuOpen(false);
        setShopOpen(false);
    };
    return (
        <div className="w-full px-9 py-6">
            <div className="flex flex-col nav:flex-row justify-center nav:justify-between items-center gap-17 nav:gap-0">
                <div className="flex justify-between items-center w-full nav:w-auto">
                    <h2 className="text-2xl text-[#252B42]">Bandage</h2>
                    <div className="nav:hidden">
                        {!isMenuOpen
                            ? < BiMenuAltRight onClick={handleClick} className="w-6 h-6 cursor-pointer" />
                            : <X onClick={handleClick} className="w-6 h-6 cursor-pointer" />}
                    </div>
                </div>
                <nav className={`${isMenuOpen ? "flex" : "hidden"} nav:flex flex-col nav:flex-row justify-center items-center gap-7`}>
                    <Link
                        to="/"
                        className="inline-block text-3xl nav:text-sm text-[#737373] font-normal nav:font-bold transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#252B42]"
                        onClick={closeAll}
                    >Home</Link>
                    <button onClick={() => setShopOpen((prev) => !prev)} className="flex items-center gap-1 cursor-pointer">
                        <span className="inline-block text-3xl nav:text-sm text-[#737373] font-normal nav:font-bold transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#252B42]">Shop</span>
                        {isShopOpen ? <ChevronUp className="w-4 h-4 text-[#737373] " /> : <ChevronDown className="w-4 h-4 text-[#737373] " />}
                    </button>
                    <Link
                        to="/about"
                        className="inline-block text-3xl nav:text-sm text-[#737373] font-normal nav:font-bold transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#252B42]"
                        onClick={closeAll}
                    >About</Link>
                    <Link
                        to="/blog"
                        className="inline-block text-3xl nav:text-sm text-[#737373] font-normal nav:font-bold transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#252B42]"
                        onClick={closeAll}
                    >Blog</Link>
                    <Link
                        to="/contact"
                        className="inline-block text-3xl nav:text-sm text-[#737373] font-normal  nav:font-bold transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#252B42]"
                        onClick={closeAll}
                    >Contact</Link>
                </nav>
                <div className={`${isMenuOpen ? "flex" : "hidden"} nav:flex  flex-col nav:flex-row items-center justify-center gap-7 text-[#23A6F0]`}>
                    <Link
                        to="/login"
                        onClick={closeAll}
                        className="flex items-center gap-1.5 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
                    >
                        <User className="w-8 h-8 nav:w-4 nav:h-4" />
                        <span className="text-3xl nav:text-sm font-normal nav:font-bold">Login</span>
                    </Link>

                    <Link
                        to="/register"
                        onClick={closeAll}
                        className="flex items-center gap-1.5 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
                    >
                        <UserPlus className="w-8 h-8 nav:w-4 nav:h-4" />
                        <span className="text-3xl nav:text-sm font-normal nav:font-bold">Register</span>
                    </Link>

                    <Search className="w-8 h-8 nav:w-4 nav:h-4 cursor-pointer transition-transform duration-200 hover:scale-110" />

                    <div className="flex items-center gap-1.5 cursor-pointer transition-transform duration-200 hover:scale-110">
                        <ShoppingCart className="w-8 h-8 nav:w-4 nav:h-4" />
                        <span className="text-xs font-normal">1</span>
                    </div>

                    <div className="flex items-center gap-1 cursor-pointer transition-transform duration-200 hover:scale-110">
                        <Heart className="w-8 h-8 nav:w-4 nav:h-4" />
                        <span className="text-xs font-normal">1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderMain;