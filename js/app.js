window.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const menuOpenBtn = document.querySelector('.menu-open')
    const body = document.querySelector('body')
    const langBtn = document.querySelector('.lang-wrap>dt')

    const navList = document.querySelectorAll('nav ul li')
    const section = document.querySelectorAll('#section-wrap>section')

    let pageNum = 0
    const totalNum = section.length

    navList.forEach(function (nav, index) {
        nav.addEventListener('click', (e) => {

            for (let i = 0; i < totalNum; i++) {
                navList[i].classList.remove('active')
            }
            e.preventDefault()

            navList[index].classList.add('active')
            gsap.to(window, {
                scrollTo: {
                    y: '#s' + index
                }
            })
        })
    })

    function pageChangeFunc() {
        for (let i = 0; i < totalNum; i++) {
            navList[i].classList.remove('active')
            section[i].classList.remove('active')
            body.classList.remove('act-' + i)


        }

        section[pageNum].classList.add('active')
        navList[pageNum].classList.add('active')

        body.classList.add('act-' + pageNum)

    }

    let funcObj = {
        f_0: function () {

        },
        f_1: function () {

        },
        f_2: function () {

        },
        f_3: function () {

        }
    };

    funcObj['f_0']()

    window.addEventListener('scroll', function () {
        let scroll = window.scrollY || window.pageYOffset

        for (let i = 0; i < totalNum; i++) {
            if (scroll > section[i].offsetTop - window.outerHeight / 6 &&
                scroll < section[i].offsetTop - window.outerHeight / 6 + section[i].offsetHeight) {
                pageNum = i
                funcObj['f_' + i]()
            }
        }
        pageChangeFunc()
    })

    langBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector('.lang-wrap dd')

        if (getComputedStyle(target).display === 'none') {
            target.style.display = "block"

            gsap.to(target, {
                opacity: 1,
                duration: .5,
                ease: "power2.out"
            })
        }
        else {
            gsap.to(target, {
                opacity: 0,
                duration: .5,
                ease: "power2.out"
            })
            target.style.display = "none"
        }
    })

    
    menuOpenBtn.addEventListener('click', (e) => {
        e.preventDefault()
        body.classList.toggle('modalNav-Open')
    })

    const samdasooSwiper = new Swiper('.sc3-slider-wrap', {
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
})