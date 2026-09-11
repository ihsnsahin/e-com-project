import { useDispatch, useSelector } from "react-redux";
import Products from "./Products";
import ProductsHeader from "./ProductsHeader";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions/productActions";
import { AlertCircle, Loader2 } from "lucide-react";

function BestSellerProduct() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.productList);
    const sortedProducts = [...products].sort((a, b) => b.sell_count - a.sell_count);
    const fetchState = useSelector((state) => state.product.fetchState);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return <section className="bg-[#FAFAFA] py-20">
        <div className="layout-flex gap-12">
            <ProductsHeader />
            {fetchState === "FETCHING" && (
                <div className="flex flex-col justify-center items-center">
                    <Loader2 className="animate-spin h-16 w-16 text-[#23A6F0]" />
                </div>
            )}
            {fetchState === "FAILED" && (
                <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
                    <div className="p-4 rounded-full bg-red-50 text-red-500">
                        <AlertCircle className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800">Failed to Load Products</h4>
                        <p className="text-sm text-gray-500 mt-1">
                            Something went wrong while fetching the products.
                        </p>
                    </div>
                </div>
            )}
            {fetchState === "FETCHED" && <Products products={sortedProducts} fetchState={fetchState} />}
        </div>
    </section>
}
export default BestSellerProduct;