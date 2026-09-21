import { ChevronDown, ChevronUp, Heart, LogOut, Search, User, UserPlus, X } from "lucide-react";
import { useState } from "react";
import Gravatar from "react-gravatar";
import { BiMenuAltRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartDropdown from "../components/CartDropdown";
import { logout } from "../store/actions/clientActions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function HeaderMain() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isShopOpen, setShopOpen] = useState(false);
    const [isUserOpen, setUserOpen] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.client.user);
    const categories = useSelector((state) => state.product.categories);



    const femaleCategories = categories.filter((cat) => cat.gender === "k");
    const maleCategories = categories.filter((cat) => cat.gender === "e");
    const handleLogOut = () => {
        dispatch(logout());
        setUserOpen(false);
    }
    const handleClick = () => {
        setMenuOpen((prev) => !prev);
    }
    const closeAll = () => {
        setMenuOpen(false);
        setShopOpen(false);
        setUserOpen(false);
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
                        className="inline-block text-2xl nav:text-sm text-[#737373] font-normal nav:font-bold transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#252B42]"
                        onClick={closeAll}
                    >Home</Link>
                    <div className="flex flex-col justify-center items-center gap-5 nav:relative">
                        <button onClick={() => setShopOpen((prev) => !prev)} className="flex items-center gap-1 cursor-pointer">
                            <span className="inline-block text-2xl nav:text-sm text-[#737373] font-normal nav:font-bold transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#252B42]">Shop</span>
                            {isShopOpen ? <ChevronUp className="w-4 h-4 text-[#737373] " /> : <ChevronDown className="w-4 h-4 text-[#737373] " />}
                        </button>
                        {isShopOpen &&
                            <nav className="flex flex-row items-start justify-center gap-20 
                            nav:absolute  nav:top-full nav:mt-3 nav:z-50 nav:left-0 nav:w-60 nav:bg-white nav:rounded-md nav:p-2 nav:shadow-2xl nav:items-start">
                                <div className="flex flex-col items-start justify-center gap-4">
                                    <h3 className="text-xl nav:text-xs font-bold">Kadın</h3>
                                    {femaleCategories.map((cat) => {
                                        const categoryCodeName = cat.code.split(":")[1];
                                        const gender = cat.gender === "k" ? "kadin" : "erkek";
                                        return (<Link
                                            key={cat.id}
                                            to={`/shop/${gender}/${categoryCodeName}/${cat.id}`}
                                            className="inline-block text-xl nav:text-xs text-[#737373] font-normal transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#23A6F0]"
                                            onClick={closeAll}
                                        >{cat.title}</Link>)
                                    }
                                    )}
                                </div>
                                <div className="flex flex-col items-start justify-center gap-4">
                                    <h3 className="text-xl nav:text-xs font-bold">Erkek</h3>
                                    {maleCategories.map((cat) => {
                                        const categoryCodeName = cat.code.split(":")[1];
                                        const gender = cat.gender === "k" ? "kadin" : "erkek";
                                        return (<Link
                                            key={cat.id}
                                            to={`/shop/${gender}/${categoryCodeName}/${cat.id}`}
                                            className="inline-block text-xl nav:text-xs text-[#737373] font-normal transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#23A6F0]"
                                            onClick={closeAll}
                                        >{cat.title}</Link>)
                                    })
                                    }

                                </div>
                            </nav>
                        }
                    </div>

                    <Link
                        to="/about"
                        className="inline-block text-2xl nav:text-sm text-[#737373] font-normal nav:font-bold transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#252B42]"
                        onClick={closeAll}
                    >About</Link>
                    <Link
                        to="/blog"
                        className="inline-block text-2xl nav:text-sm text-[#737373] font-normal nav:font-bold transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#252B42]"
                        onClick={closeAll}
                    >Blog</Link>
                    <Link
                        to="/team"
                        className="inline-block text-2xl nav:text-sm text-[#737373] font-normal nav:font-bold transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#252B42]"
                        onClick={closeAll}
                    >Team</Link>
                    <Link
                        to="/contact"
                        className="inline-block text-2xl nav:text-sm text-[#737373] font-normal  nav:font-bold transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#252B42]"
                        onClick={closeAll}
                    >Contact</Link>
                </nav>
                <div className={`${isMenuOpen ? "flex" : "hidden"} nav:flex  flex-col nav:flex-row items-center justify-center gap-7 text-[#23A6F0]`}>
                    {user && user.email ? (
                        <div className="flex flex-col justify-center items-center gap-5 nav:relative">
                            <button
                                onClick={() => setUserOpen((prev) => !prev)}
                                className="relative flex items-center gap-2 cursor-pointer transition-transform duration-200 ease-in-out">
                                <Gravatar
                                    email={user.email}
                                    size={36}
                                    default="identicon"
                                    className="w-9 h-9 nav:w-7 nav:h-7 rounded-full border border-[#23A6F0]/30 object-cover text-[#252B42]"
                                />
                                <span className="text-2xl nav:text-sm font-normal nav:font-bold text-[#252B42]">
                                    {user.name || user.email}
                                </span>
                                {isUserOpen ? <ChevronUp className="w-4 h-4 text-[#737373] " /> : <ChevronDown className="w-4 h-4 text-[#737373] " />}
                            </button>
                            {isUserOpen &&
                                <div className="flex flex-col items-center justify-center gap-2 
                            nav:absolute  nav:top-full nav:mt-3 nav:z-50 nav:left-0 nav:w-40 nav:bg-white nav:rounded-md nav:p-2 nav:shadow-2xl nav:items-start text-2xl nav:text-sm">
                                    <p
                                        onClick={() => {
                                            closeAll();
                                            history.push("/orders")
                                        }}
                                        className="text-2xl nav:text-sm text-[#737373] font-normal nav:font-bold transition-transform duration-200 ease-in-out cursor-pointer hover:text-[#252B42]">Previous order</p>
                                    <button
                                        onClick={handleLogOut}
                                        className="flex items-center gap-1.5 cursor-pointer text-red-500 transition-colors duration-300 hover:text-red-700"
                                    >
                                        <LogOut className="w-7 h-7 nav:w-4 nav:h-4" />
                                        <span className="text-2xl nav:text-sm font-normal nav:font-bold">
                                            Log Out
                                        </span>
                                    </button>
                                </div>
                            }
                        </div>
                    ) : <>
                        <Link
                            to="/login"
                            onClick={closeAll}
                            className="flex items-center gap-1.5 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
                        >
                            <User className="w-7 h-7 nav:w-4 nav:h-4" />
                            <span className="text-2xl nav:text-sm font-normal nav:font-bold">Login</span>
                        </Link>
                        <Link
                            to="/signup"
                            onClick={closeAll}
                            className="flex items-center gap-1.5 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
                        >
                            <UserPlus className="w-7 h-7 nav:w-4 nav:h-4" />
                            <span className="text-2xl nav:text-sm font-normal nav:font-bold">Register</span>
                        </Link>
                    </>}

                    <Search className="w-7 h-7 nav:w-4 nav:h-4 cursor-pointer transition-transform duration-200 hover:scale-110" />

                    <CartDropdown />

                    <div className="flex items-center gap-1 cursor-pointer transition-transform duration-200 hover:scale-110">
                        <Heart className="w-7 h-7 nav:w-4 nav:h-4" />
                        <span className="text-xs font-normal">1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderMain;