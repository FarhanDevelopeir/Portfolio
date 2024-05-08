import mypic from '../../img/mypic.jpg'

export default function AboutMe() {
  return (
    <div className='my-20 '>
      <h1 className="text-[35px] text-center mb-10">About Me</h1>
      <section id="AboutMe" className="flex flex-col sm:flex-row  sm:gap-20 w-[90%] md:w-[80%]  justify-center items-center m-auto">
      <div className=" w-[90%] sm:w-[40%] h-[300px] sm:h-[400px] shadow border-double   p-2 rounded-xl border-[#5e3bee] "  >
        <img src={mypic} alt="About Me" className='rounded-xl h-full   w-full'  />
      </div>
      <div className=" mt-10 w-[90%] sm:w-[40%] ">
        <div     className="">
          <p className="font-semibold text-xl pb-5">About</p>
          
          <p className="text-xl text-justify">
          I'm Muhammad Farhan, a React developer and front-end lover with an IT degree. I make cool websites that people enjoy using. I'm great at solving problems and writing clean code. Let's work together to build awesome web stuff!
          </p>
          <p className="hero--section-description">
          
          </p>
        </div>
      </div>
    </section>
    </div>

  );
}
