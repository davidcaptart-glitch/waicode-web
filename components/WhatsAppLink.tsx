"use client";

import type { ComponentPropsWithoutRef } from "react";
import { trackWhatsAppClick, type WhatsAppOrigin } from "@/lib/analytics";

interface Props extends ComponentPropsWithoutRef<"a"> {
  origin: WhatsAppOrigin;
}

export default function WhatsAppLink({ origin, onClick, children, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackWhatsAppClick(origin);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
