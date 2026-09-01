import Banner from "../components/Banner";
import BlogSection from "../components/BlogSection";
import EditorsPick from "../components/EditorsPick";
import Hero from "../components/Hero";
import Products from "../components/Products";
import PromoSection from "../components/PromoSection";

function HomePage() {
    return (
        <>
            <Hero />
            <EditorsPick />
            <Products />
            <Banner />
            <PromoSection />
            <BlogSection />
        </>
    );
}

export default HomePage;