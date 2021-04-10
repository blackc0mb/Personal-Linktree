const show_about = document.getElementById("text-about");
const link_about = document.getElementById("link-about");
const about_divider = document.getElementById("about-divider");

show_about.style.display ="none";
about_divider.style.display = "none";

link_about.addEventListener('click', (ev) => {
   if (show_about.style.display === "none" ) {      
      show_about.style.display = "block";
      about_divider.style.display = "block";      
   } else {
      show_about.style.display ="none";
      about_divider.style.display = "none";
   }   
});
