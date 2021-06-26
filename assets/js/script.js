'use strict';

const openNavBtn = document.querySelector('#openNav');
const nav = document.querySelector('.project-nav');

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

// Open Navigation
openNavBtn.addEventListener('click', (e) => {
  if (!openNavBtn.classList.contains('opened')) {
    nav.classList.add('openNav');
    openNavBtn.innerHTML = '<i class="medium material-icons">close</i>';
    openNavBtn.classList.add('opened');
  } else {
    closeNav();
  }
});

// Close Navigation on outside click
document.querySelector('.container').addEventListener('click', (e) => {
  if (!nav.contains(e.target) && nav.classList.contains('openNav')) {
    closeNav();
  }
});

// Change Tabs & Close Navigation when tab is clicked
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });
    target.classList.add('active');
    closeNav();
  });
});

function closeNav() {
  openNavBtn.classList.remove('opened');
  nav.classList.remove('openNav');
  openNavBtn.innerHTML = '<i class="medium material-icons">menu</i>';
}
