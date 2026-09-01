function PromoSection() {
    return (
        <section className="w-full bg-white  overflow-hidden">
            <div className="layout-flex md:max-w-6xl items-center justify-between gap-10 pt-20 md:flex-row-reverse md:gap-20 md:pt-0">
                <div className="flex flex-col justify-center items-center md:items-start gap-7 max-w-3xs sm:max-w-sm md:max-w-lg">
                    <h5 className="text-base text-center md:text-left  text-[#BDBDBD]">SUMMER 2020</h5>
                    <h2 className="text-4xl text-center md:text-left ">Part of the Neural Universe</h2>
                    <h4 className="text-xl text-[#737373] font-normal text-center md:text-left md:max-w-sm">We know how large objects will act, but things on a small scale.</h4>
                    <div className="flex flex-col justify-center items-center md:flex-row gap-10">
                        <button className="text-sm text-white bg-[#2DC071] rounded-sm px-10 py-4 cursor-pointer hover:bg-emerald-600">BUY NOW</button>
                        <button className="text-[#2DC071] border-[#2DC071] border rounded-sm text-sm px-10 py-4 cursor-pointer hover:bg-emerald-600 hover:text-white">Read More</button>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full md:w-[60%] aspect-square max-h-[380px] md:max-h-none">
                    <img
                        src="/promo.png"
                        alt="Neural Universe Promo"
                        className="w-full h-full object-cover object-center block"
                    />
                </div>
            </div>
        </section>

    )
}
export default PromoSection;