import ProjectsHeader from "./ProjectsHeader";
import ProjectCardsSection from "./ProjectsCardsSection";
import './ProjectsSection.css'

export default function ProjectsSection() {
  return (
    <>
      <div className="projectsSectionContainer">
        <ProjectsHeader />
        <ProjectCardsSection />
      </div>
    </>
  );
}
