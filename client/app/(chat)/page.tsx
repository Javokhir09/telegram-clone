'use client'

import ContactList from "./_components/contact-list"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import AddContact from "./_components/add-contact"
import { useCurrentContact } from "@/hooks/use-current"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { emailSchema, messageSchema } from "@/lib/validation"
import TopChat from "./_components/top-chat"
import Chat from "./_components/chat"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileX } from "lucide-react"
import { IUser } from "@/types"

const HomePage = () => {
  const { currentContact } = useCurrentContact() 
  const router = useRouter()

  const contactForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  })

  const messageForm = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: { text: "", image: "" },
  })

  useEffect(() => {
    router.replace('/')
  }, [])

  const onCreateContact = (values: z.infer<typeof emailSchema>) => {
    console.log(values)
  }

  const onSendMessage = (values: z.infer<typeof messageSchema>) => {
    console.log(values)
  }

  const [close, setClose] = useState(true)
  const {setCurrentContact} = useCurrentContact()

  const closeBtn = () => {
    return (
      <Button
        variant={"secondary"}
        size={"icon"}
        className="mr-2 rounded-full"
        onClick={() => {
          setClose(false);
          router.push('/');
          setCurrentContact(null);
        }}
      >
        <ArrowLeft />
      </Button>
    );
  }

  return (
    <>
      {/* Side bar */}
    <div className={cn("w-80 border-r fixed h-screen inset-0 z-50 max-sm:w-full transition-all duration-300 overflow-hidden whitespace-nowrap", currentContact?._id && "max-sm:w-0 max-sm:overflow-hidden", close === false && "max-sm:w-full max-sm:overflow-hidden")}>
        {contacts.length === 0 ? <AddContact contactForm={contactForm} onCreateContact={onCreateContact}/> : <ContactList contacts={contacts} setClose={setClose} />}
      </div>
      {/* Chat area */}
      <div className={cn("pl-80 w-full max-sm:pl-0 max-sm:w-0 overflow-hidden transition-all duration-300 absolute right-0 whitespace-nowrap", currentContact?._id && "max-sm:w-full max-sm:pl-0")}>
        {!currentContact?._id && (
          <div className="w-full h-screen flex items-center justify-center overflow-hidden max-sm:hidden">
            <p className="pl-2 pr-2 p-1 bg-secondary/50 rounded-xl">Select a chat to start messaging</p>
          </div>
        )}

        {/* Chat */}
        {currentContact?._id && 
          <div className={cn("w-full transition-all duration-300 overflow-hidden", close === false && "max-sm:w-0 overflow-hidden")}>
            {/* Top chat */}
            <TopChat>
              {closeBtn()}
            </TopChat>

            {/* Chat messages */}
            <Chat messageForm={messageForm} onSendMessage={onSendMessage} close={close}  />
          </div>
        }
      </div>
    </>
  )
}

const contacts = [
  {email: "john@email.com", _id: '1', avatar: "https://github.com/shadcn.png", firstname: 'John', lastname: 'Johnson', bio: 'Be smarter'},
  {email: "rick@email.com", _id: '2', avatar: "https://github.com/shadcn.png", firstname: 'Rick', lastname: 'Rickendon', bio: 'Be smarter'},
  {email: "nick@email.com", _id: '3', avatar: "https://github.com/shadcn.png", firstname: 'Nick', lastname: 'Nicolas', bio: 'Be smarter'},
  {email: "josh@email.com", _id: '4', avatar: "https://github.com/shadcn.png", firstname: 'Josh', lastname: 'Joshua', bio: 'Be smarter'},
  {email: "doe@email.com", _id: '5', avatar: "https://github.com/shadcn.png", firstname: 'Doe', lastname: 'Doekos', bio: 'Be smarter'},
  {email: "sarah@email.com", _id: '6', avatar: "https://github.com/shadcn.png", firstname: 'Sarah', lastname: 'Conor', bio: 'Be smarter'},
]

export default HomePage