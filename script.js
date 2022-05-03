// MENI
// ARROW FUNCTION
const mobileMenu = () => {
    let meni = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    if (btn.innerText === 'MENU') {
        meni.style.display = 'block';
        btn.innerText = 'CLOSE';
    }
    else {
        meni.style.display = 'none';
        btn.innerText = 'MENU';
    }
}


// SLIDER
let rightBtn = document.getElementById('right-btn');
let leftBtn = document.getElementById('left-btn');
// Pošto ima više slika, moram sve dohvatiti
let pictures = document.querySelectorAll('.slider-images img');

let imageNumber = 0;

rightBtn.addEventListener('click', () => {
    displayNone();
    imageNumber++;

    if (imageNumber === pictures.length) {
        imageNumber = 0;
    }

    pictures[imageNumber].style.display = 'block';
})

leftBtn.addEventListener('click', () => {
    displayNone();
    imageNumber--;

    if (imageNumber === -1) {
        imageNumber = pictures.length - 1;
    }

    pictures[imageNumber].style.display = 'block';
})

const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    })
}


// PORTFOLIO
const portfolioSort = (button) => {
    let category = button.getAttribute('data-category');

    // PRVO SAKRIJEM SVE
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');
    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    })

    // AKO JE KATEGORIJA 'sve', SVE SE PRIKAŽE
    if (category === 'sve') {
        portfolioItems.forEach((item) => {
            item.style.display = 'block';
        })
    }

    portfolioItems.forEach((item) => {
        if (item.getAttribute('data-category').includes(category)) {
            item.style.display = 'block';
        }
    })
}



// MODAL BUTTON (otvaranje modal prozora)
const prikaziModal = document.querySelector('.popup-modal');
const overlay = document.querySelector('.overlay');

// OTVARANJE MODALA
const openModal = () => {
    prikaziModal.style.display = 'block';
    overlay.style.display = 'block';
}

// ZATVARANJE MODALA
const closeModal = () => {
    prikaziModal.style.display = 'none';
    overlay.style.display = 'none';
}
