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
        socialMedia="Facebook"
        socialMediaIcon={<i className="fa-brands fa-square-facebook"></i>}
        socialMediaUsername="@angelo.ogerio"
      />
      <Box
        socialMedia="GitHub"
        socialMediaIcon={<i className="fa-brands fa-square-github"></i>}
        socialMediaUsername="@ajogerio"
      />
      <Box
        socialMedia="Email"
        socialMediaIcon={<i className="fa-solid fa-envelope"></i>}
        socialMediaUsername="ogerioangelo9@gmail.com"
      />
    </div>
  );
}
