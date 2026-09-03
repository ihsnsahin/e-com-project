import ProductCard from "./ProductCard";

function Products({ products, viewMode }) {
    const displayProducts = products.length > 0
        ? products
        : Array.from({ length: 8 }, (_, i) => ({ id: i + 1 }));
    return (
        <div className={`flex flex-wrap justify-center gap-7.5 ${viewMode === 'list' ? 'flex-col items-center' : 'sm:flex-row'}`}>
            {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
        </div>
    )
}
export default Products;