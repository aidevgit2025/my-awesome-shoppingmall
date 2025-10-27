"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="text-xl lg:text-2xl font-bold tracking-tight">둥둥둥 파션</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-muted-foreground transition-colors">
              회사소개
            </a>
            <a href="#values" className="text-sm hover:text-muted-foreground transition-colors">
              핵심가치
            </a>
            <a href="#collection" className="text-sm hover:text-muted-foreground transition-colors">
              컬렉션
            </a>
            <a href="#contact" className="text-sm hover:text-muted-foreground transition-colors">
              문의하기
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                className="text-sm hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                회사소개
              </a>
              <a
                href="#values"
                className="text-sm hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                핵심가치
              </a>
              <a
                href="#collection"
                className="text-sm hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                컬렉션
              </a>
              <a
                href="#contact"
                className="text-sm hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                문의하기
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
