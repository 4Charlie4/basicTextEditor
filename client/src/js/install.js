const butInstall = document.getElementById("buttonInstall");

//Logic for making PWA installable
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  butInstall.style.visibility = "visible";

  butInstall.addEventListener("click", () => {
    event.prompt();
    butInstall.setAttribute("disabled", true);
    butInstall.textContent = "Installed!";
  });
});


window.addEventListener("appinstalled", (event) => {
  console.log("Application Installed", event);
});
