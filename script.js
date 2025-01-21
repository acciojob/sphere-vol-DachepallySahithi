function volume_sphere() {
    //Write your code here
  const radiusInput = document.getElementById("radius").value;
	if(isNaN(radiusInput) || radiusInput < 0){
		document.getElementById("volume").value = "NaN";
		return false;
	}
	const radius = parseFloat(radiusInput);
	const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

	document.getElementById("volume").value = volume.toFixed(4);
	return true;
} 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
