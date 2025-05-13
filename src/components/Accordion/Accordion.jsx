import { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Какие услуги предоставляет ваша студия?",
      content: (
        <>
          Услуги, предоставляемые студией, либо ссылка на{" "}
          <a href="#" style={{ color: "#fb8627", textDecoration: "underline" }}>
            прейскурант
          </a>{" "}
        </>
      ),
    },
    {
      title: "Как вы обеспечиваете качество и уникальность дизайна?",
      content:
        "Мы придерживаемся высоких стандартов качества и стремимся создавать уникальный дизайн, отвечающий потребностям и ожиданиям наших клиентов. Наши дизайнеры постоянно совершенствуют свои навыки и следят за новыми трендами в дизайне.",
    },
    {
      title:
        "Предоставляете ли вы услуги по созданию контента для сайтов и приложений?",
      content: "Информация о перечне предоставляемых услуг",
    },
  ];

  return (
    <div className="accordion">
      <div className="accordion__faq">
        <h1>FAQ</h1>
      </div>
      <div className="accordion__list">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
