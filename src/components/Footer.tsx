import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {

  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          href: 'javascript:void()',
          name: 'Partners'
        },
        {
          href: 'javascript:void()',
          name: 'Blog'
        },
        {
          href: 'javascript:void()',
          name: 'Team'
        },
        {
          href: 'javascript:void()',
          name: 'Careers'
        },
      ]
    },
    {
      label: "Resources",
      items: [
        {
          href: 'javascript:void()',
          name: 'Contact'
        },
        {
          href: 'javascript:void()',
          name: 'Support'
        },
        {
          href: 'javascript:void()',
          name: 'Docs'
        },
        {
          href: 'javascript:void()',
          name: 'Pricing'
        },
      ]
    },
    {
      label: "About",
      items: [
        {
          href: 'javascript:void()',
          name: 'Terms'
        },
        {
          href: 'javascript:void()',
          name: 'License'
        },
        {
          href: 'javascript:void()',
          name: 'Privacy'
        },
        {
          href: 'javascript:void()',
          name: 'About Us'
        },
      ]
    },
    {
      label: "Newsletter",
      items: [
        {
          href: 'javascript:void()',
          name: 'Stay Up To Date'
        },
      ]
    }
  ];

  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <img src="./logo.png" className="w-32" alt="Logo" />
            <div pt-10>
              <div className="flex gap-2 items-center"> 
                <div className="text-[#FF5555]">
                  <CiMail />
                </div>
                <p className="text-black">help@frybix.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="text-[#FF5555]">
                  <FaPhoneAlt />
                </div>
                <p className="text-black">+123445667889</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
          {
            footerNavs.map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h4 className="text-gray-800 font-medium">
                  {item.label}
                </h4>
                {
                  item.items.map((el, idx) => (
                    <li key={idx}>
                      <a href={el.href} className="hover:underline hover:text-indigo-600">
                        {el.name}
                      </a>
                    </li>
                  ))
                }
                {item.label === "Newsletter" && (
                  <form onSubmit={(e) => e.preventDefault()} className="mt-4">
                    <div className='flex'>
                    <div className="relative">
                      <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-15 pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <button className=" w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow mt-2">
                      Subscribe
                    </button>
                    </div>
                  </form>
                )}
              </ul>
            ))
          }
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2022 uifry UI All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;
