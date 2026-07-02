import { gsap } from "gsap"
import { GSDevTools } from "gsap/GSDevTools"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(GSDevTools)
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)

export { gsap }
