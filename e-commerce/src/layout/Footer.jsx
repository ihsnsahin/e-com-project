import FooterBottom from "./FooterBottom";
import FooterMain from "./FooterMain";
import FooterTop from "./FooterTop";

function Footer() {
    return (
        <div className="flex flex-col w-full">
            <FooterTop />
            <FooterMain />
            <FooterBottom />
        </div>
    )
}
export default Footer;