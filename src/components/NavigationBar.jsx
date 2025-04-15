import './NavigationBar.css'

export default function NavigationBar() {
  return (
    <>
      <nav>
        <img className="logo" src="logo-white.png" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Resume</a></li>
        </ul>
      </nav>
    </>
  )
}