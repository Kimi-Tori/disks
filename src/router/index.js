import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes.js';

const scrollTo = (hash = null, offset = 0, behavior = 'smooth') => {
  let top = 0;

  if (typeof hash === "string") {
      hash = hash.match(/^\#.+/) ? hash.substring(1) : hash;
      const el = document.getElementById(hash);
      if (el) top = el.getBoundingClientRect().top + window.scrollY + offset;
      else {
          console.warn("Scroll to element not found: " + hash);
          return;
      }
  } else if (typeof hash === "number") top = hash;

  window.scrollTo({
      behavior,
      left: 0,
      top
  });
};

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
