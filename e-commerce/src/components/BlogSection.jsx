import BlogCard from "./BlogCard";

function BlogSection() {
    return (
        <div className="flex flex-col  bg-white px-9 py-20 lg:px-0  md:max-w-5xl md:m-auto">
            <div className="flex flex-col gap-[48px]">
                <div className="flex flex-col items-center justify-center gap-2.5 ">
                    <h6 className="text-sm text-[#23A6F0] text-center">Practice Advice</h6>
                    <h2 className=" text-4xl text-center max-w-xs sm:max-w-none">Featured Products</h2>
                    <p className="text-sm text-[#737373] text-center max-w-xs sm:max-w-none">Problems trying to resolve the conflict between the two major </p>
                </div>
                <div className="flex flex-wrap justify-center gap-[30px]">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
        </div >
    )
}
export default BlogSection;