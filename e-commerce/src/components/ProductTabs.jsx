import { ChevronRight } from "lucide-react";
import { useState } from "react";

function ProductTabs({ product }) {
    const [activeTab, setActiveTab] = useState("Description");

    if (!product) return null;
    const descriptionText = product.description || "";
    return (
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
                    >Reviews ({product.sell_count})</span>
                </div>
                <div className="flex flex-wrap justify-center items-start lg:flex-nowrap lg:justify-start gap-7">
                    <div className="aspect-square md:aspect-[3/4] shrink-0 w-full max-w-[332px] max-h-[400px] rounded-sm shadow-sm overflow-hidden">
                        <img src={product.images?.[0]?.url} alt={product.name} className="w-full h-full object-cover object-center" />
                    </div>
                    {activeTab === "Description" &&
                        <>
                            <div className="flex flex-col w-full gap-7">
                                <h3 className="text-2xl">Description</h3>
                                <div className="flex flex-col gap-5 text-[#737373] font-normal">
                                    <p className="max-w-xl">{descriptionText}</p>
                                </div>
                            </div>
                            {/*<div className="flex flex-col w-full gap-7">
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
                                </div>*/}
                        </>
                    }
                    {
                        activeTab === "Additional Information" &&
                        <div className="flex flex-col gap-7">
                            <h3 className="text-2xl">Additional Information</h3>
                            <div className="flex flex-col gap-5 text-[#737373] font-normal">
                                <div className="flex flex-col gap-5 text-sm text-[#737373] font-normal">
                                    <div className="flex flex-row items-center">
                                        <ChevronRight className="w-4 h-4" />
                                        <h6 >Stock: {product.stock} units</h6>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <ChevronRight className="w-4 h-4" />
                                        <h6 >Average Rating: {product.rating}/5.0</h6>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <ChevronRight className="w-4 h-4" />
                                        <h6 >Store id: {product.store_id}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        activeTab === "Reviews" &&
                        <div className="flex flex-col gap-7">
                            <h3 className="text-2xl">Reviews</h3>
                            <div className="flex flex-col gap-5 text-[#737373] font-normal">
                                <p>No reviews yet. Be the first to review this product!</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}
export default ProductTabs;