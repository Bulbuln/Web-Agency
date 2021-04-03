let ourSkills = document.querySelector(".skills");

window.onscroll = function () {


    let skillsOffsetTop = ourSkills.offsetTop;

    
    let skillsOuterHeight = ourSkills.offsetHeight;

    let windowHeight = this.innerHeight;


    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {

        skill.style.width = skill.dataset.progress;

    });

    }

};

let mainColor = localStorage.getItem('color_option') ;

let backgroundInterval ;
let backgroundOption = true;

let backgroundLocalItem = localStorage.getItem('background-option');

if (backgroundLocalItem !== null) {

    if (backgroundLocalItem === 'true') {
        backgroundOption = true ;   
    }
    else {
        backgroundOption = false
    }
    document.querySelectorAll('.random-backgrounds span').forEach(element => {
        element.classList.remove('active');
    });

    if (backgroundLocalItem === 'true') {
        document.querySelector(' .random-backgrounds .yes').classList.add('active')
    }
    else {
        document.querySelector('.random-backgrounds .no').classList.add('active')
    }
}


if (mainColor !== null) {
    document.documentElement.style.setProperty('--main-color', mainColor);
}

document.querySelectorAll('.color-list li ').forEach(element => {
    element.classList.remove('active');

    if (element.dataset.color === mainColor) {
        element.classList.add('active');
    }

});



// local-storage
let myGear = document.querySelector('.fa-cog') ;
let  myToggle = document.querySelector('.setting-box');

myGear.addEventListener('click', () => {
    myGear.classList.toggle('fa-spin');
    myToggle.classList.toggle('open')

    
});
// toggle-part

const colorLi = document.querySelectorAll('.color-list li ');

colorLi.forEach(li => {

    li.addEventListener('click', (e) => {

        
        console.log(e.target.dataset.color)

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        localStorage.setItem('color_option', e.target.dataset.color )

        handleActive(e)

    });


})

// color-parts

// switch-background 

const randomBackEl = document.querySelectorAll('.random-backgrounds span ');

randomBackEl.forEach(span => {

    span.addEventListener('click', (e) => {

        

        let myActive = e.target.parentElement.querySelectorAll('.active');

        handleActive(e);

        if (e.target.dataset.background === 'yes') {
            backgroundOption = true

            randomizeImgs();
        
            localStorage.setItem('background_option', true)
        } 
        else {
            backgroundOption = false;
            clearInterval(backgroundInterval)
            localStorage.setItem('background_option', false)
        }

        

    });


});

// switch-background 




let landingPage = document.querySelector('.landing-page');
let imgsArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];





function randomizeImgs () {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * imgsArray.length);
        landingPage.style.backgroundImage = 'url("img/' + imgsArray[randomNumber] + '")'; 
        },1000)
    }
}

randomizeImgs();

// random-background

window.addEventListener('scroll', function () { 

    
    let skillsOffsetTop = ourSkills.offsetTop;
    
    
    let skillsOuterHeight = ourSkills.offsetHeight;
    
    
    let windowHeight = this.innerHeight;
    
    
    let windowScrollTop = this.pageYOffset;

    
    
    if (windowScrollTop >= (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-progress span");

        allSkills.forEach(skill => {

        skill.style.width = skill.dataset.progress;

    });

    }

});

// start create popup

let ourGallery = document.querySelectorAll('.iamges-box img');

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {
        let closeButton = document.createElement('span'); 

        closeButton.innerText = 'X';
        closeButton.className = 'close-button';

        let overlay = document.createElement('div');

        overlay.className = 'popup-overlay'

        document.body.appendChild(overlay);

        let popupBox = document.createElement('div');

        popupBox.className = 'popup-box';

        let popupImage = document.createElement('img') ;

        popupImage.src = img.src;
        
        popupBox.appendChild(popupImage);

        popupBox.appendChild(closeButton);


        document.body.appendChild(popupBox);

        closeButton.addEventListener('click', (e) => {
            myEvent = e.currentTarget;

            myEvent.parentNode.remove();

            document.querySelector('.popup-overlay').remove();
        })

    });
});


const allBullets = document.querySelectorAll('.bullet'); 
const allNavs = document.querySelectorAll('.links li a ');

function scrollToSomewhere(elements) {
    elements.forEach(ele => {
        ele.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:'smooth'
            })
    
        })
    })
};

scrollToSomewhere(allBullets);
scrollToSomewhere(allNavs)


function handleActive(ev) {
    
    let myActive = ev.target.parentElement.querySelectorAll('.active');

    myActive.forEach(element => {
        element.classList.remove('active');

    });

    ev.target.classList.add('active');
}


let bulletsSpan = document.querySelectorAll('.bullets-option span');
let bulletContainer = document.querySelector('.nav-bullets');
let bulletLocalItem = localStorage.getItem('bullets_option');

if (bulletLocalItem !== null) {
    bulletsSpan.forEach(span => {
        span.classList.remove('active')
    });

    if (bulletLocalItem === 'block') {
        bulletContainer.style.display = 'block';
        document.querySelector('.bullets-option .yes').classList.add('active');
    } else {
        
        bulletContainer.style.display = 'none';
        document.querySelector('.bullets-option .no').classList.add('active');

    }
    
};

bulletsSpan.forEach(span => {
    span.addEventListener('click', (e) => {

        if (span.dataset.display === 'show') {
            bulletContainer.style.display = 'block';

            localStorage.setItem('bullets_option', 'block');
        } else {
            bulletContainer.style.display = 'none';
            localStorage.setItem('bullets_option', 'none');
        }

        handleActive(e);
    })
})

//reset option 

document.querySelector('.reset-option').addEventListener('click', () => {

    localStorage.clear();

    window.location.reload()
})


let myTogButton = document.querySelector('.toggle-menu');
let myLinks = document.querySelector('.links');
myTogButton.addEventListener('click', function (e) {

    e.stopPropagation();
    this.classList.toggle('active');
    myLinks.classList.toggle('opens');
    
});



document.addEventListener('click', (e) => {

    if (e.target !== myTogButton && e.target !== myLinks) {

        if (myLinks.classList.contains('opens')) {

            myTogButton.classList.toggle('active')
            myLinks.classList.toggle('opens')
        }
    }
});

myLinks.addEventListener('click', function (e) {

    e.stopPropagation();
    
});