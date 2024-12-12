"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Typography,
  Link,
  TextField,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { useLoginMutation } from "@/redux/auth/AuthService";
import { setUserCredentials } from "@/redux/auth/AuthSlice";

type FormValueType = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [login, { isLoading, data, error }] = useLoginMutation();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await login(formValues);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error(error);
    }
  };

  useEffect(() => {
    if (data && data.data.id) {
      toast.success(data.message);
      dispatch(setUserCredentials(data));

      router.push(`/dashboard?user_id=${data.data.id}`);
    }
  }, [data]);

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
      <Box width={{ xs: "80%", md: 520 }}>
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
              variant='subtitle1'
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
              gap={1}
              width='100%'
            >
              <Typography
                variant='subtitle1'
                sx={{ fontFamily: "var(--font-inter)" }}
                fontWeight={500}
              >
                Password
              </Typography>

              <Typography
                variant='body2'
                sx={{ fontFamily: "var(--font-inter)" }}
                fontWeight={500}
                textAlign='end'
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
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            disabled={isLoading || !formValues.email || !formValues.password}
            sx={{ mt: 2 }}
          >
            {isLoading ? <CircularProgress size={24} /> : "Login"}
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
