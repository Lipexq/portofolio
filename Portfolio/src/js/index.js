$('#project').owlCarousel({
    autoplay: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 1500,
    loop: true,
    dots: false,
    nav: true,
    navText: ['<img src="/src/images/MenorQ.png">', '<img src="/src/images/MaiorQ.png">'],
    navSpeed: 800,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 1,
        nav: false
      },
      1024: {
        items: 2,
      }
    }
  });