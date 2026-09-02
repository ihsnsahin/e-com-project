import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
function Header() {
    return (
        <div className="shadow-md sticky bg-white top-0 z-50">
            <HeaderTop />
            <HeaderMain />
        </div>
    )
}
export default Header;