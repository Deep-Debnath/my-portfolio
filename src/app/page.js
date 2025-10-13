"use client";
import Hero from "./components/hero";
import { useState } from "react";
import Explore from "./components/intro";
import Logo from "./components/logos";

export default function Home() {
  const [open, setopen] = useState(true);
  return (
    <>
      <div>
        <Hero open={open}/>
        <Logo open={open}/>
        {open && <Explore setopen={setopen} open={open} />}
      </div>
    </>
  );
}
