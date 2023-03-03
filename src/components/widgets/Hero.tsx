import Wrapper from "@/components/shared/Wrapper"
import Image from "next/image"
import HeroPoster from "@/components/assests/images/hero-poster.png"
function Hero() {
  return (
    <section >
    <Wrapper>
     <div className="flex bg-slate-100 items-center">
      {/* left side  */}
      <div className="flex-1">
        <h4 className="text-teal-700 font-semibold text-lg">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
        <h1 className="text-6xl font-bold mt-6 ">Certified Web 3.0 and Metaverse Developer</h1>
        <p className="mt-6 text-lg text-slate-600 ">
          A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
        </p>
        <button className="bg-[#00616C] text-white transition-shadow mt-6 rounded-full px-4 py-2 font-semibold">Learn More</button>
      </div>
      {/* right side  */}
      <div className="flex-1">
      <Image src={HeroPoster} alt='Hero Poster'>
         
      </Image>
      </div>
     </div>
    </Wrapper>
    </section>
  )
}

export default Hero