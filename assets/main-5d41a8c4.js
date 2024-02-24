(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const r={slistGalleryEl:document.querySelector(".slist-card-section")},n="added-book",d={book_image:"https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg",author:"Harlan Coben",list_name:"Audio Fiction",description:"",title:"I WILL FIND YOU",amazonURL:"https://www.amazon.com/dp/1538748363?tag=NYTBSREV-20",appleURL:"https://goto.applebooks.apple/9781543661385?at=10lIEQ"};function u(t,o){const l=JSON.stringify(o);localStorage.setItem(t,l)}u(n,d);function p(t){const o=localStorage.getItem(t);try{return JSON.parse(o)}catch{return console.log("something goes wrong...(((")}}const c=p(n);console.log(c);function m(t){return`<ul class="slist-card-list">
          <button type="button" class="slist-del-btn js-slist-del-btn">
            del
          </button>
          <li class="slist-card-item">
            <div class="slist-card-picture">
              <img src="${t.book_image}" alt="books" />
            </div>
            <div class="slist-info-container">
              <h3 class="slist-book-header">${t.title}</h3>
              <div class="slist-book-category">${t.list_name}</div>
              <p class="slist-book-description">${t.description}</p>
              <div class="slist-book-autor">${t.author} Autor</div>

              <nav class="slist-nav">
                <ul class="slist-nav-list">
                  <li class="slist-nav-item">
                    <button type="button" class="slist-nav-link">
                      amazone
                      <a href= ${t.amazonURL} class="slist-nav-link"></a>
                    </button>
                  </li>

                  <li class="slist-nav-item">
                    <button type="button" class="slist-nav-link">
                      app
                      <a href=${t.appleURL} class="slist-nav-link"></a>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </li>
        </ul>`}function f(t){const o=m(t);r.slistGalleryEl.insertAdjacentHTML("beforeend",o)}f(c);const g=document.querySelector(".js-slist-del-btn");g.addEventListener("click",b);function b(t){console.log(t.target),console.log("i am your btn"),r.slistGalleryEl.innerHTML="",localStorage.removeItem(n)}
//# sourceMappingURL=main-5d41a8c4.js.map
