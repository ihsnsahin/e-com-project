import ProductCard from "./ProductCard";

function Products({ products, viewMode, onResetFilters }) {
    if (!products || products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 gap-4 text-center w-full">
                <p className="text-[#737373] text-lg">
                    No products found matching your selected criteria.
                </p>
                {onResetFilters && (
                    <button
                        onClick={onResetFilters}
                        className="text-white bg-[#23A6F0] transition-colors duration-300 hover:bg-[#1d91d1] cursor-pointer px-6 py-3 rounded-sm w-full sm:w-auto"
                    >
                        Reset Filters
                    </button>
                )}
            </div>
        );
    }
    return (
        <div className={`flex flex-wrap justify-center gap-7.5 ${viewMode === 'list' ? 'flex-col items-center' : 'sm:flex-row'}`}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
        </div>
    )
}
export default Products;