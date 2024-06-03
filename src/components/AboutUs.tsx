import aboutus from "../assets/aboutus.png"

const AboutUs= () => {
  return (
    <div>
       <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex lg:flex-col md:px-8">
                <div className='text-center'>
                  <span className='font-bold text-xl '>Testimonial</span>
                  <p className='text-gray-800 text-center font-bold w-96 text-6xl xl:text-5xl'>What our users say About Us?</p>
                </div>
                <div className=" mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
                  <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
                      <img src={aboutus} className="w-full mx-auto sm:w-10/12  lg:w-full" />
                  </div>
                  <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                      <h1 className="text-gray-800 font-bold text-2xl xl:text-5xl">
                            <p className="text-4xl pb-2" >The Best Financial Accounting App Ever! </p>
                      </h1>
                      <p className="text-gray-500 max-w-xl text-xl leading-relaxed sm:mx-auto lg:ml-0">
                          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
                      </p>

                      <p className="font-bold text-xl">Nick Jonas</p>
                    
                  </div>
                </div>
                
            </section>
    </div>
  )
}

export default AboutUs;

