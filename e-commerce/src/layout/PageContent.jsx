import Header from "./Header";
import Footer from "./Footer";

function PageContent({ children }) {
    return (
        <div className="flex flex-col min-h-screen font-montserrat font-bold text-sm text-[#252B42]">
            <Header />
            <main className="flex-1 w-full flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default PageContent;