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

        localStorage.setItem('color_option',e.target.dataset.color )

        let myActive = e.target.parentElement.querySelectorAll('.active');

        myActive.forEach(element => {
            element.classList.remove('active');

        });

        e.target.classList.add('active');

    });


})

// color-parts

// switch-background 

const randomBackEl = document.querySelectorAll('.random-backgrounds span ');

randomBackEl.forEach(span => {

    span.addEventListener('click', (e) => {

        

        let myActive = e.target.parentElement.querySelectorAll('.active');

        myActive.forEach(element => {
            element.classList.remove('active');

        });

        e.target.classList.add('active');

        if (e.target.dataset.background === 'yes') {
            backgroundOption = true

            randomizeImgs();
            
            localStorage.setItem('background_option', true)
        } else {
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

    console.log(skillsOuterHeight)
    console.log(skillsOffsetTop)
    console.log(windowHeight)
    console.log(windowScrollTop)
    
    if (windowScrollTop >= (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-progress span");

        allSkills.forEach(skill => {

        skill.style.width = skill.dataset.progress;

    });

    }

});

const allBullets = document.querySelectorAll('.bullet'); 

allBullets.forEach(bullet => {

    bullet.addEventListener('click', (e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior:'smooth'
        })
    })
});

const allNavs = document.querySelectorAll('.links li a ');

allNavs.forEach(nav => {
    nav.addEventListener('click', (e) => {

        document.querySelector(e.target.dataset.nav).scrollIntoView({
            behavior:'smooth'
        })

    })
});


