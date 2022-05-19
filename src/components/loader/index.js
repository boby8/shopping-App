import "./index.css";
const Spinner = ({ size, color, visible }) => {
  if (!visible) return null;
  return (
      
    <div className="container">
        <div className="wrapper">
    <div
      className="loader"
      style={{ width: size, height: size, borderTopColor: color }}
    ></div>
    </div>
    </div>
  );
};

export default Spinner;
