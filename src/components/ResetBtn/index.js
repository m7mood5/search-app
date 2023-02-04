import "./reset.css";
function ResetBtn({ restHandler }) {
  return (
    <>
      <button onClick={restHandler} className="side-btn">
        Reset All
      </button>
    </>
  );
}

export default ResetBtn;
