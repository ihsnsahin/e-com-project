import { LayoutGrid, List } from "lucide-react";
import Products from "../components/Products";
import { useState } from "react";

function ShopPage() {
    const [viewMode, setViewMode] = useState('grid');
    const [myFilter, setMyFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = 5;
    const startPage = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
    const pages = Array.from({ length: Math.min(3, totalPages) }, (_, i) => startPage + i);

    return (
        <section className="bg-white py-20">
            <div className="layout-flex gap-[48px]">
                <div className="flex flex-col items-center justify-center gap-[30px] md:justify-between sm:flex-row">
                    <h6 className="text-[#737373]">
                        Showing {((currentPage - 1) * 8) + 1} - {Math.min(currentPage * 8, totalPages * 8)} of {totalPages * 8} results
                    </h6>

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

                    <form className="flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center gap-2" onSubmit={(e) => e.preventDefault()}>
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
                <Products viewMode={viewMode} currentPage={currentPage} />
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
        </section>
    );
}

export default ShopPage;