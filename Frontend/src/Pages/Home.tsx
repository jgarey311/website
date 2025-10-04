import Banner from "../components/Banner/Banner";
import Countdown from "../components/countdown/countdown";
import Renders from "../components/Renders/Render";

function Home() {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Banner />
        <br />

        <div className="parallaxSection">
          <br />
          <h1 className="renders">Launch Date:</h1>
          <br />
          <Countdown targetDate={"12/09/2025"} />
        </div>

        <div className="parallaxSection">
          <br />
          <h1 className="renders">Initial Renders</h1>
          <br />
          <Renders />
        </div>

        <div className="parallaxSection">
          <br />
          <h1 className="renders">News:</h1>
          <br />
          <Renders />
        </div>

        <div className="parallaxSection">{/* <Register /> */}</div>
      </div>
    </>
  );
}

export default Home;
