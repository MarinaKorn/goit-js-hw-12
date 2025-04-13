import{a as w,S as v,i}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const S="49725006-00816a3e1de0585a9b0ca4d46",b="https://pixabay.com/api/";async function u(o,t){return(await w.get(b,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more");let q=new v(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const t=o.map(a=>`
    <li>
      <a href="${a.largeImageURL}">
        <img src="${a.webformatURL}" alt="${a.tags}" />
      </a>
      <div>
        <p>Likes ${a.likes}</p>
        <p>Views ${a.views}</p>
        <p>Comments ${a.comments}</p>
        <p>Downloads ${a.downloads}</p>
      </div>
    </li>
  `).join("");f.insertAdjacentHTML("beforeend",t),q.refresh()}function B(){f.innerHTML=""}function y(){m.classList.remove("is-hidden")}function g(){m.classList.add("is-hidden")}function M(){h.classList.remove("is-hidden")}function L(){h.classList.add("is-hidden")}const $=document.querySelector(".form"),O=document.querySelector(".load-more");let n="",s=1,l=0;$.addEventListener("submit",async o=>{if(o.preventDefault(),n=o.target.elements["search-text"].value.trim(),s=1,B(),L(),!!n){y();try{const t=await u(n,s);if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query."});return}p(t.hits),l=Math.ceil(t.totalHits/15),s<l&&M()}catch{i.error({message:"Something went wrong"})}finally{g()}}});O.addEventListener("click",async()=>{s+=1,y();try{const o=await u(n,s);p(o.hits),s>=l&&(L(),i.info({message:"You've reached the end of search results."}));const{height:t}=document.querySelector(".gallery li").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}catch{i.error({message:"Something went wrong"})}finally{g()}});
//# sourceMappingURL=index.js.map
