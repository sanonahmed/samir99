import { Bell } from 'lucide-react';

interface AnnouncementTickerProps {
  message: string;
}

export function AnnouncementTicker({ message }: AnnouncementTickerProps) {
  return (
    <div className="w-full flex justify-center px-3 sm:px-4 mt-4 mb-5">
      <div
        className="ticker-container w-full max-w-[780px] h-[34px] rounded-full bg-[#22293F] border border-[#2F3957]/80 px-3.5 flex items-center gap-2.5 overflow-hidden shadow-inner shadow-black/25"
        role="region"
        aria-label="Platform Announcements"
      >
        <Bell
          className="w-4 h-4 text-[#FBBF24] fill-[#FBBF24] shrink-0"
          aria-hidden="true"
        />
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-ba99-marquee text-[12.5px] sm:text-[13px] text-[#E2E8F5] font-medium">
            <span className="pr-16">{message}</span>
            <span className="pr-16" aria-hidden="true">
              {message}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
