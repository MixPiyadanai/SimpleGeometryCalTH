function showCirc() {
  var x = document.getElementById("CircCal");

  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showTri() {
  var x = document.getElementById("TriCal");

  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showRec() {
  var x = document.getElementById("RecCal");

  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function darkMode() {
  const btnText = document.getElementById("darkModeID");
  const btnCircTextColor = document.getElementById("btnCirc");
  const btnTriTextColor = document.getElementById("btnTri");
  const btnRecTextColor = document.getElementById("btnRec");

  var element = document.body;
  element.classList.toggle("dark-mode");

  if (btnText.innerText == 'โหมด "สว่าง"') {
    btnText.innerText = 'โหมด "มืด"';
    btnCircTextColor.style.color = "black";
    btnTriTextColor.style.color = "black";
    btnRecTextColor.style.color = "black";
  } else {
    btnText.innerText = 'โหมด "สว่าง"';
    btnCircTextColor.style.color = "white";
    btnTriTextColor.style.color = "white";
    btnRecTextColor.style.color = "white";
  }
}

function CalculateCirc() {
  var Circradius = document.getElementById("txtCircRadius").value;
  document.getElementById("CircResult").innerText =
    "พื้นที่ของวงกลมคือ " + (Circradius * Circradius * Math.PI).toFixed(2);
}

function CalculateTri() {
  var side1 = parseInt(document.getElementById("side1").value);

  var side2 = parseInt(document.getElementById("side2").value);

  var side3 = parseInt(document.getElementById("side3").value);

  var s = (side1 + side2 + side3) / 2;
  var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3))).toFixed(
    2
  );

  document.getElementById("TriResult").innerText =
    "พื้นที่ของสามเหลี่ยมคือ " + area;
}

function CalculateRec() {
  var l = parseInt(document.getElementById("Reclength").value);

  var w = parseInt(document.getElementById("Recwidth").value);

  document.getElementById("RecResult").innerText =
    "พื้นที่ของสี่เหลี่ยมผืนผ้าคือ " + (l * w).toFixed(2);
}
