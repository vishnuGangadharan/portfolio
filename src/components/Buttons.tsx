import { Button } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Buttons = () => {
  return (
    <div className='mt-14  md:mt-0'>

      <a
        href="https://www.linkedin.com/in/vishnu-p-b58b9828b/"
        target="_blank"
        rel="noopener noreferrer"
      >

        <Button
          radius="full"
          color="primary"
          className=" px-5 py-2"
        >
          <CiLinkedin size={20} color="white" />
          <span className="text-white text-sm tracking-wide ">LinkedIn</span>
        </Button>
      </a>

      <a
        href="https://github.com/vishnuGangadharan"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 inline-flex items-center"
      >
        <Button
          radius="full"
          variant="ghost"
          className="px-5 py-2 text-white border border-gray-300 hover:bg-gray-100"
        >
          <FaGithub size={20} color="white" />
          <span className="text-white text-md p-2 font-semibold tracking-wide">Github</span>
        </Button>
      </a>
    </div>
  )
}

export default Buttons
