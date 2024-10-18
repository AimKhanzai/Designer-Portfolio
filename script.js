$('.responsive').slick({
    infinite: false,
    dots: true,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  const slides=document.querySelectorAll('.myslide');
  const next= document.getElementById('next');
  const prev=document.getElementById('prev');
  slides.forEach(function(slide, index)
  {
    slide.style.left=`${index*350.4+'px'/2}`;
  });
  let count=0;
  const totalSlides = slides.length;
  next.addEventListener('click', function(){
    if (count === totalSlides) return;
    count = (count + 1) % totalSlides;
slider()
  });
  prev.addEventListener('click', function(){
    if (count === 0) return;
    count = (count - 1 + totalSlides) % totalSlides;
    slider()
      });;

      function slider()
      {
        slides.forEach(function(slide){
          slide.style.transform= `translateX(-${count*350.4+'px'}`;
        });
      }


      //sLIDER 2


      
  const slides1=document.querySelectorAll('.slides');
  const next1= document.getElementById('next1');
  const prev1=document.getElementById('prev1');
  slides1.forEach(function(slide1, index1)
  {
    slide1.style.left=`${index1*350.4+'px'/2}`;
  });
  let count1=0;
  const totalSlides1 = slides1.length;
  next1.addEventListener('click', function(){
    if (count1 === totalSlides1) return;
    count1 = (count1 + 1) % totalSlides1;
slider1()
  });
  prev1.addEventListener('click', function(){
    if (count1 === 0) return;
    count1 = (count1 - 1 + totalSlides1) % totalSlides1;
    slider1()
      });;

      function slider1()
      {
        slides1.forEach(function(slide1){
          slide1.style.transform= `translateX(-${count1*350.4+'px'}`;
        });
      }
  // const auto=document.getElementById('auto');
  // const interval=3000;
  // let slideInterval;
  // const nextSlide=()=>{
  //   const current=document.querySelector('.current');
  //   current.classList.remove('current');
  //   if(current.nextElementSibling){
  //     current.nextElementSibling.classList.add('current');
  //   }else{
  //     slides[0].classList.add('current');
  //   }
  //   setTimeout(()=>{
  //     current.classList.remove('current');
  //   },1000);
  // }
  // const prevSlide=()=>{
  //   const current=document.querySelector('.current');
  //   current.classList.remove('current');
  //   if(current.previousElementSibling){
  //     current.previousElementSibling.classList.add('current');
  //   }else{
  //     slides[slides.length-1].classList.add('current');
  //   }
  //   setTimeout(()=>{
  //     current.classList.remove('current');
  //   },1000);
  // }