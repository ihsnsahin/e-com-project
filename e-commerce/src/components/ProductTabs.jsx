import { ChevronRight } from "lucide-react";
import { useState } from "react";

function ProductTabs() {
    const [activeTab, setActiveTab] = useState("Description");
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
                    >Reviews (2)</span>
                </div>
                <div className="flex flex-wrap justify-center items-start lg:flex-nowrap lg:justify-start gap-7">
                    <div className="aspect-square md:aspect-[3/4] shrink-0 w-full max-w-[332px] max-h-[400px] rounded-sm shadow-sm overflow-hidden">
                        <img src="/product5.jpg" alt="product5" className="w-full h-full object-cover object-center" />
                    </div>
                    {activeTab === "Description" &&
                        <>
                            <div className="flex flex-col w-full gap-7">
                                <h3 className="text-2xl">Description</h3>
                                <div className="flex flex-col gap-5 text-[#737373] font-normal">
                                    <p className="max-w-xs">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                                    <p className="max-w-xs">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                                    <p className="max-w-xs">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-7">
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
                                <p></p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}
export default ProductTabs;