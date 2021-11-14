let counter = 0;

function remove_image1() {
    if (counter == 0) {
        document.getElementById('fb').style.display = "block";
        document.getElementById('beaker').style.display = "none";
        counter++;
    } else {
        alert("Please go according to the procedure");
    }
}

function remove_image2() {
    if (counter == 1) {
        document.getElementById('pour').style.display = "block";
        document.getElementById('fb').style.display = "none";
        counter++;
    } else {
        alert("Please go according to the procedure");
    }
}

function remove_image3() {
    if (counter == 2) {
        document.getElementById('fb2').style.display = "block";
        document.getElementById('pour').style.display = "none";
        counter++;
    } else {
        alert("Please go according to the procedure");
    }
}

function remove_image4() {
    if (counter == 3) {
        document.getElementById('fb3').style.display = "block";
        document.getElementById('fb2').style.display = "none";
        counter++;
    } else {
        alert("Please go according to the procedure");
    }
}

function remove_image5() {
    if (counter == 4) {
        document.getElementById('stir').style.display = "block";
        document.getElementById('fb3').style.display = "none";
        counter++;
    } else {
        alert("Please go according to the procedure");
    }
}

function remove_image6() {
    if (counter == 5) {
        document.getElementById('fb4').style.display = "block";
        document.getElementById('stir').style.display = "none";
        alert("Congrats!! Procedure completed");
    } else {
        alert("Please go according to the procedure");
    }
}

function reset() {
    counter = 0;
    history.go(0);
    document.getElementById('beaker').style.display = "block";
}