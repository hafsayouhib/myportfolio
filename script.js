document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");
    
    // Fill and display each progress bar
    progressBars.forEach((bar) => {
        const initialPercent = 0;
        const finalPercent = parseFloat(bar.getAttribute("data-percent"));
        
        fillProgressBar(bar, initialPercent, finalPercent);
    });
    
    function fillProgressBar(bar, initialPercent, finalPercent) {
        const step = 1; // Adjust this value for finer or coarser granularity
        const duration = 1000; // 1 second
        const fps = 60;
        const increment = (finalPercent - initialPercent) / (duration / (1000 / fps));
        
        let currentPercent = initialPercent;
        const interval = setInterval(() => {
            currentPercent += increment;
            bar.style.width = currentPercent + "%";
            if (currentPercent >= finalPercent) {
                clearInterval(interval);
            }
        }, 1000 / fps);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Hide all sections
            document.querySelectorAll("section").forEach(section => {
                section.classList.remove("active");
            });

            // Show the target section
            targetSection.classList.add("active");

            // Scroll to the target section smoothly
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll("section");

    function checkScroll() {
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (boxTop < windowHeight - 100) {
                box.style.opacity = "1";
                box.style.transform = "translateY(0)";
            }
        });
    }

    // Initial check on page load
    checkScroll();

    // Add a scroll event listener to check for scrolling
    window.addEventListener("scroll", checkScroll);
});


  function adjustLayout() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth < 768) {
      // Apply styles for small screens
    } else {
      // Apply styles for larger screens
    }
  }

  // Call the adjustLayout function on page load and when the window is resized.
  window.addEventListener("load", adjustLayout);
  window.addEventListener("resize", adjustLayout);




