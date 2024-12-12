import { emailSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/hooks/use-auth'

const SignIn = () => {
  const { setEmail, setStep } = useAuth()

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  })
  function onSubmit(values: z.infer<typeof emailSchema>) {
    setStep('verify')
    setEmail(values.email)
  }
  return (
    <div className='w-full'>
      <p className='text-center text-muted-foreground text-sm'>
        Telegram is a cloud-based messaging app known for speed, security, and privacy.
      </p>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="info@email.com" {...field} className='h-10 bg-secondary' />
              </FormControl>
              <FormMessage className='text-xs text-red-500' />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full text-lg text-white' size={'lg'}>Submit</Button>
      </form>
    </Form>
    </div>
  )
}

export default SignIn