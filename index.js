import{a as S,S as v,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const b="49725006-00816a3e1de0585a9b0ca4d46",q="https://pixabay.com/api/";async function u(a,t){return(await S.get(q,{params:{key:b,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const f=document.querySelector(".gallery"),y=document.querySelector(".loader"),m=document.querySelector(".load-more");let P=new v(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const t=a.map(o=>`
    <li>
      <a href="${o.largeImageURL}">
        <img src="${o.webformatURL}" alt="${o.tags}" />
      </a>
      <div>
        <p>Likes ${o.likes}</p>
        <p>Views ${o.views}</p>
        <p>Comments ${o.comments}</p>
        <p>Downloads ${o.downloads}</p>
      </div>
    </li>
  `).join("");f.insertAdjacentHTML("beforeend",t),P.refresh()}function B(){f.innerHTML=""}function p(){y.classList.remove("is-hidden")}function g(){y.classList.add("is-hidden")}function M(){m.classList.remove("is-hidden")}function L(){m.classList.add("is-hidden")}const w=document.querySelector("#search-form"),$=w.querySelector('input[name="searchQuery"]'),O=document.querySelector(".load-more");let i="",s=1,l=0;w.addEventListener("submit",async a=>{if(a.preventDefault(),i=$.value.trim(),s=1,B(),L(),!i){n.warning({message:"Please enter a search query."});return}p();try{const t=await u(i,s);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again."});return}h(t.hits),l=Math.ceil(t.totalHits/15),s<l&&M()}catch{n.error({message:"Something went wrong. Please try again."})}finally{g()}});O.addEventListener("click",async()=>{s+=1,p();try{const a=await u(i,s);h(a.hits),s>=l&&(L(),n.info({message:"We're sorry, but you've reached the end of search results."}));const{height:t}=document.querySelector(".gallery a").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}catch{n.error({message:"Something went wrong. Please try again."})}finally{g()}});
//# sourceMappingURL=index.js.map
