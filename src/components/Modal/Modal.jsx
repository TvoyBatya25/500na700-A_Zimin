import "./Modal.css";
import { useState } from "react";
import { InputMask } from "@react-input/mask";

export default function Modal({ active, setActive }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    agreement: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^\S+@\S+\.\S+$/;

    // Валидация формы
    if (!form.name.trim()) newErrors.name = "Обязательное поле";
    if (!form.phone.replace(/_/g, "").trim())
      newErrors.phone = "Обязательное поле";
    if (!emailRegex.test(form.email)) newErrors.email = "Некорректный email";
    if (!form.agreement) newErrors.agreement = "Требуется согласие";

    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate() && (console.log(form), setActive(false));
  };

  return (
    <div className={`modal ${active ? "active" : ""}`}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2>Связаться с нами</h2>
        <div className="modal__close-btn" onClick={() => setActive(false)}>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.7 22.9999L0 2.29999L2.3 0L23 20.6999L20.7 22.9999Z"
              fill="#0F0F17"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.7 0.000124467L0 20.7L2.3 23L23 2.30011L20.7 0.000124467Z"
              fill="#0F0F17"
            />
          </svg>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              placeholder="Имя"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span>{errors.name}</span>}
          </div>

          <div className="form-group">
            <InputMask
              mask="+7 (___) ___-__-__"
              replacement={{ _: /\d/ }}
              placeholder="Телефон"
              value={form.phone}
              onChange={(e) =>
                setForm((p) => ({ ...p, phone: e.target.value }))
              }
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && <span>{errors.phone}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={(e) =>
                setForm((p) => ({ ...p, email: e.target.value }))
              }
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div className="form-group agreement">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={form.agreement}
                onChange={(e) =>
                  setForm((p) => ({ ...p, agreement: e.target.checked }))
                }
              />
              <span className="custom-checkbox__box" />
              <p>Я согласен (-а) на обработку персональных данных</p>
            </label>
            {errors.agreement && <span>{errors.agreement}</span>}
          </div>

          <button className="submit-btn">Отправить</button>
        </form>
      </div>
    </div>
  );
}
