import { optSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { Input } from '@/components/ui/input'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { useAuth } from '@/hooks/use-auth'

const Verify = () => {
  const { email } = useAuth()

  const form = useForm<z.infer<typeof optSchema>>({
    resolver: zodResolver(optSchema),
    defaultValues: { email, opt: "" },
  })
  function onSubmit(values: z.infer<typeof optSchema>) {
    window.open('/', '_self')
  }
  return (
    <div className='w-full'>
      <p className='text-center text-muted-foreground text-sm'>
        We have sent you an email wih verification code to your email address. Please enter the code below.
      </p>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
      <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="info@email.com" {...field} className='h-10 bg-secondary w-full' disabled />
              </FormControl>
              <FormMessage className='text-xs text-red-500' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="opt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-time password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field} pattern={REGEXP_ONLY_DIGITS}>
                  <InputOTPGroup className='w-full'>
                    <InputOTPSlot index={0} className='w-full dark:bg-primary-foreground bg-secondary' />
                    <InputOTPSlot index={1} className='w-full dark:bg-primary-foreground bg-secondary' />
                    <InputOTPSlot index={2} className='w-full dark:bg-primary-foreground bg-secondary' />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup className='w-full'>
                    <InputOTPSlot index={3} className='w-full dark:bg-primary-foreground bg-secondary' />
                    <InputOTPSlot index={4} className='w-full dark:bg-primary-foreground bg-secondary' />
                    <InputOTPSlot index={5} className='w-full dark:bg-primary-foreground bg-secondary' />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage className='text-xs text-red-500'/>
            </FormItem>
          )}
        />
 
        <Button type="submit" className='w-full' size={'lg'}>Submit</Button>
      </form>
    </Form>
    </div>
  )
}

export default Verify