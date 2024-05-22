import { YoutubeVideo } from "../../components";
import "./about-project.scss";

export const AboutProject = () => {
  return (
    <section className="aboutProject">
      <YoutubeVideo embedID="aM0Swf-zsw0?si=pVDHydKCDBvrlDij" />
      <div className="aboutProject__text">
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          sapiente sed eos neque nesciunt culpa obcaecati beatae!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
          architecto repellat facere numquam.
        </p>
      </div>
    </section>
  );
};
