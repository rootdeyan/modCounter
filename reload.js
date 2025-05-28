// Function to silently refresh the page
function silentRefresh() {
    console.log("Refreshing page...");
    window.location.reload(true); // Reload page from server, bypassing cache
}

// Set a timer to refresh every 65 minutes (65 * 60 * 1000 ms)
setTimeout(silentRefresh, 65 * 60 * 1000);

console.log("Page will refresh silently in 65 minutes.");