// ==UserScript==
// @name        Youtube Music - "Watch in Youtube" button
// @namespace   Violentmonkey Scripts
// @version     1.0.0
//
// @match       https://music.youtube.com/*
// @grant       none
//
// @author      greenKac
// @description Makes Youtube Music 0.1% less shitty
// ==/UserScript==

const BUTTON_ID = "grk_wiy_button";

function OnClick(event) {
  var musicURL = window.location.href;
  var youtubeURL = "https://www" + musicURL.substring(musicURL.indexOf("music") + 5);
  window.open(youtubeURL);
}

function Main() {
  if (document.getElementById("BUTTON_ID") != null)
    return;

  var div = document.getElementById("left-content");
  var button = document.createElement("button");
  var span = document.createElement("span");
  var img = document.createElement("img");
  span.appendChild(button);
  button.appendChild(img);
  span.style.paddingLeft = "20px";
  button.addEventListener("click", OnClick);
  button.style.backgroundColor = "transparent";
  button.style.border = "0px";
  button.setAttribute("title", "Watch in Youtube")
  button.id = BUTTON_ID;
  img.setAttribute("src", "data:image/webp;base64,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");
  img.setAttribute("alt", "youtube.webp");
  img.style.width = "40px";

  div.appendChild(span);
}

Main();
