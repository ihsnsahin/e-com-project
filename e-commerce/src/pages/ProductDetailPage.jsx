import { Link } from "react-router-dom";
import Brands from "../components/Brands";
import { AlertCircle, ArrowLeft, ChevronRight, Loader2 } from "lucide-react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProductGallery from "../components/ProductGallery";
import ProductOverview from "../components/ProductOverview";
import ProductTabs from "../components/ProductTabs";
import BestSellerProduct from "../components/BestsellerProducts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions/productActions";


function ProductDetailPage() {
    const history = useHistory();
    const { productId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchProduct(productId))

    }, [dispatch, productId]);
    const product = useSelector((state) => state.product.productDetail);
    const fetchState = useSelector((state) => state.product.productDetailFetchState);
    return (
        <>
            <section className="bg-[#FAFAFA] py-8">
                <div className="layout-flex gap-7 sm:flex-row sm:justify-between">
                    <div className="flex justify-center items-center text-sm cursor-pointer text-[#737373] transition-colors duration-200 ease-in-out hover:text-[#252B42]" onClick={() => history.goBack()}>
                        <ArrowLeft className="w-4 h-4" />
                        <h6>Back</h6>
                    </div>
                    <div className="flex justify-center items-center text-sm">
                        <Link to="/" className="cursor-pointer">Home</Link>
                        <ChevronRight className="w-4 h-4 text-[#BDBDBD]" />
                        <h6 className="text-[#737373] cursor-pointer transition-colors duration-200 ease-in-out hover:text-[#252B42]" onClick={() => history.push("/shop")}>Shop</h6>
                    </div>
                </div>
            </section>
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
                        <h4 className="text-lg font-semibold text-gray-800">Failed to Load Product</h4>
                        <p className="text-sm text-gray-500 mt-1">
                            Something went wrong while fetching the products. Please try again.
                        </p>
                    </div>
                </div>
            )}
            {fetchState === "FETCHED" &&
                <>
                    <section className="bg-[#FAFAFA] py-8">
                        <div className="layout-flex gap-7 sm:flex-row">
                            <ProductGallery product={product} />
                            <ProductOverview product={product} />
                        </div>
                    </section>
                    <ProductTabs product={product} />
                    <BestSellerProduct />
                </>}
            <Brands />
        </>)

}
export default ProductDetailPage;