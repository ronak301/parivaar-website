import Image from "next/image";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Main from "./components/Main";
import TimeLine from "./components/TimeLine";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <Main />
      <TimeLine />
      <ContactUs />
      <AboutUs />
    </main>
  );
}
