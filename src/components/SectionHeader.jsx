import './SectionHeader.css'

export default function SectionHeader(props) {
  const {title} = props;
  return (
    <>
      <h2 className="title">{title}</h2>
      <div className="separationBar"></div>
    </>
  );
}
