    var modal = document.getElementById("loginModal");
    var loginLink = document.getElementById("loginLink");
    var closeBtn = document.querySelector(".modal .close");

    loginLink.onclick = function(e) {
      e.preventDefault();
      modal.style.display = "block";
    }

    closeBtn.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }







     slideDiv = document.querySelector('.slide');
     images = [
      'resources/por.jpeg',
      'resources/image1.jpg',
      'resources/image2.jpg',
      'resources/image3.jpg'
      
    ];
    let currentIndex = 0;
    function changeSlideBackground() {
      currentIndex = (currentIndex + 1) % images.length;
      slideDiv.style.backgroundImage = url('${images[currentIndex]}');
    }
    setInterval(changeSlideBackground, 1500);




  function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} تمت إضافته إلى السلة`);
  }


