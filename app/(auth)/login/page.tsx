"use client";
import React, { useState } from "react";
import { Button, Box, Typography, Link, TextField, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

type FormValueType = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  const [formValues, setFormValues] = useState<FormValueType>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    console.log("Form Submitted", formValues);
    router.push("/dashboard");
  };

  return (
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
      <Box width={{ base: "60%", md: 520 }}>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Stack mb={2}>
            <Typography
              variant='h4'
              sx={{
                textAlign: "start",
                fontFamily: "var(--font-public-sans)",
              }}
              fontWeight={600}
            >
              Welcome Back!
            </Typography>
            <Typography
              variant='body2'
              sx={{ fontFamily: "var(--font-public-sans)" }}
              fontWeight={400}
              color='secondary'
            >
              Enter your email below to login to your account
            </Typography>
          </Stack>

          <Stack gap={1}>
            <Typography
              // variant='subtitle1'
              fontSize={18}
              sx={{ fontFamily: "var(--font-inter)" }}
              fontWeight={500}
            >
              Email
            </Typography>
            <TextField
              fullWidth
              label=''
              placeholder='m@example.com'
              variant='outlined'
              name='email'
              value={formValues.email}
              onChange={handleChange}
            />
          </Stack>

          <Stack gap={1}>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography
                // variant='subtitle1'
                fontSize={18}
                sx={{ fontFamily: "var(--font-inter)" }}
                fontWeight={500}
              >
                Password
              </Typography>
              <Typography
                variant='body2'
                sx={{ fontFamily: "var(--font-inter)" }}
                fontWeight={500}
              >
                <Link href='#'>Forgot your password?</Link>
              </Typography>
            </Box>
            <TextField
              fullWidth
              label=''
              variant='outlined'
              type='password'
              name='password'
              value={formValues.password}
              onChange={handleChange}
            />
          </Stack>

          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleSubmit}
          >
            Login
          </Button>
          <Button variant='outlined' fullWidth>
            Login with Google
          </Button>

          <Typography variant='body2' textAlign='center'>
            Don&apos;t have an account? <Link href='/signup'>Sign up</Link>
          </Typography>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
