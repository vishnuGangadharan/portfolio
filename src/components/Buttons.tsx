import React from 'react'
import {Button} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Buttons = () => {
  return (
    <div >
    <Button
      radius="full"
      color="primary"
      className=" px-5 py-2"
    >
      <CiLinkedin size={20} color="white" />
      <span className="text-white text-sm">LinkedIn</span>
    </Button>
    <Button
      radius="full"
      variant="ghost"
      className="ml-4 px-5 py-2 text-white border border-gray-300 hover:bg-gray-100"
    >
      <FaGithub size={20} color="white" />
      <span className="text-white text-md p-2 font-semibold ">Github</span>
    </Button>
  </div>
  )
}

export default Buttons
