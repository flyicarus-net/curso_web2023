function FahrenheiTaCelsius(f) {
    return (5 / 9) * (f - 32);
}
document.getElementById("temp").innerHTML = Math.round(FahrenheiTaCelsius(100)) + " C" ;
