import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { Draggable } from "gsap/Draggable"

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText,ScrollSmoother,Draggable)

  // Optional: Inject ke context agar bisa digunakan global
  return {
    provide: {
      gsap,
      ScrollTrigger,
      SplitText,
      ScrollSmoother,
      Draggable
    }
  }
})
