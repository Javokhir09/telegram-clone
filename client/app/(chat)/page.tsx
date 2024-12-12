'use client'

import ContactList from "./_components/contact-list"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import AddContact from "./_components/add-contact"
import { useCurrentContact } from "@/hooks/use-current"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { emailSchema } from "@/lib/validation"
import TopChat from "./_components/top-chat"
import Chat from "./_components/chat"

const HomePage = () => {
  const { currentContact } = useCurrentContact() 
  const router = useRouter()

  const contactForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  })

  useEffect(() => {
    router.replace('/')
  }, [])

  const onCreateContact = (values: z.infer<typeof emailSchema>) => {
    console.log(values)
  }

  return (
    <>
      {/* Side bar */}
      <div className="w-80 border-r fixed h-screen inset-0 z-50">
        <ContactList contacts={contacts} />
      </div>
      {/* Chat area */}
      <div className="pl-80 w-full">
        {/* Add contact */}
        {!currentContact?._id && <AddContact contactForm={contactForm} onCreateContact={onCreateContact} />}

        {/* Chat */}
        {currentContact?._id && 
          <div className="w-full relative">
            {/* Top chat */}
            <TopChat />

            {/* Chat messages */}
            <Chat />
          </div>
        }
      </div>
    </>
  )
}

const contacts = [
  {email: "john@email.com", _id: '1', avatar: "https://github.com/shadcn.png"},
  {email: "rick@email.com", _id: '2', avatar: "https://github.com/shadcn.png"},
  {email: "nick@email.com", _id: '3', avatar: "https://github.com/shadcn.png"},
  {email: "josh@email.com", _id: '4', avatar: "https://github.com/shadcn.png"},
  {email: "doe@email.com", _id: '5', avatar: "https://github.com/shadcn.png"},
  {email: "sarah@email.com", _id: '6', avatar: "https://github.com/shadcn.png"},
]

export default HomePage