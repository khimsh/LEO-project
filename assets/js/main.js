'use strict';

const openNavBtn = document.querySelector('#openNav');
const nav = document.querySelector('.project-nav');

document.querySelector('.container').addEventListener('click', (e) => {
  if (!nav.contains(e.target) && nav.classList.contains('openNav')) {
    nav.classList.remove('openNav');
  }
});

openNavBtn.addEventListener('click', (e) => {
  nav.classList.add('openNav');
});

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });
    target.classList.add('active');
    nav.classList.remove('openNav');
  });
});
