import { Link } from "react-router-dom";
import Brands from "../components/Brands";
import { ArrowLeft, ChevronRight, Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import ProductsHeader from "../components/ProductsHeader";
import Products from "../components/Products";
const COLOR_OPTIONS = [
    { value: "blue", bgClass: "bg-[#23A6F0]", ringClass: "peer-checked:ring-[#23A6F0]" },
    { value: "green", bgClass: "bg-[#23856D]", ringClass: "peer-checked:ring-[#23856D]" },
    { value: "orange", bgClass: "bg-[#E77C40]", ringClass: "peer-checked:ring-[#E77C40]" },
    { value: "black", bgClass: "bg-[#252B42]", ringClass: "peer-checked:ring-[#252B42]" },
];
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
    const [color, setColor] = useState("blue");
    const [activeTab, setActiveTab] = useState("Description");
    const history = useHistory();
    function handleChange(event) {
        setColor(event.target.value);
    }
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
                    <div className="flex flex-col gap-10 w-full sm:max-w-[50%]">
                        <div className="aspect-[5/4] w-full overflow-hidden rounded-xs">
                            <img src="/productdetail.jpg" alt="productdetail" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex justify-start gap-5 cursor-pointer">
                            <div className="aspect-[4/3] w-24 overflow-hidden rounded-xs">
                                <img src="/productdetail.jpg" alt="productdetail" className="w-full h-full object-cover" />
                            </div>
                            <div className="aspect-[4/3] w-24 overflow-hidden rounded-xs cursor-pointer">
                                <img src="/productdetail.jpg" alt="productdetail" className="w-full h-full object-cover opacity-70 hover:opacity-100" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xl">Floating Phone</h4>
                        <div className="flex flex-row items-center gap-4">
                            <div className="flex flex-row items-center gap-1">
                                <Star className="text-[#F3CD03] fill-[#F3CD03]" />
                                <Star className="text-[#F3CD03] fill-[#F3CD03]" />
                                <Star className="text-[#F3CD03] fill-[#F3CD03]" />
                                <Star className="text-[#F3CD03] fill-[#F3CD03]" />
                                <Star className="text-[#F3CD03]" />

                            </div>
                            <h6 className="text-[#737373]">10 Reviews</h6>
                        </div>
                        <h3 className="text-2xl">$1,139.33</h3>
                        <div className="flex gap-2">
                            <h6 className="text-[#737373]">Availability : </h6>
                            <h6 className="text-[#23A6F0]">In Stock</h6>
                        </div>
                        <p className="text-left text-[#737373] font-normal max-w-xs sm:max-w-md">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie Excitation venial consequent sent nostrum met.</p>
                        <hr className="border-[#E8E8E8] my-2" />
                        <div className="flex gap-2">
                            {COLOR_OPTIONS.map((item) => (
                                <label key={item.value} className="cursor-pointer">
                                    <input
                                        type="radio"
                                        name={`product-color`}
                                        value={item.value}
                                        onChange={handleChange}
                                        checked={color === item.value}
                                        className="sr-only peer"
                                    />
                                    <span className={`w-4 h-4 rounded-full inline-block peer-checked:ring-2 peer-checked:ring-offset-2 ${item.bgClass} ${item.ringClass}`} />
                                </label>
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="text-white bg-[#23A6F0] transition-colors duration-300 hover:bg-[#1d91d1] cursor-pointer px-6 py-3 rounded-sm w-full sm:w-auto">Select Options</button>
                            <div className="border border-[#E8E8E8] rounded-full p-2 transition-colors duration-300 hover:bg-gray-100 cursor-pointer ">
                                <Heart className="w-5 h-5" />
                            </div>
                            <div className="border border-[#E8E8E8] rounded-full p-2 transition-colors duration-300 hover:bg-gray-100 cursor-pointer">
                                <ShoppingCart className="w-5 h-5" />
                            </div>  <div className="border border-[#E8E8E8] rounded-full  p-2 transition-colors duration-300 hover:bg-gray-100 cursor-pointer">
                                <Eye className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-8">
                <div className="layout-flex gap-7">
                    <div className="flex flex-wrap justify-center items-center w-full gap-4">
                        <span
                            className={`inline-flex font-semibold  cursor-pointer transition-transform duration-300 py-1 hover:text-[#252B42] 
                        ${activeTab === "Description" ? "border-b-2 border-[#23A6F0] text-[#252B42]" : "text-[#737373]"}`}
                            onClick={() => setActiveTab("Description")}
                        >Description</span>
                        <span className={`inline-flex font-semibold cursor-pointer transition-transform duration-300 py-1 hover:text-[#252B42] 
                        ${activeTab === "Additional Information" ? "border-b-2 border-[#23A6F0] text-[#252B42]" : "text-[#737373]"}`}
                            onClick={() => setActiveTab("Additional Information")}
                        >Additional Information</span>
                        <span className={`inline-flex font-semibold  cursor-pointer transition-transform duration-300 py-1 hover:text-[#252B42] 
                        ${activeTab === "Reviews" ? "border-b-2 border-[#23A6F0] text-[#252B42]" : "text-[#737373]"}`}
                            onClick={() => setActiveTab("Reviews")}
                        >Reviews (2)</span>
                    </div>
                    <div className="flex flex-wrap justify-center items-start lg:flex-nowrap gap-7">
                        <div className="aspect-square md:aspect-[3/4] shrink-0 w-full max-w-[332px] max-h-[400px] rounded-sm shadow-sm overflow-hidden">
                            <img src="/product5.jpg" alt="product5" className="w-full h-full object-cover object-center" />
                        </div>
                        {activeTab === "Description" &&
                            <>
                                <div className="flex flex-col gap-7">
                                    <h3 className="text-2xl">Description</h3>
                                    <div className="flex flex-col gap-5 text-[#737373] font-normal">
                                        <p className="max-w-xs">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                                        <p className="max-w-xs">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                                        <p className="max-w-xs">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-7">
                                    <h3 className="text-2xl">Key Features</h3>
                                    <div className="flex flex-col gap-5 text-sm text-[#737373] font-normal">
                                        <div className="flex flex-row items-center">
                                            <ChevronRight className="w-4 h-4" />
                                            <h6 >the quick fox jumps over the lazy dog</h6>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <ChevronRight className="w-4 h-4" />
                                            <h6 >the quick fox jumps over the lazy dog</h6>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <ChevronRight className="w-4 h-4" />
                                            <h6 >the quick fox jumps over the lazy dog</h6>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                        {
                            activeTab === "Additional Information" &&
                            <div className="flex flex-col gap-7">
                                <h3 className="text-2xl">Additional Information</h3>
                                <div className="flex flex-col gap-5 text-[#737373] font-normal">
                                    <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                                </div>
                            </div>
                        }
                        {
                            activeTab === "Reviews" &&
                            <div className="flex flex-col gap-7">
                                <h3 className="text-2xl">Reviews</h3>
                                <div className="flex flex-col gap-5 text-[#737373] font-normal">
                                    <p >No reviews yet. Be the first to review this product!</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>

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