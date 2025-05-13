import { useState } from "react";
import "./MobileMenu.css";

export default function MobileMenu({ menuItems, onClose, onOpenModal }) {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleSubmenu = (itemId) => {
    setOpenItemId((prev) => (prev === itemId ? null : itemId));
  };

  return (
    <div className="mobile-menu">
      <ul className="mobile-menu__list">
        {menuItems.map((item) => (
          <li key={item.id} className="mobile-menu__item">
            <div
              className="mobile-menu__item-header"
              onClick={() => item.items && toggleSubmenu(item.id)}
            >
              <span>{item.title}</span>
              {item.items && (
                <svg
                  className={`mobile-menu__arrow ${
                    openItemId === item.id ? "rotated" : ""
                  }`}
                  width="9"
                  height="10"
                  viewBox="0 0 9 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.93249 0.432129V8.29609H7.43249L7.43249 2.99279L1.2882 9.13708L0.227539 8.07642L6.37183 1.93213L1.06853 1.93213L1.06853 0.432129H8.93249Z"
                    fill="url(#mobilemenu__paint0_linear_7727_2)"
                  />
                  <defs>
                    <linearGradient
                      id="mobilemenu__paint0_linear_7727_2"
                      x1="4.58001"
                      y1="0.432129"
                      x2="4.58001"
                      y2="9.13708"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FB8627" />
                      <stop offset="1" stop-color="#F5BEF6" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </div>
            {item.items && openItemId === item.id && (
              <ul className="mobile-submenu">
                {item.items.map((subItem, index) => (
                  <li key={index}>
                    <a href={subItem.link}>{subItem.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="mobile-menu__footer">
        <button onClick={onOpenModal}>Связаться с нами</button>
      </div>

      <div className="mobile-menu__overlay" onClick={onClose}></div>
    </div>
  );
}
