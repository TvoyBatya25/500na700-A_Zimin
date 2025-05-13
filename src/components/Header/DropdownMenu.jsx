import { useEffect, useRef } from "react";

export default function DropdownMenu({ items, position }) {
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current && position) {
      menuRef.current.style.left = `${position.left}px`;
      menuRef.current.style.width = `${position.width}px`;
    }
  }, [position]);

  if (!items || !position) return null;

  return (
    <div className="dropdown-menu" ref={menuRef}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
