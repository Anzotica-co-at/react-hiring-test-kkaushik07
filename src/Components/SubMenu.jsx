import { FaTimes } from "react-icons/fa";

// Reusable Submenu component
export const SubMenu = ({ submenu, onClose, isMobile }) => (
    <div className="submenu">
        {submenu.map((subItem, idx) => (
            <a key={idx} href={subItem.href} className={`submenu-link${isMobile ? ' page' : ''}`}>
                {subItem.name}
            </a>
        ))}
        <button className="close-submenu" onClick={onClose}>
            <FaTimes size={10} />
        </button>
    </div>
);