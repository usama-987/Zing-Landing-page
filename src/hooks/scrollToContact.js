export const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (el) {
    const navbarHeight = 80; // Adjust based on your navbar height
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
