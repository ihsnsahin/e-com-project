import Banner from "../components/Banner";
import BlogSection from "../components/BlogSection";
import EditorsPick from "../components/EditorsPick";
import Hero from "../components/Hero";
import Products from "../components/Products";
import ProductsHeader from "../components/ProductsHeader";
import PromoSection from "../components/PromoSection";

function HomePage() {
    return (
        <>
            <Hero />
            <EditorsPick />
            <section className="bg-[#FAFAFA] py-20">
                <div className="layout-flex gap-[48px]">
                    <ProductsHeader />
                    <Products />
                </div>
            </section>
            <Banner />
            <PromoSection />
            <BlogSection />
        </>
    );
}

export default HomePage;