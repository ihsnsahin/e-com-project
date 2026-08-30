import Banner from "../components/Banner";
import EditorsPick from "../components/EditorsPick";
import Hero from "../components/Hero";
import Products from "../components/Products";

function HomePage() {
    return (
        <>
            <Hero />
            <div className="flex flex-col">
                <div className="bg-[#FAFAFA] px-9 py-20 lg:px-0">
                    <EditorsPick />
                </div>
                <div className="bg-white px-9 py-20 lg:px-0">
                    <Products />
                </div>
            </div>
            <Banner />
        </>
    );
}

export default HomePage;