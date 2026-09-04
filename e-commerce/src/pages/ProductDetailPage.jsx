import { Link } from "react-router-dom";
import Brands from "../components/Brands";
import { ArrowLeft, ChevronRight, Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import ProductsHeader from "../components/ProductsHeader";
import Products from "../components/Products";
import ProductGallery from "../components/ProductGallery";
import ProductOverview from "../components/ProductOverview";
import ProductTabs from "../components/ProductTabs";

const products = [
    {
        id: 1,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product1.jpg",
    },
    {
        id: 2,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product2.jpg",
    },
    {
        id: 3,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product3.jpg",
    },
    {
        id: 4,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product4.jpg",
    },
    {
        id: 5,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product5.jpg",
    },
    {
        id: 6,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product6.jpg",
    },
    {
        id: 7,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product7.jpg",
    },
    {
        id: 8,
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        price: "$6.48",
        img: "/product8.jpg",
    }

];

function ProductDetailPage() {
    const history = useHistory();
    return (
        <>
            <section className="bg-[#FAFAFA] py-8">
                <div className="layout-flex gap-7 sm:flex-row sm:justify-between">
                    <div className="flex justify-center items-center text-sm cursor-pointer text-[#737373] cursor-pointer transition-colors duration-200 ease-in-out hover:text-[#252B42]" onClick={() => history.goBack()}>
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

            <section className="bg-[#FAFAFA] py-8">
                <div className="layout-flex gap-7 sm:flex-row sm:justify-between">
                    <ProductGallery />
                    <ProductOverview />
                </div>
            </section>
            <ProductTabs />
            <section className="bg-[#FAFAFA] py-20">
                <div className="layout-flex gap-12">
                    <ProductsHeader />
                    <Products products={products} />
                </div>
            </section>


            <Brands />
        </>)

}
export default ProductDetailPage;