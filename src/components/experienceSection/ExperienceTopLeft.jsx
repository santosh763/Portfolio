import ExperienceInfo from "./ExperienceInfo";
import { calculateExperience } from "./calculateExperience";

const ExperienceTopLeft = () => {
  // Internship start date (6 months before Feb 21, 2022)
  const experienceStartDate = "2021-08-21";

  const totalExperience = calculateExperience(experienceStartDate);

  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2021
      </p>

      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number={totalExperience} text="Years" />
      </div>

      <p className="text-center">
        With {totalExperience} years of experience building dynamic and
        user-friendly web applications.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;