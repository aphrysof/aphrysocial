import * as z from "zod";

export const signUpValidation = z.object({
    name: z.string().min(2, {message: "Too Short"}),
    username: z.string().min(2, {message: "Too Short"}),
    email: z.string(),
    password: z.string().min(8, {message: "Password not strong enough"})
  });

  export const signInValidation = z.object({
    email: z.string(),
    password: z.string().min(8, {message: "Password not strong enough"})
  });