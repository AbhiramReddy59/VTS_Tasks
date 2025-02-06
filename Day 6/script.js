document.addEventListener("DOMContentLoaded", () => {

    const logContainer = document.getElementById("event-log");
    const clearLogButton = document.getElementById("clear-log");
    const pauseLogButton = document.getElementById("pause-log");
    let isLoggingPaused = false;
    let player;

    function logEvent(eventType, details = '') {
        if (isLoggingPaused) return;
        
        const logItem = document.createElement("p");
        const timestamp = new Date().toLocaleTimeString();
        const detailsText = details ? ` - ${details}` : '';
        logItem.textContent = `${timestamp} - ${eventType}${detailsText}`;
        
        logItem.classList.add('log-entry');
        if (eventType.includes("Error")) {
            logItem.style.borderLeftColor = "var(--error-color)";
        }

        logContainer.insertBefore(logItem, logContainer.firstChild);
        logContainer.scrollTop = 0;
    }

    const mouseTracker = document.getElementById("mouse-tracker");
    const clickBtn = document.getElementById("click-btn");
    const dblclickBtn = document.getElementById("dblclick-btn");

    clickBtn.addEventListener("click", (e) => {
        logEvent("Click", `at (${e.clientX}, ${e.clientY})`);
        addClickAnimation(e.target);
    });

    dblclickBtn.addEventListener("dblclick", () => {
        logEvent("Double Click");
        addClickAnimation(dblclickBtn);
    });

    mouseTracker.addEventListener("mouseover", () => logEvent("Mouse Over"));
    mouseTracker.addEventListener("mouseout", () => logEvent("Mouse Out"));
    mouseTracker.addEventListener("mousemove", (e) => {
        const coords = `X: ${e.offsetX}, Y: ${e.offsetY}`;
        document.getElementById("mouse-tracker").setAttribute("data-coords", coords);
    });

    const textInput = document.getElementById("text-input");
    const keyDisplay = document.getElementById("key-display");

    textInput.addEventListener("keydown", (e) => {
        keyDisplay.textContent = e.key;
        logEvent("Key Down", e.key);
    });

    textInput.addEventListener("keyup", (e) => {
        logEvent("Key Up", e.key);
    });

    const eventForm = document.getElementById("event-form");
    const formSelect = document.getElementById("form-select");

    eventForm.addEventListener("submit", (e) => {
        e.preventDefault();
        logEvent("Form Submit", "Form data: " + new FormData(eventForm).get("form-input"));
    });

    formSelect.addEventListener("change", (e) => {
        logEvent("Select Change", `Selected: ${e.target.value}`);
    });

    const clipboardText = document.getElementById("clipboard-text");
    const clipboardStatus = document.getElementById("clipboard-status");

    clipboardText.addEventListener("copy", () => {
        logEvent("Copy");
        clipboardStatus.textContent = "Copied";
    });

    clipboardText.addEventListener("paste", () => {
        logEvent("Paste");
        clipboardStatus.textContent = "Pasted";
    });

    clipboardText.addEventListener("cut", () => {
        logEvent("Cut");
        clipboardStatus.textContent = "Cut";
    });

    const draggable = document.getElementById("draggable");
    const dropZone = document.getElementById("drop-zone");

    draggable.addEventListener("dragstart", () => {
        logEvent("Drag Start");
        draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
        logEvent("Drag End");
        draggable.classList.remove("dragging");
    });

    dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.classList.add("drag-over");
    });

    dropZone.addEventListener("dragleave", () => {
        dropZone.classList.remove("drag-over");
    });

    dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        logEvent("Drop");
        dropZone.classList.remove("drag-over");
    });

    // Media Events
    const video = document.getElementById("video");
    const mediaStatus = document.getElementById("media-status");
    const playBtn = document.getElementById("play-btn");
    const pauseBtn = document.getElementById("pause-btn");

    video.addEventListener("play", () => {
        logEvent("Video Play");
        mediaStatus.textContent = "Playing";
    });

    video.addEventListener("pause", () => {
        logEvent("Video Pause");
        mediaStatus.textContent = "Paused";
    });

    video.addEventListener("ended", () => {
        logEvent("Video Ended");
        mediaStatus.textContent = "Ended";
    });

    video.addEventListener("timeupdate", () => {
        logEvent("Video Time Update");
    });

    video.addEventListener("loadeddata", () => {
        logEvent("Video Loaded");
        mediaStatus.textContent = "Loaded";
    });

    playBtn.addEventListener("click", () => video.play());
    pauseBtn.addEventListener("click", () => video.pause());

    const darkModeToggle = document.getElementById("dark-mode-toggle");
    
    const darkMode = localStorage.getItem("darkMode");
    
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", () => {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", null);
            logEvent("Theme Toggle", "Light Mode");
        } else {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
            logEvent("Theme Toggle", "Dark Mode");
        }
    });

    clearLogButton.addEventListener("click", () => {
        logContainer.innerHTML = "";
        logEvent("Log Cleared");
    });

    pauseLogButton.addEventListener("click", () => {
        isLoggingPaused = !isLoggingPaused;
        pauseLogButton.textContent = isLoggingPaused ? "Resume Logging" : "Pause Logging";
        logEvent(isLoggingPaused ? "Logging Paused" : "Logging Resumed");
    });

    function addClickAnimation(element) {
        element.classList.add("clicked");
        setTimeout(() => element.classList.remove("clicked"), 200);
    }

    logEvent("Page Loaded", "Event Handler Demo Initialized");
});