"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { siteConfig } from "../data/site-data"

export default function Topbar() {
  return (
    <div className="bg-[#c02329] text-white text-sm">
      <div className="container-main flex justify-between items-center h-10">
        <div className="flex gap-7 items-center">
          <span className="inline-flex items-center gap-1.5">
            <Phone size={14} />
            {siteConfig.phone}
          </span>
          <span className="inline-flex items-center gap-1.5 max-md:hidden">
            <Mail size={14} />
            {siteConfig.email}
          </span>
          <span className="inline-flex items-center gap-1.5 max-md:hidden">
            <MapPin size={14} />
            {siteConfig.address}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V13h2.7v8h3.4z"/></svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M22.5 5.9c-.8.4-1.7.6-2.6.8.9-.6 1.6-1.4 2-2.5-.9.5-1.8.9-2.9 1.1a4.5 4.5 0 0 0-7.7 4.1A12.8 12.8 0 0 1 2 4.8a4.5 4.5 0 0 0 1.4 6 4.4 4.4 0 0 1-2-.6v.1c0 2.2 1.5 4 3.6 4.4a4.5 4.5 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1.5 19 12.7 12.7 0 0 0 8.4 21c8.3 0 12.8-6.9 12.8-12.8v-.6c.9-.6 1.6-1.4 2.3-2.3z"/></svg>
          </a>
          <a href={siteConfig.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M6.9 8.6H3.6V21h3.3V8.6zM5.2 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM21 13.4c0-3.1-1.7-4.6-3.9-4.6-1.8 0-2.6 1-3 1.7V8.6H10.8V21h3.3v-6.6c0-1.5.6-2.4 1.9-2.4 1.2 0 1.7.9 1.7 2.4V21H21v-7.6z"/></svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.6 3.6 12 3.6 12 3.6s-4.6 0-7.7.3c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.8 9.1.8 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.6 1 1.9.2 7.5.3 7.5.3s4.6 0 7.7-.4c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.7 15V8.4l6.2 3.3L9.7 15z"/></svg>
          </a>
        </div>
      </div>
    </div>
  )
}
