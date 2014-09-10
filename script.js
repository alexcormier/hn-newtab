var titles = document.getElementsByClassName("title");
for (i = 0; i < titles.length - 1; i++) {
    var links = titles[i].getElementsByTagName("a");
    if (links.length === 1) {
        links[0].setAttribute("target", "_blank");
    }
}
