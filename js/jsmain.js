// $(function(){
//     // alert('')
//     $('.swiper-slide').each(function(index, el){
//         $(el).click(function(){
//             const imgsrc = $(this).find('img').attr('src')

//             $('.popup').find('img').attr('src', imgsrc)

//             $('.popup').addClass('on')
            
//         })
//     })
//     $('.popup button').click(function(){
//         $('.popup').removeClass('on')
//     })
// })
$(function(){
    // alert('')
    $('.swiper-slide').each(function(index, el){
        $(el).click(function(){
            const imgsrc = $(this).find('img').attr('src')

            $('.popup').find('.popup-img').attr('src', imgsrc)

            $('.popup').addClass('on')
            
        })
    })
    $('.popup button').click(function(){
        $('.popup').removeClass('on')
    })
})

// $(function(){
//     // 이미지를 클릭 했을 때 팝업이 나옴
//     $('button').click(function(){
//         $('.popup').addClass('on')
//     })
//     $('.popup button').click(function(){
//         $('.popup').removeClass('on')
//     })
// })