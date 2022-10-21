let navigation = document.querySelector("nav"),
    feature = document.querySelector(".feature"),
    toggle = document.querySelector(".toggle"),
    lists = document.querySelectorAll(".dropdown");

window.onscroll = () => {
    if (window.scrollY >= (feature.offsetTop - 100))
        navigation.style.backgroundColor = "var(--primary-color)";
    else
        navigation.style.backgroundColor = "transparent";
};

toggle.onclick = () => {
    if (navigation.style.backgroundColor == "var(--primary-color)")
        navigation.style.backgroundColor = "transparent"
    else
        navigation.style.backgroundColor = "var(--primary-color)";
};