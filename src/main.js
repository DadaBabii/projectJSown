// const refs = {
//     slistGalleryEl: document.querySelector('.slist-card-section'),
    
// };

// import {STORAGE_KEY} from './public/addls';

// let key = 0;



// function loadFromLS(key) {
//   try {
//     for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   console.log(`${key}`);
//   const data = localStorage.getItem(key); 

//     const result = JSON.parse(data);
//     console.log(result);
//       renderImages(result);
//     };

//   } catch {
//     return console.log("something goes wrong...(((" );;
//   }

  
// };

// loadFromLS();




// function imageTemplate(result) {
//   return `<ul class="slist-card-list">
//           <button type="button" class="slist-del-btn js-slist-del-btn">
//             del
//           </button>
//           <li class="slist-card-item">
//             <div class="slist-card-picture">
//               <img src="${result.book_image}" alt="books" />
//             </div>
//             <div class="slist-info-container">
//               <h3 class="slist-book-header">${result.title}</h3>
//               <div class="slist-book-category">${result.list_name}</div>
//               <p class="slist-book-description">${result.description}</p>
//               <div class="slist-book-autor">${result.author} Autor</div>

//               <nav class="slist-nav">
//                 <ul class="slist-nav-list">
//                   <li class="slist-nav-item">
//                     <button type="button" class="slist-nav-link">
//                       amazone
//                       <a href= ${result.amazonURL} class="slist-nav-link"></a>
//                     </button>
//                   </li>

//                   <li class="slist-nav-item">
//                     <button type="button" class="slist-nav-link">
//                       app
//                       <a href=${result.appleURL} class="slist-nav-link"></a>
//                     </button>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </li>
//         </ul>`
       
// }



// function renderImages(result) {
//     const markup = imageTemplate(result);
//   refs.slistGalleryEl.insertAdjacentHTML('beforeend', markup);
  

//    refs.slistGalleryEl.addEventListener('click', onBtnClick); 
// };

 

// function onBtnClick(e) {
//   console.log(e.target.nodeName);
  
//    if (e.target.nodeName === 'BUTTON') {
//      console.log('i am your btn');
//      localStorage.removeItem(key);
//   }
    
   
    

// }









//  ЧЕРЕЗ МАСИВ


const slistGalleryEl = document.querySelector('.slist-card-section');
    




let key;                  //ключ
let arrOfBooks = [];       // збираємо данні localStorage в масив  


//завантажуємо з ЛС по данним ключа і збираємо в масив обєктів
function loadFromLS(key) {
  try {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      const data = localStorage.getItem(key);
      const result = JSON.parse(data);
      arrOfBooks.push(result);
 
    };
  } catch {console.log(error);}
         
};
      
  loadFromLS();
  


renderImages(arrOfBooks);     //рендеримо розмітку

  


function imageTemplate({ id, book_image,title,list_name,description,author,amazonURL,appleURL}) {
  return `<ul class="slist-card-list">
           <button type="button" data-id=${id} class="slist-del-btn js-slist-del-btn">
             del
         </button>
          <li class="slist-card-item">
           <div class="slist-card-picture">
             <img src="${book_image}" alt="books" />
             </div>
             <div class="slist-info-container">
               <h3 class="slist-book-header">${title}</h3>
               <div class="slist-book-category">${list_name}</div>
               <p class="slist-book-description">${description}</p>
               <div class="slist-book-autor">${author} Autor</div>

               <nav class="slist-nav">
                 <ul class="slist-nav-list">
                   <li class="slist-nav-item">
                     <button type="button" class="slist-nav-link">
                       amazone
                       <a href= ${amazonURL} class="slist-nav-link"></a>
                     </button>
                   </li>

                   <li class="slist-nav-item">
                     <button type="button" class="slist-nav-link">
                       app
                       <a href=${appleURL} class="slist-nav-link"></a>
                     </button>
                   </li>
                 </ul>
               </nav>
             </div>
           </li>
         </ul>`};

function imagesTemplate(array) {
    return array.map(imageTemplate).join('');
      
};

function renderImages(array) {
    const markup = imagesTemplate(array);
  slistGalleryEl.innerHTML = markup;
 
  
   slistGalleryEl.addEventListener('click', onBtnClick); // ставимо слухача на форму 
};

  function onBtnClick(e) {
 

  if (e.target.nodeName === 'BUTTON') {
    console.log(e.target.dataset.id);
    let bookId = (e.target.dataset.id);//знаходимо по ід на кнопку повішену
    localStorage.removeItem(e.target.dataset.id);
    // console.log(arrOfBooks);
   const newarr = arrOfBooks.filter(item => (item.id === bookId));
    arrOfBooks.splice(
      arrOfBooks.findIndex(item => item.id === bookId),
      1
    );
    console.log(arrOfBooks);
        
    renderImages(arrOfBooks);
    
  };


};
