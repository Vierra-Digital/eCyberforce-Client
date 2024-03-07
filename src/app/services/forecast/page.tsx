import Forecast from "@/components/services/forecast/Forecast";
import Footer from "@/components/home/utils/Footer";
import Navbar from "@/components/home/utils/Navbar";

function Page() {
  return (
    <div>
      <Navbar />
      <Forecast />
      <Footer />
    </div>
  );
}

export default Page;
