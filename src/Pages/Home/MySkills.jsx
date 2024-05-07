import data from "../../data/index.json";
import html from "../../img/html5-logo-31813.png";
import github from '../../img/github.jpeg'
import tailwind from '../../img/tailwind.jpeg'
import react from '../../img/pngwing.com.png'
import javascript from '../../img/javascript-39395.png'
import css from '../../img/pngwing.com (1).png'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import {scrollTrigger} from 'gsa'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function MySkills() {

  const box = useRef();


  
  
  return (
    <section id="MySkills" className="  w-[95%] m-auto  ">
      <div className=" text-center mb-20">
        <p className=" text-lg ">My Skills</p>
        <h2 className=" text-3xl  ">My Expertise</h2>
      </div>
      <div className="main relative m-auto  p-2 flex flex-col space-y-8 md:space-y-0 " ref={box}>
        {/* {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" style={{height:'40px'}}/>
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))} */}
        <div className=" absolute w-2 h-full md:m-auto bg-gray-300 border-2 border-purple-400 rounded-md left-9 md:left-0 z-0 inset-0 "></div>
        <div className="  z-10     ">
          <img
            src={html}
            className="h-16 bg-white xs:absolute md:relative md:m-auto w-16 rounded-full border-4 border-orange-400 p-1 shadow-md"
          />
          <div className="textbox1   relative pt-3 xs:pl-16 xs:pt-0  md:m-auto md:w-1/2 md:mr-0 md:-top-16 ">
            <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px] md:left-9 xs:top-5 bg-gray-200 rotate-45 inset-0"></div>
            <div className="     bg-gray-200 p-3 lg:w-[60%]  rounded-md xs:ml-3 shadow-md md:-ml-5 ">
              <h2 className=" text-purple-900">HTML</h2>
              Proficient in using HTML to structure and organize web content,
              ensuring accessibility and compatibility across various browsers
              and devices.
            </div>
          </div>
        </div>
        <div className="  z-10     ">
          <img
            src={css}
            className="h-16 bg-white xs:absolute md:relative md:m-auto w-16 rounded-full border-4 border-blue-700 p-1 shadow-md"
          />
          <div className="textbox2 relative pt-3 xs:pl-16 xs:pt-0 md:m-auto md:w-1/2 md:ml-0 md:-top-16 ">
            <div className="bg-gray-200 lg:w-[60%] md:float-end p-3 rounded-md xs:ml-3 shadow-md md:mr-16 ">
              <h2 className=" text-purple-900">CSS</h2>
              Skilled in CSS for designing visually appealing and responsive web
              layouts, with an emphasis on clean and maintainable code.
            </div>
            <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px]  xs:top-5 md:left-auto md:right-14  bg-gray-200 rotate-45 inset-0"></div>
          </div>
        </div>
        <div className="  z-10     ">
          <img
            src={javascript}
            className="h-16 bg-white xs:absolute md:relative md:m-auto w-16 rounded-full border-4 border-yellow-400 p-1 shadow-md"
          />
          <div className="textbox3 relative pt-3 xs:pl-16 xs:pt-0  md:m-auto md:w-1/2 md:mr-0 md:-top-16 ">
            <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px] md:left-9 xs:top-5 bg-gray-200 rotate-45 inset-0"></div>
            <div className="     bg-gray-200 p-3 lg:w-[60%]   rounded-md xs:ml-3 shadow-md md:-ml-5 ">
              <h2 className=" text-purple-900">JavaScript</h2>
              Experienced in JavaScript for implementing dynamic and interactive
              features on websites, enhancing user engagement and functionality.
            </div>
          </div>
        </div>
        <div className="  z-10     ">
          <img
            src={react}
            className="h-16 bg-white xs:absolute md:relative md:m-auto w-16 rounded-full border-4 border-cyan-500 p-1 shadow-md"
          />
          <div className="textbox4 relative pt-3 xs:pl-16 xs:pt-0 md:m-auto md:w-1/2 md:ml-0 md:-top-16 ">
            <div className="bg-gray-200 p-3 lg:w-[60%] md:float-end rounded-md xs:ml-3 shadow-md md:mr-16 ">
              <h2 className=" text-purple-900">React JS</h2>
              Adept at building modern, component-based web applications using
              React.js, with a focus on creating fast and seamless user
              interfaces.
            </div>
            <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px]  xs:top-5 md:left-auto md:right-14  bg-gray-200 rotate-45 inset-0"></div>
          </div>
        </div>
        <div className="  z-10     ">
          <img
            src={tailwind}
            className="h-16 bg-white xs:absolute md:relative md:m-auto w-16 rounded-full border-4 border-cyan-500 p-1 shadow-md"
          />
          <div className="textbox5 relative pt-3 xs:pl-16 xs:pt-0  md:m-auto md:w-1/2 md:mr-0 md:-top-16 ">
            <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px] md:left-9 xs:top-5 bg-gray-200 rotate-45 inset-0"></div>
            <div className="     bg-gray-200 p-3 lg:w-[60%]   rounded-md xs:ml-3 shadow-md md:-ml-5 ">
              <h2 className=" text-purple-900">Tailwind CSS</h2>
              Proficient in using Tailwind CSS to create modern, user-friendly
              website designs with simplicity and style.
            </div>
          </div>
        </div>
        <div className="  z-10     ">
          <img
            src={github}
            className="h-16 bg-white xs:absolute md:relative md:m-auto w-16 rounded-full border-4 border-black p-1 shadow-md"
          />
          <div className="textbox6 relative pt-3 xs:pl-16 xs:pt-0 md:m-auto md:w-1/2 md:ml-0 md:-top-16 ">
            <div className="bg-gray-200 p-3 lg:w-[60%] md:float-end  rounded-md xs:ml-3 shadow-md md:mr-16 ">
            <h2 className=" text-purple-900">GitHub</h2>
              Skilled in using GitHub for teamwork, sharing code, and keeping
              projects organized, making collaboration smooth and hassle-free.
            </div>
            <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px]  xs:top-5 md:left-auto md:right-14  bg-gray-200 rotate-45 inset-0"></div>
          </div>
        </div>
       
      </div>
    </section>
  );
}
