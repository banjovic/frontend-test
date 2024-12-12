"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { useGetUserQuery } from "@/redux/auth/AuthService";
import { User } from "@/types/types";

const DashboardPage = () => {
  const params = useParams();
  console.log("params", params);

  const [userDetails, setUserDetails] = useState<User>();

  const { data, error, isLoading, isFetching } = useGetUserQuery(
    {
      user_id: params?.user_id as string,
    },
    { skip: !!userDetails }
  );
  console.log("data", data);

  useEffect(() => {
    const storedUser = localStorage.getItem("jointly-userDetails");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserDetails(parsedUser);
    }
  }, []);

  if (isLoading || isFetching) {
    return (
      <div className='p-8'>
        Loading
        {/* <div className='w-full h-16 flex items-center justify-center mt-40'>
            <LottieLoader animationData={LoadingAnimation} className='w-1/6' />
          </div> */}
      </div>
    );
  }

  if (error) {
    return <div className='px-8'>Error fetching user data. Try again</div>;
  }

  return (
    <Box width='100%' height='100vh'>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
        mx='auto'
      >
        <Box
          display='flex'
          flexDirection='column'
          gap={2}
          bgcolor='#F8F8F8'
          mx='auto'
          alignItems='center'
          justifyContent='center'
          width='70%'
          borderRadius={3}
          pb={2}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/login-bg.png') no-repeat center center`,
              backgroundSize: "cover",
              color: "white",
              fontFamily: "var(--font-public-sans)",
            }}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            textAlign='center'
            gap={4}
            borderRadius={3}
            p={4}
            mx='auto'
          >
            <Typography
              variant='h3'
              gutterBottom
              fontWeight={700}
              sx={{ fontFamily: "var(--font-public-sans)" }}
            >
              Welcome, John Doe
            </Typography>
            <Typography
              variant='body2'
              sx={{ fontFamily: "var(--font-public-sans)" }}
            >
              Super Admin
            </Typography>
          </Box>

          <Typography variant='subtitle1' textAlign='center' mx='auto' mb={2}>
            Korem ipsum dolor sit amet, consectetur adipiscing elit., Korem
            ipsum dolor sit amet, consectetur adipiscing elit., Korem ipsum
            dolor sit amet, consectetur adipiscing elit. Korem ipsum dolor sit
            amet, consectetur adipiscing elit.,Korem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
