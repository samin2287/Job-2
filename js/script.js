function updateTime() {
  const now = new Date();
  document.getElementById("datetime").innerHTML =
    "Current Date & Time: " + now.toLocaleString();
}

setInterval(updateTime, 1000);

function changeImage(element) {
  document.getElementById("mainImg").src = element.src;
}

// GMT+6

// function updateTime() {
//   const now = new Date();

//   const options = {
//     timeZone: "Asia/Dhaka", // GMT+6
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: true,
//   };

//   const bangladeshTime = now.toLocaleString("en-US", options);

//   document.getElementById("datetime").innerHTML =
//     "Current Date & Time (GMT+6): " + bangladeshTime;
// }

// setInterval(updateTime, 1000);

// GMT+6

// components
// Navbar load
fetch("components/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

// Footer load
fetch("components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
