import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function registerGSAP() {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
}

export const EASINGS = {
  power3Out: "power3.out",
  power4Out: "power4.out",
  expoOut: "expo.out",
  smooth: "power2.inOut",
};
