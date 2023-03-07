import Wrapper from "@/components/shared/Wrapper"
import Image from "next/image"
import HeroPoster from "@/components/assests/images/hero-poster.png"
// componetns
import  Button from  "@/components/shared/button"
function Hero() {
  return (
    <section >
    <Wrapper>
     <div className="flex flex-col md:flex-row bg-slate-100 items-center">
      {/* left side  */}
      <div className="flex-1 ">
        <h4 className="text-teal-700 font-semibold text-lg mt-4">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
        <h1 className="text-5xl sm:text-6xl font-bold mt-6 ">Certified Web 3.0 and Metaverse Developer</h1>
        <p className="mt-6 text-lg text-slate-600 ">
          A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
        </p>
        <div className="mt-6"
        >  <Button 
        text="Enroll Now"
        /></div>
      
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