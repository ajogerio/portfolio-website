import Box from "./Box";
import "./SocialMediaBoxes.css";

export default function SocialMediaBoxes() {
  return (
    <div className="socialMediaBoxesContainer">
      <Box
        socialMedia="Instagram"
        socialMediaIcon={<i className="fa-brands fa-instagram"></i>}
        socialMediaUsername="@aaogerio"
      />
      <Box
        socialMedia="Instagram"
        socialMediaIcon={<i className="fa-brands fa-instagram"></i>}
        socialMediaUsername="@aaogerio"
      />
      <Box
        socialMedia="Instagram"
        socialMediaIcon={<i className="fa-brands fa-instagram"></i>}
        socialMediaUsername="@aaogerio"
      />
      <Box
        socialMedia="Instagram"
        socialMediaIcon={<i className="fa-brands fa-instagram"></i>}
        socialMediaUsername="@aaogerio"
      />
    </div>
  );
}
