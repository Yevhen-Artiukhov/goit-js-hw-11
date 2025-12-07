import{a as c,S as d,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="53588295-343522c470cf6eee7e060c944";c.defaults.baseURL="https://pixabay.com/api/";function y(i){const s={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return c.get("",{params:s}).then(a=>a.data)}const u=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const s=i.map(({webformatURL:a,largeImageURL:r,tags:e,likes:t,views:o,comments:m,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${e}"
            loading="lazy"
          />
        </a>
        <ul class="gallery-stats">
          <li class="stats-item">
            <p class="stats-title">Likes</p>
            <p class="stats-value">${t}</p>
          </li>
          <li class="stats-item">
            <p class="stats-title">Views</p>
            <p class="stats-value">${o}</p>
          </li>
          <li class="stats-item">
            <p class="stats-title">Comments</p>
            <p class="stats-value">${m}</p>
          </li>
          <li class="stats-item">
            <p class="stats-title">Downloads</p>
            <p class="stats-value">${f}</p>
          </li>
        </ul>
      </li>`).join("");u.innerHTML=s,h.refresh()}function v(){u.innerHTML=""}function S(){p.classList.remove("is-hidden")}function b(){p.classList.add("is-hidden")}const n=document.querySelector(".form"),q=n.querySelector('input[name="search-text"]');n.addEventListener("submit",w);function w(i){i.preventDefault();const s=q.value.trim();if(!s){l.warning({message:"Please enter a search query.",position:"topRight"});return}v(),S(),y(s).then(a=>{const{hits:r}=a;if(!r||r.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(r)}).catch(()=>{l.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{b(),n.reset()})}
//# sourceMappingURL=index.js.map
