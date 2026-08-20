function initialiseApps() {
    const apps = document.querySelectorAll(".applications .app");
    const preselected = localStorage.getItem("selectedApplication");

    for (const app of apps) {
        const appName = app.getAttribute("data-for-app");
        if (appName === preselected) {
            removeClassFromAll(apps, "selected");
            selectApp(appName);
        }

        app.onclick = () => {
            selectApp(appName);
        }
    }
}
initialiseApps();

function selectApp(appName) {
    removeClassFromAll(".applications .app", "selected");

    document.querySelector(`.applications .app[data-for-app='${appName}']`).classList.add("selected");
    // Show the associated description of the app.
    setAppDescription(appName);
    localStorage.setItem("selectedApplication", appName);
}

function setAppDescription(app) {
    const desc = document.querySelector(`.appDesc[data-app='${app}']`);
    if (!desc) return;

    addClassToAll(".appDesc", "hidden");
    desc.classList.remove("hidden");
}