// const show_about = document.getElementById("text-about");
// const link_about = document.getElementById("link-about");
// const about_divider = document.getElementById("about-divider");

// show_about.style.display = "none";
// about_divider.style.display = "none";

// link_about.addEventListener('click', (ev) => {
//    if (show_about.style.display === "none") {
//       show_about.style.display = "block";
//       about_divider.style.display = "block";
      
//       show_about.style.transition = "all 1s ease-in-out";
//    } else {
//       show_about.style.display = "none";
//       about_divider.style.display = "none";      
//    }
// });


let show_about = document.getElementById('text-about'),
link_about = document.getElementById('link-about');

show_about.classList.add('visuallyhidden');

link_about.addEventListener('click', function () {
   if (show_about.classList.contains('hidden')) {
      show_about.classList.remove('hidden');
      setTimeout(function () {
         show_about.classList.remove('visuallyhidden');
      }, 20);
   } else {
      show_about.classList.add('visuallyhidden');
      show_about.addEventListener('transitionend', function (e) {
         show_about.classList.add('hidden');
      }, {
         capture: false,
         once: true,
         passive: false
      });
   }
}, false);