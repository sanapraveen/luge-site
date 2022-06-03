import luge from "https://cdn.skypack.dev/@waaark/luge@0.6.7-beta";
import { gsap } from "https://cdn.skypack.dev/gsap@3.10.1";

/* Custom reveal */
luge.reveal.add("in", "myReveal", (element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: -500
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "expo.out"
    }
  );
});

luge.reveal.add("out", "myReveal", (element) => {
  gsap.to(element, {
    opacity: 0,
    x: 500,
    duration: 1,
    ease: "expo.in"
  });
});
