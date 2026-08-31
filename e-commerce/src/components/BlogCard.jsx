import { AlarmClock, ChartArea, ChevronRight } from "lucide-react";

function BlogCard() {
    return (
        <div className="flex flex-col items-start justify-center gap-2 w-full sm:w-[calc(50%-15px)] md:w-[calc(33.333%-20px)] shadow-md  transition-transform duration-500 ease-in-out hover:scale-110 hover:cursor-pointer">
            <div className="relative flex justify-center items-center w-full aspect-11/10 ">
                <span className="absolute top-5 left-5 bg-[#E74040] text-white text-sm rounded-sm px-2.5 leading-6">NEW</span>
                <img src="/blog.jpg" alt="blog" className="w-full h-full object-cover object-center block" />
            </div>
            <div className="flex flex-col justify-center items-start gap-2.5 p-6 sm:max-w-2xs">
                <div className="flex items-center gap-3.75 text-xs">
                    <span className="text-[#8EC2F2] font-normal">Google</span>
                    <span className="text-[#737373] font-normal">Trending</span>
                    <span className="text-[#737373] font-normal">New</span>
                </div>
                <h4 className="text-xl font-normal leading-8">Loudest à la Madison #1 (L'integral)</h4>
                <p className="text-sm text-[#737373] font-normal leading-5">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <AlarmClock className="w-4 h-4 text-[#23A6F0]" />
                        <span className="text-xs text-[#737373] font-normal">22 April 2021</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ChartArea className="w-4 h-4 text-[#23856D]" />
                        <span className="text-xs text-[#737373] font-normal">10 comments</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-[#737373]">Learn More</span>
                    <ChevronRight className=" w-4 h-4 text-[#23A6F0]" />
                </div>
            </div>
        </div>
    )
}
export default BlogCard;