import BlogCard from "./BlogCard";

function BlogSection() {
    return (
        <div className="layout-flex bg-white py-20">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col items-center justify-center gap-2.5 ">
                    <h6 className="text-sm text-[#23A6F0] text-center">Practice Advice</h6>
                    <h2 className=" text-4xl text-center max-w-xs sm:max-w-none">Featured Posts</h2>
                    <p className="text-sm text-[#737373] font-normal text-center max-w-xs sm:max-w-md">Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="flex flex-wrap justify-center gap-7.5">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
        </div >
    )
}
export default BlogSection;