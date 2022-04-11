import css from "./Currency.module.css";
import PropTypes from "prop-types";

export default function CurrencyInp(props) {
  return (
    <div className={css.group}>
      <input
        type="text"
        value={props.amount}
        onChange={(ev) => props.onAmountChange(ev.target.value)}
      />
      <select
        value={props.currency}
        onChange={(ev) => props.onCurrencyChange(ev.target.value)}
      >
        {props.currencies.map((currency) => (
          <option value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
}

CurrencyInp.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
};
