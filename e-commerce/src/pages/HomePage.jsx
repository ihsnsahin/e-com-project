import Banner from "../components/Banner";
import BlogSection from "../components/BlogSection";
import EditorsPick from "../components/EditorsPick";
import Hero from "../components/Hero";
import Products from "../components/Products";
import ProductsHeader from "../components/ProductsHeader";
import PromoSection from "../components/PromoSection";

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
function HomePage() {

    return (
        <>
            <Hero />
            <EditorsPick />
            <section className="bg-[#FAFAFA] py-20">
                <div className="layout-flex gap-12">
                    <ProductsHeader />
                    <Products products={products} />
                </div>
            </section>
            <Banner />
            <PromoSection />
            <BlogSection />
        </>
    );
}

export default HomePage;