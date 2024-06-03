import { FaApple } from "react-icons/fa";
import download from "../assets/download.png"
const DownloadPage = () => {
  return (
    <div className='relative'>
      <div className='p-32 relative'>
        <img src={download} className="w-full" alt="Download" />
        <div className="absolute inset-0 flex flex-col items-start   justify-center text-center p-40">
          <h1 className="text-4xl font-extrabold  text-white">Ready To Get Started?</h1>
          <p className="text-xl text-white">Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.</p>
          <button className="bg-white text-black font-bold  flex items-center gap-2 mt-4 px-4 py-2 rounded">Download App <FaApple /></button>
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
