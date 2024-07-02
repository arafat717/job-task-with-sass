import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import ApprodablePackages from "@/components/ApprodablePackages";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <ApprodablePackages></ApprodablePackages>f
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
}
