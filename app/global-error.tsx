"use client";

import { Button, Stack, Typography } from "@mui/material";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className='flex flex-col gap-2 items-center justify-center mx-auto w-full h-full pt-20'>
          <Typography className='flex flex-col gap-2 items-center justify-center'>
            Error 404
          </Typography>

          <Stack className='flex flex-row gap-2'>
            <Typography>Something went wrong. Kindly try again</Typography>

            <div className='w-1/3'>
              <Button
                variant='contained'
                sx={{
                  fontSize: "18px",
                }}
                onClick={() => reset()}
                fullWidth
                color='primary'
              >
                Try again
              </Button>
            </div>
          </Stack>
        </div>
      </body>
    </html>
  );
}
