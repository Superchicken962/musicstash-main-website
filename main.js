function initialiseApps() {
    const apps = document.querySelectorAll(".applications .app");
    for (const app of apps) {
        app.onclick = () => {
            removeClassFromAll(apps, "selected");

            app.classList.add("selected");
            // Show the associated description of the app.
            setAppDescription(app.getAttribute("data-for-app"));
        }
    }
}
initialiseApps();

function setAppDescription(app) {
    const desc = document.querySelector(`.appDesc[data-app='${app}']`);
    if (!desc) return;

    addClassToAll(".appDesc", "hidden");
    desc.classList.remove("hidden");
}