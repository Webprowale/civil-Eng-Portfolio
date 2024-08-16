new WOW().init();

console.log('app js is workimng');

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800, 
    speedAsDuration: true
});

document.querySelectorAll('.view-more-link').forEach(function(link) {
  link.addEventListener('click', function() {
      const images = JSON.parse(this.getAttribute('data-images'));
      const carouselInner = document.querySelector('#modalCarousel .carousel-inner');

    
      carouselInner.innerHTML = '';

      
      images.forEach((image, index) => {
          const itemDiv = document.createElement('div');
          itemDiv.classList.add('carousel-item');
          if (index === 0) itemDiv.classList.add('active'); 

          const imgElement = document.createElement('img');
          imgElement.src = image;
          imgElement.classList.add('d-block', 'w-100');
          imgElement.alt = `Slide ${index + 1}`;

          itemDiv.appendChild(imgElement);
          carouselInner.appendChild(itemDiv);
      });
  });
});


document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const fileUrl = "./Engr_Olabanji_Akinnibi(CV).pdf";
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const mailtoLink = `mailto:olabanjiakinnibi@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(
      email
    )}%0A%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  });
