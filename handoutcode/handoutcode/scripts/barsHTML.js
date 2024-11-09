// Wait until the DOM content is fully loaded
window.onload = function() {
    // Select all bar elements using a common class name
    const bars = document.querySelectorAll('[class^="bar"]'); // Matches all elements with class name starting with "bar"
    
    // Loop through each bar and apply styles
    bars.forEach((bar, i) => {
        var colour = ~~(i * 254 / 10);  // Calculate a grayscale color value based on the index i
        var scolour = "rgb(" + colour + "," + colour + "," + colour + ")";  // Create RGB color string
        
        var height = (i + 1) * 20;  // Calculate height based on index (e.g., increasing heights)
        
        bar.style.height = height + "px";  // Set the height of the bar
        bar.style.width = "15px";  // Set a fixed width for the bars (optional)
        bar.style.backgroundColor = scolour;  // Apply the calculated color
        //bar.style.margin = "5px";  // Optional: add spacing between bars
    });
};
