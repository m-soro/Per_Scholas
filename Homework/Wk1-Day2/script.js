/* No need to edit */

function open_card() {
  document.getElementById("outside").className = "open-card";
}

function close_card() {
  document.getElementById("outside").className = "";
}

function change_card() {
  // get all the elements that we are interacting or changing
  let outside_img = document.querySelector("#outside-pic");
  let div_dissapear = document.querySelector(".dissapear");
  let open_button = document.querySelector("#open-button");
  let h1 = document.querySelector("h1");

  // change the beer pic after clicking "seriously a beer" button
  outside_img.setAttribute(
    "src",
    "https://theartsdesk.com/sites/default/files/styles/mast_image_landscape/public/mastimages/article-2550245-1B225D3100000578-998_634x433.jpg?itok=3gi26KV9"
  );
  // hide the "seriously a beer" button after Leo pic is revealed
  div_dissapear.setAttribute("style", "display:none");
  // change h1 message
  h1.innerHTML = "YOU ARE UNSTOPPABLE!";
  // reveal open button - this was hidden when the card is closed and when the beer pic is shown.
  open_button.setAttribute("style", "display:inline-block");

  // The .style attribute can be used to manipulate CSS as well like below
  // document.querySelector(".site-title").style.fontFamily='serif'
}
