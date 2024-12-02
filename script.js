function getUnix() {
  return Math.floor(Date.now() / 1000);
}

setInterval(function() {
  const timestamp = getUnix();

document.getElementById("unixtime").textContent = "Unix Time: " + timestamp

document.getElementById("innerHTML").textContent = "Date: " + new Date().toLocaleString()
},1000);