import ProductCard from "./ProductCard";

function Products({ products = [], viewMode }) {
    const displayProducts = products.length > 0
        ? products
        : Array.from({ length: 8 }, (_, i) => ({ id: i + 1 }));
    return (
        <div className={`flex flex-wrap justify-center gap-[30px] ${viewMode === 'list' ? 'flex-col items-center' : 'md:justify-between sm:flex-row'}`}>
            {displayProducts.map((product) => (
                <ProductCard key={product.id} productId={product.id} viewMode={viewMode} />
            ))}
        </div>
    )
}
export default Products;