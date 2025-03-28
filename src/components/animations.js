import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initCursorEffect = () => {
  const createCursorTrail = (e) => {
    const trail = document.createElement("div");
    trail.className = "cursor-trail";
    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";
    document.body.appendChild(trail);

    setTimeout(() => {
      trail.remove();
    }, 1000);
  };

  document.addEventListener("mousemove", (e) => {
    requestAnimationFrame(() => createCursorTrail(e));
  });
};

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element) => {
  gsap.set(element, { opacity: 1 });
  gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    clearProps: "all",
  });
};

export const staggerFadeInUp = (elements, stagger = 0.2) => {
  gsap.set(elements, { opacity: 1 });
  gsap.from(elements, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger,
    ease: "power3.out",
    clearProps: "all",
  });
};

export const parallaxEffect = (element) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top center",
      end: "bottom center",
      scrub: 1,
    },
    y: -50,
    ease: "none",
  });
};

export const floatingAnimation = (element) => {
  gsap.to(element, {
    y: "-=20",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
};

export const rotateOnScroll = (element) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top center",
      end: "bottom center",
      scrub: 1,
    },
    rotation: 360,
    ease: "none",
  });
};

export const scaleOnHover = (element) => {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
};
