function volume_sphere() {
  const radiusInput = document.getElementById("radius");
  const volumeOutput = document.getElementById("volume");

  const radius = parseFloat(radiusInput.value);

  if (isNaN(radius) || radius < 0) {
    volumeOutput.value = "NaN";
  } else {
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeOutput.value = volume.toFixed(4);
  }
}