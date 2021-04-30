// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let b=document.getElementById("myBtn")
    document.getElementById("myBtn")
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}