import Balochistan from "./components/Balochistan";
import Gilgit from "./components/Gilgit";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Khyber from "./components/Khyber";
import Punjab from "./components/Punjab";
import Sindh from "./components/Sindh";

export default function Hom(){
  return (
    <div>
      <Header />
      <Hero />
      <Sindh />
      <Punjab />
      <Balochistan />
      <Gilgit />
      <Khyber />
    </div>
  )
}
