import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
  import { ToastContainer, toast } from 'react-toastify';


export default function Home() {
  return (
    <>
    <ToastContainer theme="dark"/>
      <Header />
      <Hero />
      <BlogList />
      <Footer />
    </>
  );
}
