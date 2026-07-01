import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card"
import { NameInPhoneticSymbolsSvg } from "@/features/art/components/name-in-phonetic-symbols-svg"

export function PhoneticNameWithHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger
        delay={200}
        className="cursor-pointer"
        render={<NameInPhoneticSymbolsSvg />}
      />
      <HoverCardContent className="w-fit">
        <div className="flex flex-col">
          <div>I&apos;m Sokhuong Uon.</div>
          <div>
            You can call me Khuong{" "}
            <span className="font-mono text-lg">/kʊəŋ/</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
