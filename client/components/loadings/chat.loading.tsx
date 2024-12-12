import React from 'react'
import MessageLoading from './message.loading'

const ChatLoading = () => {
  return (
    <>
      <MessageLoading isReceived />
      <MessageLoading isReceived />
      <MessageLoading  />
      <MessageLoading isReceived />
      <MessageLoading  />
      <MessageLoading  />
      <MessageLoading isReceived />
    </>
  )
}

export default ChatLoading