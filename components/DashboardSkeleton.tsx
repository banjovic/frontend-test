"use client";
import { Box, Skeleton } from "@mui/material";
import React from "react";

const DashboardSkeleton = () => {
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
          pb={3}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.2)",
              borderRadius: 3,
              p: 4,
              mx: "auto",
            }}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            textAlign='center'
            gap={2}
          >
            <Skeleton
              variant='circular'
              width={80}
              height={80}
              sx={{ mx: "auto" }}
            />
            <Skeleton
              variant='text'
              width='80%'
              height={80}
              sx={{ mx: "auto" }}
            />
            <Skeleton
              variant='text'
              width='50%'
              height={50}
              sx={{ mx: "auto" }}
            />
          </Box>

          <Skeleton variant='rectangular' width='80%' height={118} />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardSkeleton;
