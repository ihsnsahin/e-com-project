import Banner from "../components/Banner";
import BestSellerProduct from "../components/BestsellerProducts";
import BlogSection from "../components/BlogSection";
import EditorsPick from "../components/EditorsPick";
import Hero from "../components/Hero";
import PromoSection from "../components/PromoSection";

function HomePage() {

    return (
        <>
            <Hero />
            <EditorsPick />
            <BestSellerProduct />
            <Banner />
            <PromoSection />
            <BlogSection />
        </>
    );
}

export default HomePage;