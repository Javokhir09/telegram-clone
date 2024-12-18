'use client'

import { IUser } from '@/types'
import React, { FC } from 'react'
import Settings from './settings'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useCurrentContact } from '@/hooks/use-current'

interface Props {
  contacts: IUser[]
  setClose: React.Dispatch<React.SetStateAction<boolean>>
}

const ContactList: FC<Props> = ({ contacts, setClose }) => {
  const router = useRouter()
  const {currentContact, setCurrentContact} = useCurrentContact()

  const renderContacts = (contact: IUser) => {
    const onChat = () => {
      if (currentContact?._id === contact._id) return
      console.log('chatting with', contact.email)
      setCurrentContact(contact)
      router.push(`/?chat=${contact._id}`)
      setClose(true)
    }

    return (
      <div
        className={cn(
          "flex justify-between items-center cursor-pointer hover:bg-secondary/50 p-2 w-auto",
          currentContact?._id === contact._id && "bg-secondary/50"
        )}
        onClick={onChat}
      >
        <div className="flex items-center gap-2">
          <div className="relative">
            <Avatar className="z-40">
              <AvatarImage src={contact.avatar} alt={contact.email} className="object-cover"/>
              <AvatarFallback className="uppercase"> {contact.email[0]} </AvatarFallback>
            </Avatar>
            <div className="size-3 bg-green-500 absolute rounded-full bottom-0 right-0 !z-40" />
          </div>
          <div>
            <h2 className="capitalize line-clamp-1 text-sm text-blue-400">
              {contact.email.split("@")[0]}
            </h2>
            <p className="text-muted-foreground text-xs">No messages yet</p>
          </div>
        </div>
        <div className="self-end">
          <p className="text-xs text-muted-foreground">16:48</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Top bar */}
      <div className='flex items-center bg-background pl-2 sticky top-0'>
        <Settings />
        <div className='m-2 w-full'>
          <Input className='bg-secondary' type='text' placeholder='Search...' />
        </div>
      </div>

      {/* Contacts */}

      {contacts.map(contact => (
        <div key={contact._id}>{renderContacts(contact)}</div>
      ))}
    </>
  )
}

export default ContactList