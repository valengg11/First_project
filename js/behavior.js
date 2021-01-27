function currentTest(n){
    slide1 = document.getElementById("slide1");
    slide2 = document.getElementById("slide2");
    slide3 = document.getElementById("slide3");
    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "none";
    if (n == 1){
      slide1.style.display = "grid";
      slide2.style.display = "grid";
    }
    if (n == 2){
      slide2.style.display = "grid";
      slide3.style.display = "grid";
    }
    if (n == 3){
      slide3.style.display = "grid";
      slide1.style.display = "grid";
    }
  }