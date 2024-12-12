import { cn } from "@/lib/utils"
import { FC } from "react"
import { Skeleton } from "../ui/skeleton"

interface Props {
  isReceived?: boolean
}

const MessageLoading: FC<Props> = ({ isReceived }) => {
  return (
    <div className={cn('m-2.5 font-medium text-xs flex', isReceived ? 'justify-start' : 'justify-end')}>
      <Skeleton className={cn("relative inline p-2 pl-2.5 pr-12", isReceived ? 'bg-primary/15' : 'bg-secondary')}>
        <Skeleton className="w-36 h-5" />
        <span className="text-xs right-1 absolute bottom-0 opacity-60">✓</span>
      </Skeleton>
    </div>
  )
}

export default MessageLoading