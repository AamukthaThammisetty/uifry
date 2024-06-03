import home from "../assets/hero1.png"
import home2 from "../assets/hero2.png"
import { FaArrowRight } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
       <section className="mx-auto max-w-screen-xl pb-4 pr-0 pl-4 items-center lg:flex md:pl-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-gray-800 font-bold pt-16 text-5xl xl:text-5xl">
                      <span className="text-black text-6xl  w-60">Make The Best Financial Decisions</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.                    </p>
                    <div className='flex'>
                      <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-md md:inline-flex">
                              Get Started
                              <FaArrowRight />
                      </a>
                      
                      <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 t  text-gray-700 hover:text-gray-900">
                             
                      <FaRegCirclePlay />
                              Watch Video
                      </a>

                    </div>
                    <div>
                      <img src={home} className="w-full mx-auto sm:w-10/12  lg:w-full" />
                      
                    </div>

                   
                </div>
                <div className="flex-1 text-center lg:mt-0 lg:ml-3">
                    <img src={home2} className="w-full mx-auto sm:w-10/12 h-800  " />
                </div>
            </section>
    </div>
  )
}

export default Home
