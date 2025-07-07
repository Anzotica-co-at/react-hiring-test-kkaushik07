import { useEffect, useState } from "react";
import "../ComponentCss/Navigation.css"; // Create this file for styles
import { FaBars, FaGlobeAmericas, FaTimes, FaUserAlt } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { navLinks } from "../DummyData/navDummyData"; // Import your navigation data
import { NestedMenu } from "./NestedMenu";
import { SubMenu } from "./SubMenu";

const NavigationMenu = () => {
    const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openNestedMenu, setOpenNestedMenu] = useState(0);
    const [openNestedMenuMobile, setOpenNestedMenuMobile] = useState(null);

    const handleMenuToggle = () => setMenuDrawerOpen((open) => !open);
    const handleLinkClick = (index) => {
        setMenuDrawerOpen(false);
        setOpenMenu(openMenu === index ? null : index)
    }

    const openNestedMenuData = navLinks[openMenu]?.items?.[openNestedMenu];

     useEffect(() => {
        if (!menuDrawerOpen) {
            setOpenMenu(false);
            setOpenNestedMenu(0);
            setOpenNestedMenuMobile(null);
        }
        return () => {
            setOpenMenu(false);
            setOpenNestedMenu(0);
            setOpenNestedMenuMobile(null);
        };
    }, [menuDrawerOpen]);

    return (
        <nav className="nav">
            <div className="nav-container">
                {menuDrawerOpen ?
                    <button
                        className="nav-hamburger"
                        aria-label="Close navigation menu"
                        onClick={handleMenuToggle}
                    >
                        <FaTimes size={10} />
                    </button>
                    :
                    <button
                        className="nav-hamburger"
                        aria-label="Open navigation menu"
                        onClick={handleMenuToggle}
                    >
                        <FaBars size={10} />
                    </button>}
                <div className="nav-logo">THE RITZ-CARLTON</div>
                <div className="nav-icons">
                    <FaGlobeAmericas size={14} />
                    <FaUserAlt size={14} />
                </div>
                <ul className="nav-links">
                    {navLinks.map((item, index) => (
                        <li className={` ${openMenu === index ? "active" : ""}`} onClick={() => handleLinkClick(index)} key={item.name}>
                            <button className="menu-item" >{item.name}</button>
                            {item.type === "submenu" && openMenu === index && (
                                <SubMenu submenu={item.submenu} onClose={() => setOpenMenu(null)} isMobile={false} />
                            )}
                            {item.type === "nested" && openMenu === index && (
                                <NestedMenu
                                    items={item.items}
                                    openNestedMenu={openNestedMenu}
                                    setOpenNestedMenu={setOpenNestedMenu}
                                    openNestedMenuData={openNestedMenuData}
                                    onClose={() => setOpenMenu(null)}
                                    isMobile={false}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Overlay menu for mobile */}
            <div className={`nav-overlay${menuDrawerOpen ? " nav-overlay--open" : ""}`}>
                <ul>
                    {navLinks.map((item,index) => (
                       <li className={` ${openMenu === index ? "active" : ""}`} onClick={() => setOpenMenu(openMenu === index ? null : index)} key={item.name}>
                            <button className="menu-item" >{item.name}
                              {(item.type === "submenu" || item.type === "nested") && (openMenu === index ?  <FaChevronUp size={15} color="#916E27"/> : <FaChevronDown size={15} color="#916E27"/>)}
                            </button>
                            {item.type === "submenu" && openMenu === index && (
                                <SubMenu submenu={item.submenu} onClose={() => setOpenMenu(null)} isMobile={true} />
                            )}
                            {item.type === "nested" && openMenu === index && (
                                <NestedMenu
                                    items={item.items}
                                    openNestedMenuMobile={openNestedMenuMobile}
                                    setOpenNestedMenuMobile={setOpenNestedMenuMobile}
                                    openNestedMenuData={openNestedMenuData}
                                    onClose={() => setOpenMenu(null)}
                                    isMobile={true}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavigationMenu;