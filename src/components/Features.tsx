import { PiCubeTransparentLight } from "react-icons/pi";
import { LuSparkle } from "react-icons/lu";
import  img from "../assets/features.png"
import cube from "../assets/cube.png";

const Features = () => {
  return (
    <div>
       <section className=" mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
                <div className="flex-1 text-center  lg:mt-0 lg:ml-3">
                    <img src={img} className="w-full mx-auto sm:w-10/12  lg:w-full" />
                </div>
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
                      <span className="text-[#FF5555] text-xl ">Features</span>
                      <p className="font-black text-5xl text-black pb-5">Uifry Premium</p>     
                    </h1>
                    <div>
                      <div className="pb-5">
                        <div className="flex gap-2 font-bold text-[#FF5555] justify-start items-center">
                          <LuSparkle />
                          <p className="font-bold text-black">Budgeting Intervals</p>
                        </div>
                        <p className="text-gray-500">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                      </div>
                      <div className="pb-5">
                        <div className="flex gap-2 font-bold text-[#FF5555] justify-start items-center">
                          <img src={cube} className="w-4"></img>
                          <p className="font-bold text-black">Budgeting Intervals</p>
                        </div>
                        <p className="text-gray-500">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                      </div>
                      <div className="pb-5">
                        <div className="flex gap-2 font-bold text-[#FF5555] justify-start items-center">
                        <PiCubeTransparentLight />
                          <p className="font-bold text-black">Budgeting Intervals</p>
                        </div>
                        <p className="text-gray-500">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                      </div>
                    </div>
                </div>
         </section>
    </div>
  )
}

export default Features
