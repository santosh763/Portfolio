import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Software Developer Intern",
    company: "Interface Software Solution",
    date: "2020 - 2021",
    responsibilities: [
      "Supported development of internal web tools.",
      "Worked on UI fixes and bug resolutions.",
      "Learned fundamentals of software development lifecycle.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "LTIMindtree",
    date: "2021 - Present",
    responsibilities: [
      "Developing scalable web apps with React.",
      "Working on internal tools like QuickMigrate CLI.",
      "Improving UI performance and user experience.",
      "Collaborating on full-stack features with Node.js and PostgreSQL.",
    ],
  },
  {
    job: "Full-Stack Developer (Personal Projects)",
    company: "Self-initiated",
    date: "2022 - Present",
    responsibilities: [
      "Built LoveSpark – a relationship-focused web app.",
      "Developing Let's Crackit – a MERN app for exam prep.",
      "Worked on GIS-based tools with PostGIS and React.",
    ],
  },
];



const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
