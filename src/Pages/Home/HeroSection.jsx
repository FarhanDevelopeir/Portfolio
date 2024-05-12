import { useState } from "react";
import Resume from "./Resume";

export default function HeroSection() {

  const [openResume, setOpenResume] = useState(false)

  const handleResume = () => {
   setOpenResume(true)
  }

  return (
   <div className=" z-10 bg-[#f5fcff] pt-36 md:pt-40 pb-20">
       <section id="heroSection" className=" flex items-center  w-[85%] m-auto justify-between  ">
      <div className="  lg:w-[50%]  lg:text-left  ">
        <div className="">
          <p className=" font-semibold text-2xl">Assalamoalaikum! I'm Muhammad Farhan</p>
          
            <p className=" text-[40px] md:text-[50px] font-semibold py-5">React <br/> Developer</p>
          
           {/* <span  > Developer</span> */}
         
          <p className="text-[15px] lg:text-xl">
          Experienced React developer dedicated to transforming design concepts into functional web solutions.
            <br /> 
          </p>
          <button className="btn btn-github mt-7" onClick={handleResume}>
            View Resume
          </button>
        </div>
        {/* <button className="btn btn-primary">Get In Touch</button> */}
      </div>
      <div className=" hidden lg:block h-[450px]  ">
        <img src="./img/mainpic.png" alt="Hero Section" className="h-full" />
      </div>
    </section>
    {openResume && <Resume setOpenResume={setOpenResume} />}
   </div>
  );
}
