import "./AccordionItem.css";

export default function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div
      className="accordion-item"
      style={{
        marginBottom: "8px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <h2
        className="accordion-item__title"
        onClick={onClick}
        style={{
          width: "100%",
          textAlign: "left",
          border: "none",
          cursor: "pointer",
          textTransform: "uppercase",
          marginBottom: "0",
        }}
      >
        <div className="accordion-item__title-text">{title}</div>
        <svg
          width="9"
          height="10"
          viewBox="0 0 9 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`accordion-item__arrow ${
            isOpen ? "rotate-accordion-arrow" : ""
          }`}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.93249 0.432129V8.29609H7.43249L7.43249 2.99279L1.2882 9.13708L0.227539 8.07642L6.37183 1.93213L1.06853 1.93213L1.06853 0.432129H8.93249Z"
            fill="url(#accordion-paint0_linear_7727_2)"
          />
          <defs>
            <linearGradient
              id="accordion-paint0_linear_7727_2"
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
      </h2>
      {isOpen && (
        <div
          className="accordion-item__content"
          style={{ paddingBottom: "20px" }}
        >
          {content}
        </div>
      )}
    </div>
  );
}
