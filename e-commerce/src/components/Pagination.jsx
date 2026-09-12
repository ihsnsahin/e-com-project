function Pagination({ pages, currentPage, setCurrentPage, totalPages }) {
    return <div className="flex justify-center w-full">
        <div className="flex justify-center items-center text-[#23A6F0] border border-[#DDDDDD] rounded-md divide-x divide-[#DDDDDD] shadow-xs">
            <button
                onClick={
                    () => setCurrentPage(1)
                }
                disabled={currentPage === 1}
                className="px-4 py-5 hover:bg-gray-100 cursor-pointer disabled:text-[#BDBDBD] disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-300 ease-in-out"
            >
                First
            </button>
            <button
                onClick={
                    () => setCurrentPage(prev => Math.max(1, prev - 1))
                }
                disabled={currentPage === 1}
                className="px-4 py-5 hover:bg-gray-100 cursor-pointer disabled:text-[#BDBDBD] disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-300 ease-in-out"
            >
                Prev
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => {
                        setCurrentPage(page);
                    }}
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
}
export default Pagination;