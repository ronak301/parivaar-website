import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Main from "./components/Main";
import TimeLine from "./components/TimeLine";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main>
      <Analytics />
      <Navbar />
      <HomePage />
      <Main />
      <TimeLine />
      <ContactUs />
      <AboutUs />
    </main>
  );
}
