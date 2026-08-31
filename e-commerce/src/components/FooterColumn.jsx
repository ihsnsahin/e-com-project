function FooterColumn({ title, links }) {
    return (
        <div className="w-full sm:w-[calc(50%-16px)] lg:w-auto">
            <div className="flex flex-col justify-start gap-4">
                <h5 className="text-base text-[#252B42]">{title}</h5>
                <ul className="flex flex-col gap-2.5">
                    {links.map((link, index) =>
                        <li key={index}><a href="#" className="text-sm text-[#737373] hover:text-[#23A6F0] transition-colors">{link}</a></li>

                    )}
                </ul>
            </div>
        </div>

    )
}
export default FooterColumn;