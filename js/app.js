const tl = gsap.timeline({ defaults: { duration: 0.35, ease: "Power2.easeOut" } });

const home = document.querySelector(".home");
const notifications = document.querySelector(".notifications");
const shopping = document.querySelector(".shopping");
const messages = document.querySelector(".messages");

// home animation
gsap.set(".feather", { scale: 0, transformOrigin: "center" });

home.addEventListener("click", () => {
  gsap.fromTo(".home-svg", { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 1 });
  gsap.fromTo(".feather", { y: -5, scale: 0 }, { y: 20, scale: 1.5, duration: 3, stagger: 0.2 });
  gsap.fromTo(".left-feather", { x: 0 }, { x: -5 });
  gsap.fromTo(".right-feather", { x: 0 }, { x: 5 });
  gsap.fromTo(".roof", { y: 5 }, { y: 0, yoyo: true, repeat: 2 });
});

// notification animation
gsap.set(".bell", { transformOrigin: "top center" });
gsap.set(".ringer", { transformOrigin: "top center" });
gsap.set(".wave", { opacity: 0, transformOrigin: "bottom" });

notifications.addEventListener("click", () => {
  gsap.fromTo(".bell", { rotation: -5 }, { rotation: 0, duration: 2, yoyo: true, ease: "elastic.out(2, 0.2)" });
  gsap.fromTo(".left-soundwave", { x: 5 }, { x: 0 });
  gsap.fromTo(".right-soundwave", { x: -5 }, { x: 0 });
  gsap.fromTo(".wave", { opacity: 1 }, { opacity: 0, duration: 1 });
  gsap.fromTo(".ringer", { rotation: -3, x: 0.9 }, { rotation: 0, x: 0, duration: 1, ease: "elastic.out(5, 0.2)" });
});

// shopping animation
shopping.addEventListener("click", () => {
  gsap.fromTo(".basketPart", { x: 3, y: 3 }, { x: 0, y: 0, duration: 1, yoyo: true });
  gsap.fromTo(".leftWheel", { y: 1 }, { y: 0, duration: 1 });
  gsap.fromTo(".rightWheel", { y: 1 }, { y: 0, duration: 1 });
});

// messages animation
gsap.set(".flap", { transformOrigin: "top " });

messages.addEventListener("click", () => {
  tl.fromTo(".messages-svg", { scale: 1 }, { scale: 0.9 });
  tl.fromTo(".flap", { scale: 1 }, { scale: -1 }, "<50%");
  tl.fromTo(".messages-svg", { scale: 0.9 }, { scale: 1 }, "<50%");
  tl.fromTo(".note", { y: 0, opacity: 1 }, { y: -40, opacity: 0, duration: 0.75 });
  tl.to(".flap", { scale: 1 }, "<50%");
});
