import type { LanguageCode, SupportChannel } from '../types/gaming';
import { SUPPORT_CHANNELS } from '../data/navigation';

interface FloatingSupportProps {
  language: LanguageCode;
  onOpenChannel: (channelId: SupportChannel['id']) => void;
}

function ChannelSvgIcon({ id }: { id: SupportChannel['id'] }) {
  if (id === 'livechat') {
    return (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" aria-hidden="true">
        <path d="M12 3a8 8 0 0 0-8 8v3a3 3 0 0 0 3 3h1v-6H6.2A5.8 5.8 0 0 1 12 5.2 5.8 5.8 0 0 1 17.8 11H16v6h1a3 3 0 0 0 3-3v-3a8 8 0 0 0-8-8Zm-2.5 9.5a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm2.5 0a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm2.5 0a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 19.5c-1.8 0-3.3-.6-4.2-1.4l1.1-1.3c.7.6 1.8 1 3.1 1 1.3 0 2.4-.4 3.1-1l1.1 1.3c-.9.8-2.4 1.4-4.2 1.4Z" />
      </svg>
    );
  }

  if (id === 'telegram') {
    return (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-white -translate-x-[1px]" fill="currentColor" aria-hidden="true">
        <path d="M20.66 4.68a1.1 1.1 0 0 0-1.15-.16L3.7 10.67a1.1 1.1 0 0 0 .08 2.06l3.9 1.28 1.51 4.74a.9.9 0 0 0 1.48.38l2.22-2.1 4.1 3.01a1.1 1.1 0 0 0 1.73-.66l2.44-13.5a1.1 1.1 0 0 0-.5-1.2Zm-3.1 3.36-7.24 6.53-.3 2.75-1.08-3.44 8.62-5.84Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" aria-hidden="true">
      <path d="M12.04 3.5a8.45 8.45 0 0 0-7.26 12.78L3.7 20.5l4.34-1.12a8.46 8.46 0 1 0 4-15.88Zm0 15.48a6.97 6.97 0 0 1-3.55-.97l-.26-.15-2.58.67.69-2.51-.17-.26a7 7 0 1 1 5.87 3.22Zm3.84-5.22c-.21-.11-1.24-.61-1.43-.68-.19-.07-.33-.11-.47.1-.14.21-.54.68-.66.82-.12.14-.24.16-.45.05-.21-.1-1-.37-1.9-1.17-.7-.63-1.18-1.4-1.32-1.61-.14-.21-.01-.32.09-.43.1-.1.21-.24.31-.36.11-.12.14-.21.21-.35.07-.14.04-.26-.02-.37-.05-.1-.47-1.14-.65-1.56-.17-.41-.34-.35-.47-.36h-.4c-.14 0-.37.05-.56.26-.19.21-.73.72-.73 1.75 0 1.03.75 2.03.85 2.17.11.14 1.48 2.26 3.58 3.17.5.22.89.35 1.19.44.5.16.96.14 1.32.08.4-.06 1.24-.51 1.42-1 .17-.49.17-.91.12-1-.05-.09-.19-.14-.4-.25Z" />
    </svg>
  );
}

export function FloatingSupport({
  language,
  onOpenChannel,
}: FloatingSupportProps) {
  return (
    <aside
      aria-label="Customer Support Shortcuts"
      className="fixed right-2.5 bottom-[68px] sm:bottom-auto sm:right-6 sm:top-[54%] sm:-translate-y-1/2 z-30 flex flex-col gap-2 sm:gap-[15px]"
    >
      {SUPPORT_CHANNELS.map((channel) => {
        const label =
          language === 'bn'
            ? channel.labelBn
            : language === 'hi'
              ? channel.labelHi
              : channel.labelEn;

        return (
          <button
            key={channel.id}
            type="button"
            onClick={() => onOpenChannel(channel.id)}
            aria-label={label}
            title={label}
            className={`w-[40px] h-[40px] sm:w-[58px] sm:h-[58px] rounded-full bg-gradient-to-br ${channel.bgClass} flex items-center justify-center shadow-lg shadow-black/45 ring-2 ring-white/15 transition-all duration-200 hover:scale-110 hover:ring-white/35 active:scale-95 cursor-pointer`}
          >
            <ChannelSvgIcon id={channel.id} />
          </button>
        );
      })}
    </aside>
  );
}
