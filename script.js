$('.tablink').on('click', (event)=>{
  const target = $(event.target)
  $('.tabcontent').each(()=>{
    if ($('.tabcontent').children('.tablink') !== target){

      console.log('howdy');
    }
    
  })
  target.siblings().toggleClass('hidden') 
})


//For Header Bar
const toggleMenu = e => {
  $('.header-dropdown-wrap').toggleClass('show-menu');
}

$('.dropdown-menu-label').on('click', toggleMenu);

