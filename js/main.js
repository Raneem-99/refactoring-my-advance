let sp = document.querySelector(".up")
window.onscroll = function() {
    this.scrollY >= 200 ? sp.classList.add("show") : sp.classList.remove("show")
}
sp.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}