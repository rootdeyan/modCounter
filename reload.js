// Function to silently refresh the page
function silentRefresh() {
    console.log("Refreshing page...");
    window.location.reload(true); // Reload page from server, bypassing cache
}

// Set a timer to refresh every 30 minutes (30 * 60 * 1000 ms)
setTimeout(silentRefresh, 30 * 60 * 1000);

console.log("Page will refresh silently in 30 minutes.");