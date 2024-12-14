import MessageCard from '@/components/cards/message.card'
import ChatLoading from '@/components/loadings/chat.loading'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { messageSchema } from '@/lib/validation'
import { Paperclip, Send, Smile } from 'lucide-react'
import React, { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

interface Props{
  onSendMessage: (value: any) => void
  messageForm: UseFormReturn<z.infer<typeof messageSchema>>
  close: boolean
}

const Chat: FC<Props> = ({onSendMessage, messageForm, close}) => {
  return (
    <div className={cn('flex flex-col justify-end z-40 min-h-[92svh] max-sm:min-h-[91svh]', close === false ? "w-0" : "w-full")}>
      {/* Loading */}
      {/* <ChatLoading /> */}

      {/* Messages */}
      {/* <MessageCard isReceived /> */}

      {/* Start conversation */}
      {/* <div className='w-full h-[88vh] flex items-center justify-center'>
        <div className='text-[100px] cursor-pointer' onClick={() => onSendMessage({text: '👋'})}>👋</div>
      </div> */}

      {/* Message input */}
      <Form {...messageForm}>
        <form onSubmit={messageForm.handleSubmit(onSendMessage)} className='w-full relative flex'>
          <Button size={'icon'} type='button' variant={'secondary'} className='rounded-none size-11 transition-all'>
            <Paperclip />
          </Button>
          <FormField
            control={messageForm.control}
            name='text'
            render={({field}) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input
                    className='bg-secondary h-11 rounded-none focus-visible:ring-0'
                    placeholder='Write a message...'
                    defaultValue={field.value}
                    onBlur={() => field.onBlur()}
                    onChange={(e) => field.onChange(e.target.value)}
                   />
                </FormControl>
              </FormItem>
            )}
          />
          <Button size={'icon'} type='button' variant={'secondary'} className='rounded-none size-11'>
            <Smile />
          </Button>
          <div className={cn("transition-all duration-300 overflow-hidden", messageForm.watch('text').trim() ? "w-12" : "w-0")}>
            <Button size={'icon'} className='rounded-none size-11' type='submit'>
              <Send fill='white' stroke='none' />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default Chat