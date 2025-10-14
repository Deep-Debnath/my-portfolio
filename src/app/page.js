"use client";
import Hero from "./components/hero";
import { useEffect, useState } from "react";
import Explore from "./components/intro";
import Logo from "./components/logos";

export default function Home() {
  const [open, setopen] = useState(true);
  useEffect(() => {
    setopen(false);
  }, [open]);
  return (
    <>
      <div>
        <Hero open={open} />
        <Logo open={open} />
        {open && <Explore setopen={setopen} open={open} />}
      </div>
    </>
  );
}
