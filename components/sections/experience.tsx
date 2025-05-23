import userData from "@/data/userData";
import ExperienceCard from "../ui/experience-card";

const Experience = () => {
  const { experience } = userData;

  return (
    <div className="border-b border-border border-dashed">
      <div className="xl:border-x border-border border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 py-8 md:py-16">
        <div className="inline-flex items-center justify-center gap-1 font-normal tracking-tight text-xl">
          <h2 className="font-normal drop-shadow-xs text-xl md:text-3xl text-muted-foreground">
            Experience
          </h2>
        </div>
        <div className="flex flex-col justify-center gap4">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              id={exp.id}
              role={exp.role}
              companyName={exp.company}
              startDate={exp.startDate}
              endDate={exp.endDate}
              link={exp.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;