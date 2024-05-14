import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white p-10 space-y-6 shadow-md rounded-md max-h-[85vh] overflow-y-auto">
      <h2 className="text-2xl text-center font-semibold">About me</h2>
      <div>
        <p>
          Hi, I'm <span className="font-semibold">Vicky Herdiansyah Adri</span>. I'm passionate in frontend development
          and committed to continuously expanding my knowledge and skills in frontend development, delivering clean
          code, and learning new technology. I also participate in the development process, ensure responsive design,
          consume APIs, and optimal user experience. Currently, I'm learning backend development, especially Golang.
        </p>
        <p>
          Here is my personal website:{" "}
          <Link className="underline text-blue-800" to="https://vickyadrii.my.id" target="_blank">
            vickyadrii.my.id
          </Link>
        </p>
      </div>
    </div>
  );
};

export default About;
