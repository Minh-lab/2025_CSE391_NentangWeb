  document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const menu = document.querySelector("#menu-icon");
    menu.addEventListener("click", (e)=>{
        e.stopPropagation();
        e.preventDefault();
        sidebar.style.display = "flex";
    })
    const close = document.querySelector("#close-icon");
    close.addEventListener("click",(e)=>{
        e.preventDefault();
        e.stopPropagation();
        sidebar.style.display = "none";
    })
  });

