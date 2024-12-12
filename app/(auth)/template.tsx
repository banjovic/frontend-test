"use client";
import { Box } from "@mui/material";
import React from "react";

const AuthTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full h-full bg-white pt-[72px] px-[14px] md:pt-[80px] md:pb-[117px] pb-[73px] flex justify-center  items-start'>
      <Box>HI</Box>

      <div className='relative z-10 w-full md:flex md:justify-center md:w-fit lg:space-x-[64px]'>
        <div className='relative z-10'>{children}</div>
      </div>
    </div>
  );
};

export default AuthTemplate;
