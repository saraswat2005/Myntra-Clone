import "./cardvalue.css";
export const Cartvalue = ({ value, setDecrease, setincrease }) => {
  return (
    <div className="val">
      <button onClick={() => setDecrease()} className="dec countdown">
        -
      </button>
      <span className="value countdown">{value}</span>
      <button onClick={() => setincrease()} className="dec countdown">
        +
      </button>
    </div>
  );
};
