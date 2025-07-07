import { FaTimes } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// Reusable NestedMenu component
export const NestedMenu = ({
    items,
    openNestedMenu,
    setOpenNestedMenu,
    openNestedMenuData,
    onClose,
    isMobile,
    openNestedMenuMobile,
    setOpenNestedMenuMobile
}) => (
    <div className="nested-menu">
        {items.map((sub, idx) => (
            <div key={idx} className="nested-column">
                <div
                    className={`nested-title${isMobile ? ' page' : ''} ${isMobile ? (openNestedMenuMobile === idx ? "active-title" : "") : (openNestedMenu === idx ? "active-title" : "")}`}
                    onClick={e => {
                        e.stopPropagation();
                        isMobile
                            ? setOpenNestedMenuMobile(openNestedMenuMobile === idx ? null : idx)
                            : setOpenNestedMenu(idx);
                    }}
                >
                    {sub.name}
                    {isMobile && <FaChevronRight size={15} color="#916E27" />}
                </div>
                {(isMobile ? openNestedMenuMobile === idx : openNestedMenu === idx) && (
                    <div className="nested-links-container">
                        {isMobile && (
                            <div className="nested-back-header-container">
                                <FaChevronLeft size={15} className="back-icon-mobile" onClick={() => setOpenNestedMenuMobile(null)} />
                                <div className="nested-back-header">{openNestedMenuData?.name}</div>
                            </div>
                        )}
                        <div className="nested-links">
                            {sub.subItems.map((link, subIdx) => (
                                <a key={subIdx} href={link.href} className="nested-link">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div className="nested-sideinfo-container">
                            {!isMobile && <div className="nested-sideinfo-bar"></div>}
                            <div className="nested-sideinfo">
                                <img src={openNestedMenuData?.sideInfo?.imgSrc} alt="img" />
                                <div className="info-title">{openNestedMenuData?.sideInfo?.title}</div>
                                <div className="info-desc">{openNestedMenuData?.sideInfo?.desc}</div>
                                <div className="info-link">{openNestedMenuData?.sideInfo?.link}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        ))}
        <button className="close-nestedmenu" onClick={onClose}>
            <FaTimes size={15} />
        </button>
    </div>
);