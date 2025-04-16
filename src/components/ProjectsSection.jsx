import ProjectsHeader from "./SectionHeader";
import ProjectCardsSection from "./ProjectsCardsSection";
import './ProjectsSection.css'

export default function ProjectsSection() {
  return (
    <>
      <div className="projectsSectionContainer">
        <ProjectsHeader title="Projects"/>
        <ProjectCardsSection />
      </div>
    </>
  );
}
