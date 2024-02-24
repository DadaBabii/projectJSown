const refs = {
    slistGalleryEl: document.querySelector('.slist-card-section'),

};

// function createStorageKey() {

// } 
const STORAGE_KEY = 'added-book';

const addedBook1 = {
    book_image: "https://storage.googleapis.com/du-prd/books/images/9781538748367.jpg",
    author: "Harlan Coben",
    list_name: "Audio Fiction",
    description: "A man imprisoned for murdering his 3-year-old son becomes convinced his son is still alive and plans an escape. Read by Steven Weber. 10 hours, 16 minutes unabridged.",
    title: "I WILL FIND YOU",
    amazonURL: "https://www.amazon.com/dp/1538748363?tag=NYTBSREV-20",
    appleURL: "https://goto.applebooks.apple/9781543661385?at=10lIEQ",
};
 const addedBook2 = {
    book_image: "https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg",
    author: "Harlan Coben",
    list_name: "Audio Fiction",
    description: "",
    title: "I WILL FIND YOU",
    amazonURL: "https://www.amazon.com/dp/1538748363?tag=NYTBSREV-20",
    appleURL: "https://goto.applebooks.apple/9781543661385?at=10lIEQ",
}


function saveToLS(STORAGE_KEY, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(STORAGE_KEY, jsonData);
};

saveToLS(STORAGE_KEY, addedBook2);




 function loadFromLS(key) {
  const data = localStorage.getItem(key); 

  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return console.log("something goes wrong...(((" );;
  }
};

const sbook = loadFromLS(STORAGE_KEY);
console.log(sbook);




function imageTemplate(result) {
  return `<ul class="slist-card-list">
          <button type="button" class="slist-del-btn js-slist-del-btn">
            del
          </button>
          <li class="slist-card-item">
            <div class="slist-card-picture">
              <img src="${result.book_image}" alt="books" />
            </div>
            <div class="slist-info-container">
              <h3 class="slist-book-header">${result.title}</h3>
              <div class="slist-book-category">${result.list_name}</div>
              <p class="slist-book-description">${result.description}</p>
              <div class="slist-book-autor">${result.author} Autor</div>

              <nav class="slist-nav">
                <ul class="slist-nav-list">
                  <li class="slist-nav-item">
                    <button type="button" class="slist-nav-link">
                      amazone
                      <a href= ${result.amazonURL} class="slist-nav-link"></a>
                    </button>
                  </li>

                  <li class="slist-nav-item">
                    <button type="button" class="slist-nav-link">
                      app
                      <a href=${result.appleURL} class="slist-nav-link"></a>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </li>
        </ul>`
       
}

// function imagesTemplate(array) {
//     return array.map(imageTemplate).join('');
      
// }

function renderImages(result) {
    const markup = imageTemplate(result);
    refs.slistGalleryEl.insertAdjacentHTML('beforeend', markup);
    
};

renderImages(sbook);


// console.log(imageTemplate(sbook));

const slistDelBtn = document.querySelector('.js-slist-del-btn');

slistDelBtn.addEventListener('click', onBtnClick);

function onBtnClick(e) {
    console.log(e.target);
    console.log('i am your btn');
    refs.slistGalleryEl.innerHTML = '';
    localStorage.removeItem(STORAGE_KEY);

}

