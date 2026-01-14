const PLATFORMS = [
  'YOUTUBE', 'BLINKIT', 'AMAZON', 'SWIGGY', 'HOTSTAR', 'LINKEDIN',
  'STEAM', 'NETFLIX', 'PRIME VIDEO', 'TWITCH', 'REDDIT', 'INSTAGRAM',
  'SPOTIFY', 'TWITTER', 'CURSOR'
]

export function MarqueeSection() {
  return (
    <div className="border-y bg-[#080808] py-8 relative z-20 overflow-hidden marquee-mask w-full border-white/5">
      <div className="flex whitespace-nowrap animate-marquee w-[max-content]">
        {/* Three copies for seamless loop */}
        {[0, 1, 2].map((groupIndex) => (
          <div key={groupIndex} className="flex gap-20 px-10 items-center">
            {PLATFORMS.map((platform, index) => (
              <span
                key={`${groupIndex}-${index}`}
                className="font-display font-bold text-2xl transition-colors text-white/30 hover:text-white cursor-default"
              >
                {platform}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
