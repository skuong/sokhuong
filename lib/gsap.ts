import { gsap } from "gsap"
import { GSDevTools } from "gsap/GSDevTools"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(GSDevTools)
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

export { gsap }
