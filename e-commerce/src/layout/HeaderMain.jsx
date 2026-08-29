import { AlignRight, ChevronDown, Heart, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function HeaderMain() {
    return (
        <div className="flex flex-col items-center w-full bg-[#FFFFFF] text-black text-sm px-9 py-6">
            {/* ÜST BAR: Masaüstünde 3 Parça (Logo - Nav - Sağ Elemanlar), Mobilde 2 Parça (Logo - Mobil İkonlar) */}
            <div className="flex justify-between items-center w-full">
                {/* PARÇA 1: Logo */}
                <h2 className="text-[#252B42] text-2xl">Bandage</h2>

                {/* PARÇA 2: Navigasyon (Masaüstünde Ortada Görünür, Mobilde Gizlenir) */}
                <nav className="hidden nav:flex items-center gap-6 text-[#737373]">
                    <Link to="/">Home</Link>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <Link to="/shop">Shop</Link>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                {/* PARÇA 3: Sağ Elemanlar (Masaüstünde Görünür, Mobilde Gizlenir) */}
                <div className="hidden nav:flex items-center gap-6 text-[#23A6F0] font-bold">
                    <div className="flex gap-1.5 cursor-pointer">
                        <User className="w-4 h-4" />
                        <Link to="/login">Login</Link>
                        <span>/</span>
                        <Link to="/register">Register</Link>
                    </div>
                    <Search className="w-4 h-4 cursor-pointer" />
                    <div className="flex items-center gap-1.5 cursor-pointer">
                        <ShoppingCart className="w-4 h-4" />
                        <span className="text-xs font-normal">1</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs font-normal">1</span>
                    </div>
                </div>
                {/* MOBİL İKONLAR (Sadece Mobilde Görünür) */}
                <div className="flex items-center gap-6 nav:hidden text-[#252B42]">
                    <Search className="w-6 h-6 cursor-pointer" />
                    <ShoppingCart className="w-6 h-6 cursor-pointer" />
                    <AlignRight className="w-7 h-7 cursor-pointer" />
                </div>
            </div>
            {/* PARÇA 4: Mobil Menü (Masaüstünde Gizlidir, Mobilde Hemen Altında Dikey Olarak Çıkar) */}
            <nav className="flex flex-col items-center justify-center gap-[30px] py-[60px] text-[#737373] text-3xl font-normal nav:hidden">
                <Link to="/">Home</Link>
                <Link to="/shop">Product</Link>
                <Link to="/about">Pricing</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}
export default HeaderMain;