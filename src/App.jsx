import NavigationBar from "./components/NavigationBar";
import HelloSection from "./components/HelloSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <HelloSection />
        <ProjectsSection />
        <ContactForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
