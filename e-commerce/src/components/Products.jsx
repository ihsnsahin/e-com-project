import ProductCard from "./ProductCard";

function Products() {
    return (
        <div className="flex flex-col gap-[48px] md:max-w-5xl md:m-auto">
            <div className="flex flex-col items-center justify-center gap-2.5">
                <h4 className="text-xl text-[#737373] text-center font-normal">Featured Products</h4>
                <h3 className="text-2xl text-center w-3xs sm:w-full">BESTSELLER PRODUCTS</h3>
                <p className="text-sm text-[#737373] text-center w-3xs sm:w-full font-normal">Problems trying to resolve the conflict between</p>
            </div>
            <div className="flex flex-wrap justify-center gap-[30px] md:justify-between sm:flex-row sm:flex-wrap ">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>

        </div>
    )
}
export default Products;