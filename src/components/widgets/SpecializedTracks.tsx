import Wrapper from '@/components/shared/Wrapper'
import{ specializedTracksData}  from '@/constants/Data'
import QuarterBox from '@/components/shared/QuarterBox'
import { it } from 'node:test'

const SpecializedTracks = () => {
  return (
    <section>
<Wrapper>
    
    {/* Header */}
    <div className=''>
    <h2 className='text-5xl font-bold whitespace-pre-line'>Specialized Tracks:</h2>
    <p className='mt-3 text-xl text-slate-600 '>After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
    </div>
    <div className='mt-10'>
    {/* Content left */}
<div className=' shadow-xl rounded-xl border border-slate-300 py-8 px-8'>
    <h4 className='text-lg font-semibold text-[#00616C]'>Specialized Program</h4>
    <h3 className='text-3xl font-bold '>Web 3.0 (Blockchain) and Metaverse Specialization</h3>
    <p className='text-xl text-slate-700 mt-4'>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
</p>
<button className='text-teal-800 text-xl mt-4 underline flex gap-x-2 items-baseline' >Learn More<svg width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2"/>
</svg>

</button>
<div>
  {
      specializedTracksData.map((item,id)=>{
        
       return (<QuarterBox 
        header={item.header}
        description={item.description}
        number={id+1}
        key={id}
       


        />)
      })
    }
</div>
</div>
    {/* Content Right */}
    </div>
</Wrapper>
    </section>
  )
}

export default SpecializedTracks