import Image from "next/image";
//icons
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
//image
import image1 from "../../public/images/testimonial.png";
//fonts
import {playFairDisplay, algreyaSans} from "./fonts"

export default function Card() {
  return (
    <div className="w-[95%] max-w-[300px] bg-[#005266] m-[1rem] rounded-[.5rem] shadow-[3px_3px_10px_1px_black] overflow-hidden ">
      <div className="w-100% h-[180px]">
        <Image
        className="h-[100%]"
            src={image1}
            alt="Testimonial website image"
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className="p-[1rem] flex-col-center flex-col gap-[.7rem]">
        <h3 className="text-[25px] text-white">Testimonial Grid</h3>
        <p className="text-[22px] text-white leading-5">
          <span className={algreyaSans.className}>This is a project about an NFT project that was preparing for launch</span>
        </p>
        <p className="text-[22px] text-white">
            <span className={algreyaSans.className}>
            <span className="mr-[5px]">HTML</span>| 
            <span className="ml-[5px]">CSS</span>
            </span>
        </p>
        <div className="flex justify-between text-white">
        <button className="card-button px-[25px]"><FaExternalLinkAlt className="text-[20px]" />Go Live</button>
          <button className="card-button px-[20px]"><FaGithub className="text-[20px]" />Code</button>
          
        </div>
      </div>
    </div>
  );
}
