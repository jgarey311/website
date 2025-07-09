import bannerPart1 from "../../assets/Banner 1.jpeg";
import bannerMiddle from "../../assets/Banner middle.jpeg";
import bannerEnd from "../../assets/Banner end.jpeg";
import "./Banner.css";

function Banner() {
  return (
    <div className="bannerRow">
      <img src={bannerPart1} alt="Banner Part 1" />
      <img src={bannerMiddle} alt="Banner Middle" />
      <img src={bannerEnd} alt="Banner End" />
    </div>
  );
}

export default Banner;
