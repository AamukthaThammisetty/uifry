import { useEffect, useState } from 'react'

const  Header= () => {
 
    const [state, setState] = useState(false)

    const navigation = [
        { title: "Home", path: "javascript:void(0)" },
        { title: "About Us", path: "javascript:void(0)" },
        { title: "Pricing", path: "javascript:void(0)" },
        { title: "Features", path: "javascript:void(0)" }
    ]

    useEffect(() => {
      const handleClick = (e: MouseEvent) => {
          const target = e.target as HTMLElement;
          if (!target.closest(".menu-btn")) {
              setState(false);
          }
      };
  
      document.addEventListener("click", handleClick);
  
      return () => {
          document.removeEventListener("click", handleClick);
      };
  }, []);
  

    return (
        <nav className={`bg-white  py-7 font-Space font-bold  md:text-sm ${state ? "shadow-lg rounded-xl border mx-2 mt-2  md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                <div className="flex items-center justify-between py-5 md:block">
                    <a href="javascript:void(0)">
                        <img
                            src="./logo.png"
                            width={95}
                            height={50}
                            alt="Uifry logo"
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="menu-btn text-black hover:text-[#FF5555]"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                    <ul className="justify-center items-center space-y-6 md:flex md:space-x-6  md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-black hover:text-[#FF5555]">
                                        <a href={item.path} className="block text-lg">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                        <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-3 px-8 text-white font-medium bg-gray-800 hover:bg-[#FF5555] active:bg-gray-900 rounded-md md:inline-flex">
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header
