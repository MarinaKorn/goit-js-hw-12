import{a as L,S as b,i as c}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const w="49725006-00816a3e1de0585a9b0ca4d46",v="https://pixabay.com/api/";async function f(o,t){return(await L.get(v,{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const y=document.querySelector(".gallery");document.querySelector(".loader");const p=document.querySelector(".load-more");let S=new b(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(s=>`
      <li class="gallery-item">
        <a href="${s.largeImageURL}">
          <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${s.likes}</p>
          <p><b>Views</b> ${s.views}</p>
          <p><b>Comments</b> ${s.comments}</p>
          <p><b>Downloads</b> ${s.downloads}</p>
        </div>
      </li>
    `).join("");y.insertAdjacentHTML("beforeend",t),S.refresh()}function q(){y.innerHTML=""}function B(){p.classList.remove("hidden")}function g(){p.classList.add("hidden")}const M=document.querySelector(".form"),m=document.querySelector(".load-more"),a=document.querySelector(".loader");document.querySelector(".gallery");let i="",n=1,d=0;M.addEventListener("submit",async o=>{if(o.preventDefault(),i=o.target.elements.searchQuery.value.trim(),n=1,q(),g(),a.classList.remove("hidden"),!!i)try{const t=await f(i,n);if(t.hits.length===0){c.error({message:"No images found."});return}h(t.hits),d=Math.ceil(t.totalHits/15),n<d&&B()}catch{c.error({message:"Something went wrong"})}finally{a.classList.add("hidden")}});m.addEventListener("click",async()=>{n+=1,m.insertAdjacentElement("beforebegin",a),a.classList.remove("hidden");try{const o=await f(i,n);h(o.hits),n>=d&&(g(),c.info({message:"You've reached the end of search results."}));const{height:t}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}catch{c.error({message:"Something went wrong"})}finally{a.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
