let tabsLinks = document.querySelectorAll(".nav__link");
let nav = document.querySelector(".nav");

let state = {
  init: function () {
    this.setActiveTab = 5;
    console.log(this.activeTab);
  },
  activeTab: 0,
  get getActiveTab() {
    return this.activeTab;
  },
  set setActiveTab(tabNum) {
    this.activeTab = tabNum;
    this.renderActiveTab(this.activeTab);
    this.setNavLinkActive(this.activeTab);
  },

  renderActiveTab: function (tabNum) {
    document.querySelectorAll(".tab").forEach((tab) => {
      if (tab.dataset.tab == tabNum) {
        tab.classList.add("active");
        return;
      }
      tab.classList.remove("active");
    });
  },
  setNavLinkActive: function (tabNum) {
    document.querySelectorAll('.nav__link').forEach((navLink) => {
      if (navLink.dataset.target == tabNum) {
        navLink.classList.add("active");
        return;
      }
      navLink.classList.remove("active");
    })
  }
};

tabsLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", function (event) {
    let tabNum = event.target.dataset.target;
    console.log(tabNum);
    state.setActiveTab = tabNum;
  });
});

//////main logic

state.init();

let workList = document.querySelectorAll('.work__list');


