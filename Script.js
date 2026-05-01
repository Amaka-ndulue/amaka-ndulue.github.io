// Simple enhancement: smooth scroll (future-proof for navigation links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            ?.scrollIntoView({ behavior: "smooth" });
    });
});

// Example: dynamic year in footer (optional upgrade)
const footer = document.querySelector("footer p");
if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} Joy Ndulue | Professional Nursing Portfolio`;
}
