import "./intro.scss";
import { ExpandMore } from "@mui/icons-material";

const Intro = () => {
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="Man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ayush Gupta</h1>
          <h3>Blockchain Developer</h3>
          <a href="#about">
            <ExpandMore fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;


