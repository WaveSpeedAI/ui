"use client"

import { InfoIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          title: "text-sm text-black/80 pl-2",
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg text-sm text-black/80",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",

        },
      }}
      icons={{
        success: <InfoIcon className="w-6 h-6 text-white" style={{ fill: '#52C41A' }} />,
        error: <InfoIcon className="w-6 h-6 text-white" style={{ fill: '#FF4D4F' }} />,
        warning: <InfoIcon className="w-6 h-6 text-white" style={{ fill: '#FAAD14' }} />,
      }}
      {...props}
    />
  )
}

export { Toaster }
