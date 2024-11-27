import { Menu, QrCode, MessageSquare, MoreVertical } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-14 items-center">
        <a href="/" className="mr-4 flex items-center space-x-2">
          <img src="/placeholder.svg" alt="Logo" className="h-8 w-8" />
        </a>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="icon">
            <QrCode className="h-5 w-5" />
            <span className="sr-only">QR Code</span>
          </Button>
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">Messages</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
            <span className="sr-only">More</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}

