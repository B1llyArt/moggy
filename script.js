function copyca() {
    var ca = "4erbFdFSmJe8QMgUozgZY1W3cBdEWXMdYfQHi2AqYG47";
    navigator.clipboard.writeText(ca);
}


function showChart() {
    var modal = document.getElementById("chartsModal");
    var contentResponse = document.getElementById("chartsWrapper");
    modal.style.display = "block";
    contentResponse.style.display = "block";  
}


function closeChart() {

        var modal = document.getElementById("chartsModal");
        var contentResponse = document.getElementById("chartsWrapper");
        modal.style.display = "none";
        contentResponse.style.display = "none";     
}

function showBuy() {
    var modal = document.getElementById("buyModal");
    var contentResponse = document.getElementById("buyWrapper");
    modal.style.display = "block";
    contentResponse.style.display = "block";  
}


function closeBuy() {

        var modal = document.getElementById("buyModal");
        var contentResponse = document.getElementById("buyWrapper");
        modal.style.display = "none";
        contentResponse.style.display = "none";     
}



function showAbout() {
    var modal = document.getElementById("aboutModal");
    var contentResponse = document.getElementById("aboutWrapper");
    modal.style.display = "block";
    contentResponse.style.display = "block";  
}

function closeAbout() {

        var modal = document.getElementById("aboutModal");
        var contentResponse = document.getElementById("aboutWrapper");
        modal.style.display = "none";
        contentResponse.style.display = "none";     
}