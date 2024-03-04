document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.parallax');
  
    function handleScroll() {
      const scrollPosition = window.pageYOffset;
  
      sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;
        const parallaxAmount = (scrollPosition - sectionTop) * 0.7;
  
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          section.style.backgroundPositionY = parallaxAmount + 'px';
        }
      });
    }
  
    // Initial scroll position
    handleScroll();
  
    // Event listener for scrolling
    window.addEventListener('scroll', handleScroll);
  });
  