import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import ApprodablePackages from "@/components/ApprodablePackages";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurTeachers from "@/components/OurTeachers";

export default function Home() {
  return (
    <div style={{ maxWidth: "1440px", margin: "auto" }}>
      <Navbar></Navbar>
      <Banner></Banner>
      <ApprodablePackages></ApprodablePackages>
      <OurTeachers></OurTeachers>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}
