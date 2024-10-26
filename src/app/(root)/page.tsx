import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <Button>
      <Link href="/dashboard">DASHBOARD</Link>
    </Button>
  );
};

export default Home;
