import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText)

  // Optional: Inject ke context agar bisa digunakan global
  return {
    provide: {
      gsap,
      ScrollTrigger,
      SplitText
    }
  }
})
