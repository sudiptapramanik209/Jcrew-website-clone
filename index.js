import { navbar } from "./components/navbar.js";
import { footer } from "./components/footer.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

//console.log("navbar_div:", navbar_div);

let footer_div = document.getElementById("footer-section");
footer_div.innerHTML = footer();

//console.log("navbar_div:", footer_div);
