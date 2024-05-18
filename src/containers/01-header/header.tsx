// import { Navbar } from "../../components";
import "./header.scss";

export const Header = () => {
  return (
    <section className="header">
      {/* <Navbar /> */}
      <header>
        <div className="header-content">
          <h1>Lorem ipsum dolor sit amet</h1>
          <div className="header-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              officia voluptas temporibus, architecto neque eos beatae. At eaque
              iusto, ab molestiae voluptatibus hic earum obcaecati rerum, quis
              sint, nostrum explicabo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo enim
              pariatur, maiores explicabo delectus iusto.
            </p>
          </div>
        </div>
      </header>
    </section>
  );
};
