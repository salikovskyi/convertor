import css from "./Header.module.css";

export default function Header({ rates }) {
  const currentDate = new Date().toLocaleString("ua", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  return (
    <div className={css.header}>
      <h1 className={css.title}>Currency Converter</h1>
      <h1 className={css.subtitle}>
        Exchange rate for{" "}
        <span className={css.subtitle_data}>{currentDate}</span>
      </h1>
      <ul className={css.currency_list}>
        <li className={css.currency}>
          <h2>USD/EUR</h2>
          <p>{rates.USD}</p>
        </li>
        <li className={css.currency}>
          <h2>UAH/EUR</h2>
          <p>{rates.UAH}</p>
        </li>
        <li className={css.currency}>
          <h2>CHF/EUR</h2>
          <p>{rates.CHF}</p>
        </li>
        <li className={css.currency}>
          <h2>JPY/EUR</h2>
          <p>{rates.JPY}</p>
        </li>
        <li className={css.currency}>
          <h2>GBP/EUR</h2>
          <p>{rates.GBP}</p>
        </li>
      </ul>
    </div>
  );
}
