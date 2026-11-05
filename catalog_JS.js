const openBtn = document.getElementById("openFilterPanel");
const getForm = document.getElementById("filterForm");

getForm.style.display = "none";

openBtn.addEventListener("click", () => {

    console.log('click');
    if (getForm.style.display === "none") {
         getForm.style.display = 'flex';
     } else {
        getForm.style.display = "none";
     }
});
