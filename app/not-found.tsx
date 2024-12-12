"use client";

import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className='flex h-full flex-col items-center justify-center gap-6 my-auto mx-auto pt-32'>
      <Stack>
        <Typography>Could not find page.</Typography>
      </Stack>

      <div className='w-1/3'>
        <Button
          variant='contained'
          sx={{
            fontSize: "18px",
          }}
          onClick={() => router.back()}
          color='primary'
          fullWidth
        >
          Go back
        </Button>
      </div>
    </main>
  );
}
