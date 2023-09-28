// <======== Initializing AOS-Animations JS ========>
AOS.init({
    duration: 1200,
});


// <======== JS Program to Open & Close the Navigation Bar ========>
const middleNavigation = document.querySelector("#navbar .middle-navigation");
const middleNavigationLists = document.querySelectorAll("#navbar .middle-navigation ul li")
const menuBar = document.querySelector("#navbar .right-navigation #menu-btn");

menuBar.addEventListener("click", () => {
    middleNavigation.classList.toggle("show");
})

middleNavigationLists.forEach((navigation) => {
    navigation.addEventListener("click", () => {
        if (middleNavigation.classList.contains("show")) {
            middleNavigation.classList.toggle("show");
        }
    })
})


// <======== JS Program to Move the Background Image of Header ========>
const header = document.querySelector("#header");
const headerBackgroundImage = document.querySelector("#header .right-header .right-header-background-img img");

header.addEventListener("mousemove", (event) => {
    let x = (window.innerWidth - event.pageX * 2) / 90;
    let y = (window.innerHeight - event.pageX * 2) / 90;
    headerBackgroundImage.style.transform = `translateX(${y}px) translateY(${x}px)`;
})

header.addEventListener("mouseleave", () => {
    headerBackgroundImage.style.transform = `translateX(0px) translateY(0px)`;
})


// <======== JS Function For Adding Order-Container-Alert ========>
const orderContainerForm = document.querySelector("#order-container form");
const orderContainerFormInputs = document.querySelectorAll(".order-container-form-inputs");
const orderContainerAlert = document.querySelector("#order-container-alert");
const orderContainerAlertIcon = document.querySelector("#order-container-alert .fa-sharp");

orderContainerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    orderContainerFormInputs.forEach((input) => {
        input.value = ''
    })

    orderContainerAlert.classList.add("show");
    orderContainerAlertIcon.addEventListener("click", () => {
        orderContainerAlert.classList.remove("show");
    })

    setTimeout(() => {
        orderContainerAlert.classList.remove("show");
    }, 4000);
})


// <======== JS Function For Adding Footer-Alert ========>
const footerForm = document.querySelector("#footer form");
const footerFormInput = document.querySelector("#footer input");
const footerAlert = document.querySelector("#footer-alert");
const footerAlertIcon = document.querySelector("#footer-alert .fa-sharp");

footerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    footerFormInput.value = '';

    footerAlert.classList.add("show");
    footerAlertIcon.addEventListener("click", () => {
        footerAlert.classList.remove("show");
    })

    setTimeout(() => {
        footerAlert.classList.remove("show");
    }, 4000);
})