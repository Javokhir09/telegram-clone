'use client'

import { useAuth } from "@/hooks/use-auth"
import SignIn from "./sign-in"
import Verify from "./verify"

function StateAuth() {
  const { step } = useAuth()
  return (
    <>
    {step === 'login' && <SignIn/>}
    {step === 'verify' && <Verify/>}
    </>
  )
}

export default StateAuth