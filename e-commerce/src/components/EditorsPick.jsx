function EditorsPick() {
    return (
        <div className="layout-flex gap-[48px] py-20">
            <div className="flex flex-col items-center justify-center gap-2.5">
                <h3 className="text-2xl text-center">EDITOR’S PICK</h3>
                <p className="text-sm text-[#737373] text-center w-3xs md:w-full font-normal">Problems trying to resolve
                    the conflict between </p>
            </div>
            <div className="flex flex-col md:flex-row gap-[30px] md:h-[500px]">
                <div className="relative md:flex-[2] h-[500px] md:h-full">
                    <img src="/edit1.jpg" alt="men" className="w-full h-full sm:object-cover" />
                    <h5 className="text-base absolute bottom-6 left-5 bg-white px-5 py-3">MEN</h5>
                </div>
                <div className="relative md:flex-1 h-[500px] md:h-full">
                    <img src="/edit2.jpg" alt="women" className="w-full h-full object-cover" />
                    <h5 className="text-base absolute bottom-6 left-5 bg-white px-5 py-3">WOMEN</h5>
                </div>
                <div className="flex flex-col gap-[16px] md:w-[242px]">
                    <div className="relative h-[242px]">
                        <img src="/edit3.jpg" alt="accessorıes" className="w-full h-full object-cover " />
                        <h5 className="text-base absolute bottom-6 left-5 bg-white px-5 py-3">ACCESSORIES</h5>
                    </div>
                    <div className="relative h-[242px]">
                        <img src="/edit4.jpg" alt="kids" className="w-full h-full object-cover" />
                        <h5 className="text-base absolute bottom-6 left-5 bg-white px-5 py-3">KIDS</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditorsPick;