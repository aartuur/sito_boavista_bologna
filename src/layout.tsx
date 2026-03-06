import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return <>{children}</>;
}