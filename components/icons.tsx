import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps): IconProps {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
  };
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14.5 5.5L8 12l6.5 6.5" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9.5 5.5L16 12l-6.5 6.5" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.2l2.4 2.4 4.6-5" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.57 14.86L2 22l5.3-1.39A9.9 9.9 0 1 0 12.04 2Zm0 18.08a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.8.82-3-.2-.31a8.16 8.16 0 1 1 6.88 3.82Zm4.47-6.1c-.25-.13-1.45-.72-1.67-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.77.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.97-1.21a7.4 7.4 0 0 1-1.36-1.7c-.14-.24-.02-.37.1-.5.11-.1.25-.28.37-.43.12-.14.16-.24.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.18 3.7.59.25 1.04.4 1.4.52.58.18 1.12.16 1.54.1.47-.07 1.45-.6 1.65-1.17.2-.57.2-1.06.15-1.17-.06-.1-.23-.16-.47-.28Z" />
    </svg>
  );
}

/* ---------- Service icons ---------- */

export function CodeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 9l-3.5 3L8 15M16 9l3.5 3L16 15M13 6l-2 12" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l9 5-9 5-9-5 9-5Z" />
      <path d="M3.5 12.5L12 17l8.5-4.5M3.5 16.5L12 21l8.5-4.5" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13 2.5L4.5 13.5H11l-1 8 8.5-11H12l1-8Z" />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14.5 6.5a4 4 0 0 0-5.6 4.7L3.5 16.6a2 2 0 1 0 2.8 2.8l5.4-5.4a4 4 0 0 0 4.7-5.6l-2.6 2.6-2.3-.6-.6-2.3 2.6-2.6Z" />
    </svg>
  );
}

export function StoreIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 9.5L5.3 4h13.4L20 9.5M4 9.5a2.4 2.4 0 0 0 4.8 0 2.4 2.4 0 0 0 4.8 0 2.4 2.4 0 0 0 4.8 0 1.6 1.6 0 0 0 1.6 1.6V20H4v-8.9c.9 0 1.6-.7 1.6-1.6" />
      <path d="M9 20v-5h6v5" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0M15.5 5.6a3.2 3.2 0 0 1 0 5.8M17.5 14.6a5.5 5.5 0 0 1 3 4.9" />
    </svg>
  );
}

export function ContactIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <circle cx="9" cy="10.5" r="1.8" />
      <path d="M5.8 16.5a3.6 3.6 0 0 1 6.4 0M14.5 9.5h3.5M14.5 13h3.5" />
    </svg>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4l1.7 4.3L18 10l-4.3 1.7L12 16l-1.7-4.3L6 10l4.3-1.7L12 4Z" />
      <path d="M19 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2ZM5 16.5l.6 1.5 1.5.6-1.5.6L5 20.7l-.6-1.5-1.5-.6 1.5-.6.6-1.5Z" />
    </svg>
  );
}

export function PlugIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 3.5V8M15 3.5V8M7 8h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V8ZM12 16v4.5" />
    </svg>
  );
}

/* ---------- Process icons ---------- */

export function ChatIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M21 12a8.5 8.5 0 0 1-12.4 7.5L4 21l1.5-4.6A8.5 8.5 0 1 1 21 12Z" />
      <path d="M8.5 10.5h7M8.5 13.8h4.5" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </svg>
  );
}

export function PenIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14.5 5.5l4 4L8 20H4v-4L14.5 5.5ZM12.5 7.5l4 4" />
    </svg>
  );
}

export function TerminalIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M7 9.5l3 2.5-3 2.5M12.5 15H17" />
    </svg>
  );
}

export function TrendIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 17.5l5.5-5.5 3.5 3.5 7.5-7.5" />
      <path d="M15 7.5h5v5" />
    </svg>
  );
}

const SERVICE_ICONS = {
  code: CodeIcon,
  layers: LayersIcon,
  bolt: BoltIcon,
  wrench: WrenchIcon,
  store: StoreIcon,
  users: UsersIcon,
  contact: ContactIcon,
  grid: GridIcon,
  sparkles: SparklesIcon,
  plug: PlugIcon,
  chat: ChatIcon,
  search: SearchIcon,
  pen: PenIcon,
  terminal: TerminalIcon,
  trend: TrendIcon,
} as const;

export function ServiceIcon({
  name,
  ...props
}: IconProps & { name: string }) {
  const Icon = SERVICE_ICONS[name as keyof typeof SERVICE_ICONS] ?? CodeIcon;
  return <Icon {...props} />;
}
