const content = CSSRulePlugin.getRule(".content:before")
const h1 = document.querySelectorAll('h1')
const p = document.querySelectorAll('p')
const tl = gsap.timeline()

tl.from(content, { delay: .5, duration: 4, cssRule: { scaleX: 0 } })
tl.to(h1, { duration: 2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', y: '30px' }, "-=2")
tl.to(p, { duration: 4, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', y: '30px' }, "-=1")