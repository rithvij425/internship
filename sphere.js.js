function calculateVolume() {
    const radius = parseFloat(document.getElementById("radius").value);
    if (!isNaN(radius)) {
        const volume = (4/3) * Math.PI * Math.pow(radius, 3);
        document.getElementById("output").textContent = "The volume of the sphere is: " + volume.toFixed(2);
    } else {
        document.getElementById("output").textContent = "Please enter a valid radius.";
    }
}