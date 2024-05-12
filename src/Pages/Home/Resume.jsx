
import resume from '../../img/farhanResume.pdf'

const Resume = (props) => {

  return (
    <div className="fixed inset-0 bg-opacity-50
     bg-gray-950  
    p-2 flex justify-center items-center z-50 ">
      <div className="  bg-white border-2 w-[100%]  md:ml-0 md:w-[60%] shadow-2xl rounded-lg p-2">
      <button className="  float-end rounded-sm  " onClick={() => props.setOpenResume(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

<div className=' mt-8 rounded-sm ' >
<embed src={resume} className=' rounded-md h-[400px] md:h-[650px] w-full '  type="application/pdf" />

</div>
     </div> 
    </div>
  )
}

export default Resume