import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { emailSchema } from '@/lib/validation'
import React, { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { FaTelegram } from 'react-icons/fa'
import { z } from 'zod'

interface Props {
  contactForm: UseFormReturn<z.infer<typeof emailSchema>>
  onCreateContact: (values: z.infer<typeof emailSchema>) => void
}

const AddContact: FC<Props> = ({ contactForm, onCreateContact }) => {
  return (
    <div className='h-screen w-full flex z-40 realtive'>
      <div className='flex justify-center items-center z-50 w-full'>
        <div className='flex flex-col items-center gap-4 pl-5 pr-5'>
          <FaTelegram size={120} className='dark:text-blue-400 text-blue-500' />
          <h1 className='text-2xl font-semibold text-center'>Suhbatlashish uchun kontakt qo'shing</h1>
          <Form {...contactForm}>
            <form onSubmit={contactForm.handleSubmit(onCreateContact)} className="space-y-2 w-full">
              <FormField
                control={contactForm.control}
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
      </div>
    </div>
  )
}

export default AddContact