import { ChevronRight, LayoutGrid, List } from "lucide-react";
import Products from "../components/Products";
import { useState } from "react";
import { Link } from "react-router-dom";
import Brands from "../components/Brands";
const shopCategories = [
    { id: 1, title: "CLOTHS", count: "5 Items", img: "/shop1.jpg" },
    { id: 2, title: "CLOTHS", count: "5 Items", img: "/shop2.jpg" },
    { id: 3, title: "CLOTHS", count: "5 Items", img: "/shop3.jpg" },
    { id: 4, title: "CLOTHS", count: "5 Items", img: "/shop4.jpg" },
    { id: 5, title: "CLOTHS", count: "5 Items", img: "/shop5.jpg" },
];
const products = [
    {
        id: 1,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product1.jpg",
    },
    {
        id: 2,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product2.jpg",
    },
    {
        id: 3,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product3.jpg",
    },
    {
        id: 4,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product4.jpg",
    },
    {
        id: 5,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product5.jpg",
    },
    {
        id: 6,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product6.jpg",
    },
    {
        id: 7,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product7.jpg",
    },
    {
        id: 8,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product8.jpg",
    },
    {
        id: 9,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product7.jpg",
    },
    {
        id: 10,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product8.jpg",
    }
];
function ShopPage() {
    const [viewMode, setViewMode] = useState('grid');
    const [myFilter, setMyFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = 5;
    const startPage = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
    const pages = Array.from({ length: Math.min(3, totalPages) }, (_, i) => startPage + i);

    return (
        <>
            <section className="bg-[#FAFAFA] py-8">
                <div className="layout-flex gap-7 sm:flex-row sm:justify-between">
                    <h3 className="text-2xl text-center">Shop</h3>
                    <div className="flex justify-center items-center text-sm">
                        <Link to="/" className="cursor-pointer">Home</Link>
                        <ChevronRight className="w-4 h-4 text-[#BDBDBD]" />
                        <h6 className="text-[#737373]">Shop</h6>
                    </div>
                </div>
            </section>

            <section className="bg-[#FAFAFA] py-8">
                <div className="flex flex-wrap justify-center lg:justify-between items-center px-9 md:max-w-5xl md:mx-auto lg:px-0 gap-4 lg:gap-2">
                    {shopCategories.map((shop) => (
                        <div key={shop.id} className="relative w-full sm:max-w-[30%] lg:max-w-[19%] aspect-11/10 sm:aspect-10/11 group cursor-pointer overflow-hidden">
                            <img src={shop.img} alt={shop.title} className="w-full h-full object-cover object-center block transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 text-white ">
                                <h5 className="text-base">{shop.title}</h5>
                                <h6 className="text-xs">{shop.count}</h6>
                            </div>
                            <div className="absolute inset-0 z-10 bg-black/40"></div>
                        </div>
                    ))}
                </div>
            </section>


            <section className="bg-white py-20">
                <div className="layout-flex gap-12">
                    <div className="flex flex-col items-center justify-center gap-7.5 md:justify-between md:flex-row">
                        <h6 className="text-[#737373]">Showing All 12 Results</h6>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <h6 className="text-[#737373]">Views:</h6>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out ${viewMode === 'grid'
                                    ? 'bg-[#23A6F0] text-white shadow-md'
                                    : 'hover:shadow-md hover:bg-gray-100 text-[#252B42]'
                                    }`}
                            >
                                <LayoutGrid className={`w-4 h-4 ${viewMode === 'grid' ? 'text-white' : 'text-[#252B42]'}`} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out ${viewMode === 'list'
                                    ? 'bg-[#23A6F0] text-white shadow-md'
                                    : 'hover:shadow-md hover:bg-gray-100 text-[#737373]'
                                    }`}
                            >
                                <List className={`w-4 h-4 ${viewMode === 'list' ? 'text-white' : 'text-[#737373]'}`} />
                            </button>
                        </div>

                        <form className="flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center gap-2"
                            onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Search Products"
                                className="text-[#737373] font-normal px-4 py-3 rounded-sm bg-[#F9F9F9] border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full sm:w-auto"
                            />
                            <select
                                name="sortBy"
                                id="sortBy"
                                value={myFilter}
                                onChange={(e) => setMyFilter(e.target.value)}
                                className="text-[#737373] font-normal px-4 py-3 rounded-sm bg-[#F9F9F9] border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full sm:w-auto"
                            >
                                <option value="" disabled>Sort By</option>
                                <option value="asc">Price: Low to High</option>
                                <option value="desc">Price: High to Low</option>
                                <option value="az">Name: A to Z</option>
                                <option value="za">Name: Z to A</option>
                            </select>
                            <button
                                type="submit"
                                className="text-white bg-[#23A6F0] transition-colors duration-300 hover:bg-[#1d91d1] cursor-pointer px-6 py-3 rounded-sm w-full sm:w-auto"
                            >
                                Filter
                            </button>
                        </form>
                    </div>
                    <Products viewMode={viewMode} currentPage={currentPage} products={products} />
                    <div className="flex justify-center w-full">
                        <div className="flex justify-center items-center text-[#23A6F0] border border-[#DDDDDD] rounded-md divide-x divide-[#DDDDDD] shadow-xs">
                            <button
                                onClick={() => setCurrentPage(1)}
                                disabled={currentPage === 1}
                                className="px-4 py-5 hover:bg-gray-100 cursor-pointer disabled:text-[#BDBDBD] disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-300 ease-in-out"
                            >
                                First
                            </button>
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-5 hover:bg-gray-100 cursor-pointer disabled:text-[#BDBDBD] disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-300 ease-in-out"
                            >
                                Prev
                            </button>

                            {pages.map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-4 py-5 cursor-pointer font-bold transition-all duration-300 ease-in-out ${currentPage === page
                                        ? "bg-[#23A6F0] text-white"
                                        : "hover:bg-gray-100 text-[#23A6F0]"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-5 hover:bg-gray-100 cursor-pointer disabled:text-[#BDBDBD] disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-300 ease-in-out"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </section >
            <Brands />
        </>

    );
}

export default ShopPage;