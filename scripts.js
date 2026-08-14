const sections = document.querySelectorAll("section")
const arrowDown = document.querySelector(".arrow-down")
const lastSection = sections[sections.length - 1]

window.addEventListener("scroll", () => {
  if (window.scrollY >= lastSection.offsetTop) {
    arrowDown.classList.add("arrow-up")
  } else {
    arrowDown.classList.remove("arrow-up")
  }
})

arrowDown.addEventListener("click", () => {

  if (arrowDown.classList.contains("arrow-up")) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

    return
  }

  let currentSectionIndex = 0

  sections.forEach((section, index) => {
    if (window.scrollY >= section.offsetTop) {
      currentSectionIndex = index
    }
  })

  const nextSection = sections[currentSectionIndex + 1]

  if (nextSection) {
    nextSection.scrollIntoView({
      behavior: "smooth"
    })
  }
})