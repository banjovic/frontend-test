"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Typography,
  Link,
  TextField,
  Stack,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { useSignupMutation } from "@/redux/auth/AuthService";

type FormValueType = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  organization_name: string;
};

const SignupPage = () => {
  const router = useRouter();

  const [signup, { isLoading, data, error }] = useSignupMutation();

  const [formValues, setFormValues] = useState<FormValueType>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    organization_name: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const isFormValid = Object.values(formValues).every((fieldValue) =>
    fieldValue.trim()
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      await signup(formValues);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error(error);
    }
  };

  useEffect(() => {
    if (data && data.data.id) {
      toast.success(data.message);

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
      <Box
        width={{ xs: "80%", md: 520 }}
        height={{ md: 500, xl: "100%" }}
        sx={{ overflowY: "auto" }}
        paddingX={2}
        paddingY={4}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            height: "100%",
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
              Create Account
            </Typography>
            <Typography
              variant='body2'
              sx={{ fontFamily: "var(--font-public-sans)" }}
              fontWeight={400}
              color='secondary'
            >
              Enter your information to create an account.
            </Typography>
          </Stack>

          <Box display='flex' flexDirection='column' gap={2} mb={2}>
            <Box
              display='flex'
              flexDirection={{ base: "column", md: "row" }}
              justifyContent='start'
              gap={2}
            >
              <Stack gap={1} width={{ base: "100%", md: "50%" }}>
                <Typography
                  variant='subtitle1'
                  sx={{ fontFamily: "var(--font-inter)" }}
                  fontWeight={500}
                >
                  First name
                </Typography>
                <TextField
                  fullWidth
                  label=''
                  placeholder='Max'
                  variant='outlined'
                  name='first_name'
                  value={formValues.first_name}
                  onChange={handleChange}
                />
              </Stack>

              <Stack gap={1} width={{ base: "100%", md: "50%" }}>
                <Typography
                  variant='subtitle1'
                  sx={{ fontFamily: "var(--font-inter)" }}
                  fontWeight={500}
                >
                  Last name
                </Typography>
                <TextField
                  fullWidth
                  label=''
                  placeholder='Min'
                  variant='outlined'
                  name='last_name'
                  value={formValues.last_name}
                  onChange={handleChange}
                />
              </Stack>
            </Box>

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
              <Typography
                variant='subtitle1'
                sx={{ fontFamily: "var(--font-inter)" }}
                fontWeight={500}
              >
                Phone Number
              </Typography>
              <TextField
                fullWidth
                label=''
                placeholder='7077777777'
                id='outlined-start-adornment'
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start'>+234</InputAdornment>
                    ),
                  },
                }}
                name='phone_number'
                value={formValues.phone_number}
                onChange={handleChange}
              />
            </Stack>

            <Stack gap={1}>
              <Typography
                variant='subtitle1'
                sx={{ fontFamily: "var(--font-inter)" }}
                fontWeight={500}
              >
                Organizational name
              </Typography>
              <TextField
                fullWidth
                label=''
                placeholder=''
                variant='outlined'
                name='organization_name'
                value={formValues.organization_name}
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
                >
                  <Link href='#'>Forgot your password?</Link>
                </Typography>
              </Box>

              <FormControl variant='outlined' fullWidth>
                <OutlinedInput
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label=''
                  name='password'
                  value={formValues.password}
                  onChange={handleChange}
                />
              </FormControl>
            </Stack>
          </Box>

          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            disabled={isLoading || !isFormValid}
          >
            {isLoading ? <CircularProgress size={24} /> : "Create an account"}
          </Button>

          <Typography variant='body2' textAlign='center'>
            Already have an account? <Link href='/login'>Sign in</Link>
          </Typography>

          <Typography variant='body2' textAlign='center' color='#6C6C6C'>
            By signing up, I agree to the{" "}
            <Link href='/#' color='#6C6C6C'>
              terms of use
            </Link>{" "}
            and{" "}
            <Link href='/#' color='#6C6C6C'>
              privacy policy
            </Link>
          </Typography>
        </form>
      </Box>
    </Box>
  );
};

export default SignupPage;
