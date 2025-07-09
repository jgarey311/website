import Countdown from "./components/countdown/countdown";
import "./components/countdown/countdown.css";

function Store() {
  return (
    <>
      <h1 className="renders">Launch Date:</h1>
      <br />
      <Countdown targetDate={"09/08/2025"} />
    </>
  );
}
export default Store;
