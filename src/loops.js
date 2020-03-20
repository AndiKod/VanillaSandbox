import "./assets/styles.css";
import { _header } from "./components/header.js";
import { posts } from "./content/posts.js";
import { _footer } from "./components/footer.js";
let app = document.querySelector("#app");
//************************************ */

// -- Header --
let header = document.createElement("header");
header.innerHTML = `${_header()}`;
app.append(header);
// -- Main page with Posts --
for (let post of posts()) {
  let article = document.createElement("article");

  article.innerHTML = `
      <h4>${post.title}</h4>
      <p>Author: ${post.author}</p>
      <a href="${post.author}">Lire</a>
      <br><br>
    `;

  app.append(article);
}
// -- Footer --
let footer = document.createElement("footer");
footer.innerHTML = `${_footer()}`;
document.body.append(footer);
//- Fin -
