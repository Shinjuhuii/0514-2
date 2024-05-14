const bodyTag = document.querySelector("body")
const progressBar = document.querySelector(".progress") // progress 바 요소 선택

document.addEventListener("scroll", function(){
    const bodyHeight = bodyTag.scrollHeight - window.innerHeight; // 스크롤 가능한 세로 길이
    const pixels = window.scrollY; // 스크롤한 세로 픽셀 수
    const percentage = pixels / bodyHeight; // 스크롤된 세로 길이의 비율
    progressBar.style.height = `${percentage * 100}%`; // 세로 길이로 조절
})


const sectionA_P = document.querySelector('.wrap > #itemA p');
const sectionB_P = document.querySelector('.wrap > #itemB p');
const sectionC_P = document.querySelector('.wrap > #itemC p');
const sectionD_P = document.querySelector('.wrap > #itemD p');

const viewport_height = window.innerHeight;
console.log(viewport_height)

const section_P = document.querySelectorAll('.wrap p')
// section_P = array

document.addEventListener('scroll', function() {

    section_P.forEach(function(e, index) {
        const section_P_Dist = section_P[index].getBoundingClientRect().top //높이값을 다 저장

        if (section_P_Dist <= viewport_height/1.5) {
            section_P[index].style.opacity = 1;
        }
        else {
            section_P[index].style.opacity = 0.25;
        }
    })
})