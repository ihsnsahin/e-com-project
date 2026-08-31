import FooterColumn from "../components/FooterColumn";

function FooterMain() {
    return (
        <section className="bg-white">
            <div className="w-full px-9 py-10 hero:px-0 sm:max-w-5xl sm:m-auto">
                <div className="flex flex-wrap justify-between gap-8">
                    <FooterColumn title="Company Info" links={["About Us", "Carrier", "We are hiring", "Blog"]} />
                    <FooterColumn title="Legal" links={["About Us", "Carrier", "We are hiring", "Blog"]} />
                    <FooterColumn title="Features" links={["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"]} />
                    <FooterColumn title="Resources" links={["IOS & Android", "Watch a Demo", "Customers", "API"]} />
                    <div className="flex flex-col justify-start gap-4 w-full sm:w-[calc(50%-16px)] lg:w-[240px]">
                        <h5 className="text-[#252B42] text-base">Get In Touch</h5>
                        <form className="flex w-full rounded-md overflow-hidden border border-[#E6E6E6]">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-[#F9F9F9] px-4 py-3 text-sm text-[#737373] focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-[#23A6F0] text-white px-5 py-3 text-sm font-normal hover:bg-sky-600 transition-colors cursor-pointer"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-[#737373] font-normal">
                            Lore imp sum dolor Amit
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FooterMain;