"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageProps extends React.ComponentProps<typeof Image> {
  className?: string
}

export function CustomImage({ className, alt, ...props }: ImageProps) {
  return (
    <Image
      className={cn(
        "transition-all duration-300",
        className
      )}
      alt={alt}
      {...props}
    />
  )
}
