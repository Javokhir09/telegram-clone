"use client"

import { z } from "zod"

export const emailSchema = z.object({
  email: z.string().email({message: "Invalid email address, please check and try again."}),
})

export const optSchema = z
  .object({opt: z.string().min(6, { message: "Your one-time password must be 6 characters." }),})
  .merge(emailSchema)

export const messageSchema = z.object({
  text: z.string().min(1, {message: 'Message can not be empty.'}),
  image: z.string().optional(),
})