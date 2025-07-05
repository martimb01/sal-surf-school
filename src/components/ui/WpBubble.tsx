'use client'

import { FloatingWhatsApp } from "react-floating-whatsapp";
export default function WpBubble() {
    return (
        <>
            <FloatingWhatsApp
                allowClickAway={true}
                phoneNumber='351935156584'
                accountName="Sal Surfing"
                avatar="/logo.png"
                chatMessage="Vamos apanhar umas ondas?  
                Onde, como e a que horas?🌊🤙"
            />
        </>
    )
}