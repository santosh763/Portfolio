import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m a passionate MERN stack developer with a strong foundation in
        frontend development, especially React. I love building intuitive user
        interfaces and real-world web applications that solve real problems.
        With over 4 years of experience in the tech industry, I’ve worked on
        projects ranging from internal tools like QuickMigrate CLI to engaging
        apps like LoveSpark and AutoCare Hub. I specialize in React, Tailwind
        CSS, Node.js, and MongoDB, and I’m constantly exploring new tools and
        technologies to stay sharp and innovative. I believe in learning by
        doing—whether it’s contributing to full-stack projects, mentoring peers,
        or building open-source tools. When I’m not coding, I enjoy sharing
        knowledge, exploring tech trends, and working on passion projects that
        push my limits. Let’s build something amazing together!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
