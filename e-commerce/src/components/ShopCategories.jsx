import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ShopCategories() {
    /*const shopCategories = [
        { id: 1, title: "CLOTHS", count: "5 Items", img: "/shop1.jpg" },
        { id: 2, title: "CLOTHS", count: "5 Items", img: "/shop2.jpg" },
        { id: 3, title: "CLOTHS", count: "5 Items", img: "/shop3.jpg" },
        { id: 4, title: "CLOTHS", count: "5 Items", img: "/shop4.jpg" },
        { id: 5, title: "CLOTHS", count: "5 Items", img: "/shop5.jpg" },
    ];*/
    const shopCategories = useSelector((state) => state.product.categories);
    const showShopCategories = [...shopCategories]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);
    return (
        <section className="bg-[#FAFAFA] py-8">
            <div className="flex flex-wrap justify-center lg:justify-between items-center px-9 md:max-w-5xl md:mx-auto lg:px-0 gap-4 lg:gap-2">
                {showShopCategories.map((shop) => {
                    const categoryCodeName = shop.code.split(":")[1];
                    const gender = shop.gender === "k" ? "kadin" : "erkek";
                    return (
                        <Link
                            key={shop.id}
                            className="block relative w-full sm:max-w-[30%] lg:max-w-[19%] aspect-11/10 sm:aspect-10/11 group cursor-pointer overflow-hidden"
                            to={`/shop/${gender}/${categoryCodeName}/${shop.id}`}
                        >
                            <img src={shop.img} alt={shop.title} className="w-full h-full object-cover object-center block transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 text-white ">
                                <h5 className="text-base">{shop.title.toUpperCase()}</h5>
                                <h6 className="text-xs">Rating: {shop.rating}</h6>
                            </div>
                            <div className="absolute inset-0 z-10 bg-black/40"></div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}
export default ShopCategories;