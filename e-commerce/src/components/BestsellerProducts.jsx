import { useDispatch, useSelector } from "react-redux";
import Products from "./Products";
import ProductsHeader from "./ProductsHeader";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions/productActions";
import { Loader2 } from "lucide-react";

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
                <div className="text-center py-20 text-red-500 font-semibold">
                    Ürünler yüklenirken bir sorun oluştu. Lütfen sayfayı yenileyin.
                </div>
            )}
            <Products products={sortedProducts} fetchState={fetchState} />
        </div>
    </section>
}
export default BestSellerProduct;