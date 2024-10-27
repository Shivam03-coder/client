import Carouselimage from "@/components/image-crasoule";
import { AnimatedListDemo } from "@/components/shared/animatedlists";
import { AnimatedBeamDemo } from "@/components/shared/appshowcase";
import { BoxRevealcol } from "@/components/shared/boxmodel";
import Footer from "@/components/shared/footer";
import { MarqueeDemo } from "@/components/shared/marquee";
import { PublicNavbar } from "@/components/shared/navbar";
import Meteors from "@/components/ui/meteors";

const Home = () => {
  return (
    <div className="relative h-screen overflow-y-auto">
      <Meteors number={30} />
      <PublicNavbar />
      <div className="w-[95%] mx-auto grid grid-cols-2 place-items-center gap-5 pb-10">
        <BoxRevealcol />
        <Carouselimage />
      </div>
      <div className="w-full mx-auto grid grid-cols-1 place-items-center gap-5 py-10">
        <MarqueeDemo />
      </div>
      <div className="w-[95%] mx-auto grid grid-cols-2 place-items-center gap-5 py-10">
        <AnimatedListDemo />
        <AnimatedBeamDemo />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
