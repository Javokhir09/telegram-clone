import { Button } from '@/components/ui/button'
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

function Social() {
  return (
    <div className='grid grid-cols-2 w-full gap-1'>
      <Button>
        <span>Sign Up with Google</span>
        <FaGoogle />
      </Button>
      <Button variant={'outline'}>
        <span>Sign Up with Github</span>
        <FaGithub />
      </Button>
    </div>
  )
}

export default Social