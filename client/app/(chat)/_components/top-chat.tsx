import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useCurrentContact } from '@/hooks/use-current'
import { ArrowLeft, Settings2 } from 'lucide-react'
import React, { FC } from 'react'

interface Props {
  children?: React.ReactNode
}

const TopChat: FC<Props> = ({children}) => {
  const {currentContact} = useCurrentContact()

  return (
    <div className='w-full flex items-center justify-between sticky top-0 z-50 h-[8vh] p-2 border-b bg-background'>
      <div className='flex items-center'>
        {children}
        <Avatar className="z-40">
          <AvatarImage src={currentContact?.avatar} alt={currentContact?.email} className="object-cover"/>
          <AvatarFallback className="uppercase"> {currentContact?.email[0]} </AvatarFallback>
        </Avatar>
        <div className='ml-2'>
          <h2 className='font-medium text-sm'>{currentContact?.email}</h2>

          {/* Online or offline */}
          <p className='text-xs'>
            {/* <span className='text-green-500'>●</span> Online */}
            <span className='text-muted-foreground'>●</span> Offline
          </p>

          {/* Is typing */}
          {/* <div className='text-xs flex items-center gap-1 text-muted-foreground'>
            <p className='animate-pulse text-secondary-foreground line-clamp-1'>Hello world</p>
            <div className='w-1 h-1 bg-secondary-foreground rounded-full animate-bounce [animation-delay:-0.3]'></div>
            <div className='w-1 h-1 bg-secondary-foreground rounded-full animate-bounce [animation-delay:-0.10]'></div>
            <div className='w-1 h-1 bg-secondary-foreground rounded-full animate-bounce [animation-delay:-0.15]'></div>
          </div> */}
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button size={'icon'} variant={'secondary'}>
            <Settings2 />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle />
          </SheetHeader>
          <div className='mx-auto w-1/2 h-auto relative'>
            <Avatar className='w-full h-auto'>
              <AvatarImage src={currentContact?.avatar} alt={currentContact?.email} className='object-cover' />
              <AvatarFallback className='text-6xl uppercase'>{currentContact?.email[0]}</AvatarFallback>
            </Avatar>
          </div>

          <Separator className='mt-5' />

          <h1 className='text-center text-xl mt-2'>{currentContact?.email}</h1>

          <div className='flex flex-col space-y-1'>
            {currentContact?.firstname && (
              <div className='flex items-center gap-1 mt-4'>
                <p>First Name: </p>
                <p className='text-muted-foreground'>{currentContact?.firstname}</p>
              </div>
            )}
            {currentContact?.lastname && (
              <div className='flex items-center gap-1 mt-4'>
                <p>Last Name: </p>
                <p className='text-muted-foreground'>{currentContact?.lastname}</p>
              </div>
            )}
            {currentContact?.bio && (
              <div className='flex items-center gap-1 mt-4'>
                <p>Bio: </p>
                <p className='text-muted-foreground'>{currentContact?.bio}</p>
              </div>
            )}
          </div>

        </SheetContent>
      </Sheet>
    </div>
  )
}

export default TopChat