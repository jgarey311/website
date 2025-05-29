import logo from "./assets/logo.png";
import Countdown from "./components/countdown/countdown";

function App() {
  return (
    <>
      <img src={logo} />
      <br />
      <div className="Text">
        <div className="p-4">
          <h2 className="text-2xl mb-4">Countdown to Launch</h2>
          <Countdown targetDate="2025-07-20T12:00:00Z" />
        </div>
      </div>
    </>
  );
}

export default App;
