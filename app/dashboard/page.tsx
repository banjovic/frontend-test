"use client";
import React, { Suspense, useEffect } from "react";
import toast from "react-hot-toast";
import { Box, Typography } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";

import DashboardSkeleton from "@/components/DashboardSkeleton";
import { useGetUserQuery } from "@/redux/dashboard/DashboardService";

const DashboardPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const user_id = searchParams.get("user_id");
  console.log("user_id", user_id);

  const { data, error, isLoading, isFetching } = useGetUserQuery(
    { user_id: user_id as string },
    { skip: !user_id }
  );
  console.log("data", data);

  useEffect(() => {
    const token = localStorage.getItem("frontend-interview-token");
    if (!token) {
      toast.success("Kindly log in again");
      router.push("/login");
    }
  }, [router]);

  if (isLoading || isFetching) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return (
      <Box className='px-8' height='100vh'>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          Error fetching user data. Try again
        </Box>
      </Box>
    );
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

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardPageContent />
    </Suspense>
  );
}
