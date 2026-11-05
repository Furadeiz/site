function Hidefilter(){
    const getForm = document.getElementById("filterForm")
    
     console.log('Клик сработал!');
    if (getForm.style.display === "none") {
        getForm.style.display = 'flex';
    } else {
        getForm.style.display = "none";
    }
}document.getElementById("filterForm").style.display = 'none';