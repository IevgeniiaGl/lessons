"use strict"

document.addEventListener('click', documentClick);

function documentClick(e){
    const targetItem = e.target;
    console.log(targetItem);
    if (targetItem.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open');
    }
}








const tabNavItems = document.querySelectorAll('.tabs-projects__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let curentActiveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest('.tabs-projects__button')){
    tabNavItems.forEach((tabNavItem, index) => {
      if(tabNavItem.classList.contains('active')){
        curentActiveIndex = index;
        tabNavItem.classList.remove('active');
      }
      if(tabNavItem === targetElement){
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active');
    tabItems[curentActiveIndex].classList.remove('active');
    tabItems[newActiveIndex].classList.add('active');
  }
});