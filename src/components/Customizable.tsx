import { LuSparkle } from "react-icons/lu";
import customize from "../assets/customizable.png"
const customizable= () => {
  return (
    <div>
       <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
                <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
                    <img src={customize}className="w-full mx-auto sm:w-10/12  lg:w-full" />
                </div>
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="font-bold flex text-3xl xl:text-3xl">
                          <div className=" rounded-full text-2xl  text-white flex items-center justify-center w-9 bg-[#FF5555]">
                            <LuSparkle />
                          </div>
                          <p className="text-black pl-4">Fully Customizable</p>
                    </h1>
                    <p className="text-gray-500 max-w-xl text-xl leading-relaxed sm:mx-auto lg:ml-0">
                    Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
                    </p>
                   
                </div>
                
            </section>
    </div>
  )
}

export default customizable;
