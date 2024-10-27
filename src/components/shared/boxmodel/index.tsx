import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import LetterPullup from "@/components/ui/letter-pullup";
import Link from "next/link";

export function BoxRevealcol() {
  return (
    <div className="size-full max-w-lg  items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#001F3F"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Coffee Shop HRM<span className="text-primary">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#001F3F"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          <LetterPullup
            className="text-base!"
            words={"HR Management System for"}
            delay={0.05}
          />
          <span className="text-primary text-4xl">Coffee Shops</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#001F3F"} duration={0.5}>
        <div className="mt-6 font-inter text-xl">
          <p>
            -&gt; Streamline your workforce management with features for
            employee scheduling, payroll, and performance tracking. <br />
            -&gt; Easy to use and customizable to meet the unique needs of your
            coffee shop. <br />
            -&gt; Enhance communication and collaboration among staff and
            management for a better work environment. <br />
            -&gt; Ensure compliance with labor laws and regulations, while
            prioritizing employee well-being.
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#001F3F"} duration={0.5}>
        <Link href={"/admin-dashboard"}>
          <Button className="mt-[1.6rem] text-secondary">DASHBOARD</Button>
        </Link>
      </BoxReveal>
    </div>
  );
}
