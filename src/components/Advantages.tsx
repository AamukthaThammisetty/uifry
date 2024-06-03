import { FaRegBell } from "react-icons/fa";
import advantages from "../assets/advantages.png"
const Advantages = () => {
  return (
    <div>
       <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
                    <p className="text-[#FF5555] text-2xl">Advantages</p>
                    <p className="text-black text-6xl">why choose Uifry?</p>
                    <div className="flex pb-6 pt-8 text-white">
                      <div className=" rounded-full text-2xl flex items-center justify-center w-10 bg-[#FF5555]"><FaRegBell /></div>
                      <p className="bg-white text-black pl-4 text-4xl">Clever Notifications</p>
                    </div>
                    </h1>
                    <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto text-xl lg:ml-0">
                    Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
                    </p>
                   
                </div>
                <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
                    <img src={advantages} className="w-full mx-auto sm:w-10/12  lg:w-full" />
                </div>
            </section>
    </div>
  )
}

export default Advantages
