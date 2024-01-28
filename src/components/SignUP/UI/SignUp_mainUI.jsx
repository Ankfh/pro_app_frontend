import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { baseUrl } from "../../../BaseURl/BaseUrl";

const schema = yup.object().shape({
  name: yup.string().required("enter your name"),
  email: yup.string().required("enter your email"),
  password: yup.string().required("enter your password"),
});

const SignUpMian = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axios.post(`${baseUrl}/register`, data);
      console.log(response, "responseeeeeeeeee");
      reset();
    } catch (error) {
      console.log(error, "errrror");
    }

    // Perform form submission logic here
  };
  return (
    <div className="w-full flex justify-center items-center h-screen ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" border-2 border-red-700 justify-center items-center flex flex-col gap-4 p-7">
          <div className="flex  flex-col gap-4">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Name" type="text" />
              )}
            />
            <p>{errors.name?.message}</p>

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Email" type="text" />
              )}
            />
            <p>{errors.email?.message}</p>

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
              )}
            />
            <p>{errors.password?.message}</p>
          </div>
          <div className="">
            <Button type="submit" variant="contained">
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpMian;
