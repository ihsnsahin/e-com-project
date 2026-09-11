import ProductCard from "./ProductCard";

function Products({ products, viewMode }) {
    if (!products || products.length === 0) {
        return (
            <div className="text-center py-16 text-[#737373] font-medium w-full">
                Bu kategoride henüz ürün bulunmuyor.
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