$('.tablink').on('click', (event)=>{
  const target = $(event.target)
  $('.tabcontent').each(()=>{
    if ($('.tabcontent').children('.tablink') !== target){

      console.log('howdy');
    }
    
  })
  target.siblings().toggleClass('hidden') 
})



