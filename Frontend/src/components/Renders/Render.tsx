import RenderFront from "../../assets/Inital Render front.jpeg";
import RenderBack from "../../assets/Inital shirt render back.jpeg";
import "./Renders.css";

function Renders() {
  return (
    <div className="bannerRow">
      <img src={RenderBack} alt="Banner Part 1" />
      <img src={RenderFront} alt="Banner Middle" />
    </div>
  );
}

export default Renders;
