document.addEventListener('DOMContentLoaded', (e) => {
  console.log(`Document is ready!`);

  console.log(Math.round(Math.random()*12));

  var vinyls = [
      {"id": "0", "name":"Asia", "priceZAR": "6 000", "priceUSD": "140", "rating": "★","path":"assets/asia.jpg"},
      {"id": "1", "name":"Santorini", "priceZAR": "20 000", "priceUSD": "500", "rating": "★★","path":"assets/santorini.jpg"},
      {"id": "2", "name":"European Cruise", "priceZAR": "13 000", "priceUSD": "239", "rating": "★★★★★★" ,"path" :"assets/European Cruise.jpg"},
      {"id": "3", "name":"Italy", "priceZAR": "15 000", "priceUSD": "300", "rating": "★★★★★★" , "path": "assets/italy.jpg"},
      {"id": "4", "name":"Mexico", "priceZAR": "9 000", "priceUSD": "200", "rating": "★★★" ,"path" :"assets/mexico.jpg"},
      {"id": "5", "name":"Turkey", "priceZAR": "12 000", "priceUSD": "280", "rating": "★★★★" , "path" :"assets/turkey.jpg"},
      {"id": "6", "name":"Bali", "priceZAR": "10 000", "priceUSD": "250", "rating": "★★★★★" ,"path" :"assets/bali.jpeg"},
      {"id": "7", "name":"Thailand", "priceZAR": "8 000", "priceUSD": "180", "rating": "★★★★★" , "path" : "assets/thailand.jpg"},
      {"id": "8", "name":"Brazil", "priceZAR": "9 000", "priceUSD": "200", "rating": "★★★" , "path" : "assets/brazil.jpg"},
      {"id": "9", "name":"Machu Picchu", "priceZAR": "10 000", "priceUSD": "250", "rating": "★★★" , "path" :"assets/machu picchu.jpg"},
      {"id": "10", "name":"Maldives", "priceZAR": "15 000", "priceUSD": "300", "rating": "★★★★★" , "path": "assets/maldives.jpg"},
      {"id": "11", "name":"Paris", "priceZAR": "11 000", "priceUSD": "260", "rating": "★★★★★★" , "path": "assets/paris.jpg"},
      {"id": "12", "name":"Taj Mahal", "priceZAR": "7 000", "priceUSD": "150", "rating": "★★★★" , "path": "assets/tajmahal india.jpg"},
  ]

  // Random vinyl
  document.getElementById("generateVinyl").addEventListener("click", function () {
    var randomVinyl = document.getElementById("random_vinyl");
    
    var randomVinylIndex= (Math.round(Math.random()*(vinyls.length-1)))

    randomVinyl.innerHTML= '<div class="trip-card"><img height="200" src= "'+ vinyls[randomVinylIndex].path+'"><p>'+vinyls[randomVinylIndex].rating+'</p><h3>'+vinyls[randomVinylIndex].name+'</h3><p class="ZAR">R'+vinyls[randomVinylIndex].priceZAR+'</p><p class="USD" style="display: none;">$'+vinyls[randomVinylIndex].priceUSD+'</p><button class="btn" onclick="addToCart('+ vinyls[randomVinylIndex].id +')">Purchase Ticket</button></div>';
    convert_display();
  })

  var least = 9999999999999999999;
  var least_index;
  var most = 0;
  var most_index;

  for (let index = 0; index < vinyls.length; index++) {

    if (vinyls[index].priceZAR < least) {
      console.log(least);
      least = vinyls[index].priceZAR;
      least_index = index;

    }
    else if (vinyls[index].priceZAR > most) {
      console.log(most);
      most = vinyls[index].priceZAR;
      most_index = index;
    }
  }

  console.log("least " + least_index);
  console.log("most " + most_index);

  // Most expensive vinyl
  document.getElementById("most_expensive").addEventListener("click", function () {
    var mvv = document.getElementById("mvv");
    console.log(vinyls);
    mvv.innerHTML = '<div class="trip-card"><img height="200" src="' + vinyls[most_index].path + '"><p>' + vinyls[most_index].rating + '</p><h3>' + vinyls[most_index].name + '</h3><p class="ZAR">R' + vinyls[most_index].priceZAR + '</p><p class="USD" style="display: none;">$' + vinyls[most_index].priceUSD + '</p><button class="btn" onclick="addToCart(' + vinyls[most_index].id + ')">Purchase Ticket</button></div>';
    convert_display();
  })

  // Cheapest vinyl
  document.getElementById("least_expensive").addEventListener("click", function () {
    var lvv = document.getElementById("lvv");

    lvv.innerHTML= '<div class="trip-card"><img height="200" src= "'+ vinyls[least_index].path+'"><p>'+vinyls[least_index].rating+'</p><h3>'+vinyls[least_index].name+'</h3><p class="ZAR">R'+vinyls[least_index].priceZAR+'</p><p class="USD" style="display: none;">$'+vinyls[least_index].priceUSD+'</p><button class="btn" onclick="addToCart('+ vinyls[least_index].id +')">Purchase Ticket</button></div>';
    convert_display();
    })

  var dollars = document.getElementsByClassName('USD');
      var rands = document.getElementsByClassName('ZAR');

      var isConverted = false;
        // Currency Converter
        document.getElementById("converter").addEventListener("click", function() {
            console.log("button pressed");
            if (isConverted) {
                isConverted = false;
            } else {
                isConverted = true;
            }
            convert_display();
        });
     
        function convert_display(){
            if (isConverted) {
                for (var i=0;i<dollars.length;i+=1){
                dollars[i].style.display = 'block';
                }
                for (var i=0;i<rands.length;i+=1){
                rands[i].style.display = 'none';
                }
            } else {
                for (var i=0;i<dollars.length;i+=1){
                dollars[i].style.display = 'none';
                }
                for (var i=0;i<rands.length;i+=1){
                rands[i].style.display = 'block';
                }
            }
        }
       
        convert_display();

        //Cart
        var cart = [];
        var totalZAR = 0;
        var totalUSD = 0;

        function addToCart(index) {
          cart.push(index);
          console.log(cart);
          
          totalZAR = totalZAR + parseInt(vinyls[index].priceZAR);
          totalUSD = totalUSD + parseInt(vinyls[index].priceUSD);

          console.log("Total ZAR: " + totalZAR);
          console.log("Total USD: " + totalUSD);

          display_cart();
        }
        // Items in cart
        function display_cart() {
            var cart_div = document.getElementById('cart');
            var checkout_page = document.getElementById('checkout_page');
            cart_div.innerHTML = "";
            if (cart.length != 0) {
                for (let index = 0; index < cart.length; index++) {
                cart_div.innerHTML = cart_div.innerHTML + '<div class="trip-card"><img height="200" src= "'+ vinyls[cart[index]].path+'"><p>'+vinyls[cart[index]].rating+'</p><h3>'+vinyls[cart[index]].name+'</h3><p class="ZAR">R'+vinyls[cart[index]].priceZAR+'</p><p class="USD" style="display: none;">$'+vinyls[cart[index]].priceUSD+'</p></div>'
                }
                cart_div.innerHTML = cart_div.innerHTML + '<button class="btn" onclick="clear_cart()">Clear Cart</button>';
                display_total(totalZAR, totalUSD);
                checkout_page.style.display = "block";
            } else{
                cart_div.innerHTML = "<h2>Cart is empty</h2>"
                checkout_page.style.display = "none";
            }
            document.getElementById('items-in-cart').innerHTML = cart.length;
            convert_display();
        }
        display_cart();

        //  Displays total amount
        function display_total(amountZAR, amountUSD) {
            var total_zar = document.getElementById('cart-total-zar');
            var total_usd = document.getElementById('cart-total-usd');
            total_zar.innerHTML = "R" + amountZAR;
            total_usd.innerHTML = "$" + amountUSD;
        }

        // Clear cart
        function clear_cart() {
            cart = [];
            totalZAR = 0;
            totalUSD = 0;

            var coupon = document.getElementById('coupon_field');
            var error = document.getElementById('coupon-error');
            var submit = document.getElementById('apply-coupon');

            coupon.disabled = false;
            coupon.placeholder = "Coupon code";
            submit.disabled = false;
            coupon.style = "";

            display_cart();
        }

      
        // Deducts the discount 
        function applyCoupon() {
            var coupon = document.getElementById('coupon_field');
            var error = document.getElementById('coupon-error');
            var submit = document.getElementById('apply-coupon');

            if (coupon.value == "DV100") {
                totalZAR = totalZAR - (totalZAR / 100 * 25);
                totalUSD = totalUSD - (totalUSD / 100 * 25);
                error.style.display = "none";
                coupon.style = "";
                display_total(totalZAR, totalUSD);
                coupon.disabled = true;
                coupon.placeholder = "Coupon successful";
                coupon.value = "";
                submit.disabled = true;
            } else {
                // Shows an error if the code is invalid
                error.style.display = "block";
                coupon.placeholder = "INVALID COUPON CODE"
                coupon.style.borderColor = "red";
            }
        }

        //Items in cart and updates the number of items sold
        var vinyls_sold = 0;
        function checkout() {
            vinyls_sold = vinyls_sold + cart.length;
            document.getElementById('vinyls-sold').innerHTML = `<h3>We have sold <span class="vinyls-sold-number">` + vinyls_sold + `</span> trips </h3>`;
            clear_cart();
        }

        var slidePosition = 1;
        SlideShow(slidePosition);

        function plusSlides(n) {
        SlideShow(slidePosition = slidePosition + n);
        }

        function currentSlide(n) {
        SlideShow(slidePosition = n);
        }

        function SlideShow(n) {
        var i;
        var slides = document.getElementsByClassName("Containers");
        var circles = document.getElementsByClassName("dots");
        if (n > slides.length) {slidePosition = 1}
        if (n < 1) {slidePosition = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < circles.length; i++) {
            circles[i].className = circles[i].className.replace(" enable", "");
        }
        slides[slidePosition-1].style.display = "block";
        circles[slidePosition-1].className += " enable";
        } 

        ratings();
        function ratings() {
            console.log("changed");
            var rating= document.getElementById("rating").value;
            var starrating= document.getElementById("StarRating");

            starrating.innerHTML = "";
            for (let index = 0; index < vinyls.length; index++) {
                if (rating==vinyls[index].rating) {
                starrating.innerHTML= starrating.innerHTML+'<div class="trip-card"><img height="200" src="'+ vinyls[index].path+'"><p>'+vinyls[index].rating+'</p><h3>'+vinyls[index].name+'</h3><p class="ZAR">R'+vinyls[index].priceZAR+'</p><p class="USD" style="display: none;">$'+vinyls[index].priceUSD+'</p><button class="btn" onclick="addToCart('+ vinyls[index].id +')">Purchase Ticket</button></div>';
                }
            }
            convert_display();
        }

});


const apiKey = 'ca63f58065e1d4e5e31e1f6a183529d1';
const city = 'Cape Town'; // Replace with the desired city

const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

function fetchWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name + ', ' + data.sys.country;
            temperatureElement.textContent = data.main.temp + '°C';
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}

fetchWeather();


// When the document loads
$(document).ready(function(){

    console.log("Hello");

    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});

    // -----------------------------------------
    // Browse Page

    // Hide all description text from the plant cards
    $("#descriptionText").hide();

  });

  // When the card is clicked
  $(".card").click(function(){

    // Toggle the price & description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // Resize the image to fit the additional content
    $(".card-img-top").toggleClass("small");

  });

  $(document).ready(function() {
    // Toggle accordion content
    $(".accordion-item-header").click(function() {
      $(this).parent().toggleClass("active");
      $(this).next().slideToggle();
    });
  });

  $(document).ready(function() {
    // Add active class to clicked trip card and show/hide purchase button
    $(".trip-card").click(function() {
      $(".trip-card").removeClass("active");
      $(this).addClass("active");
      $(".purchase-btn").hide();
      $(this).find(".purchase-btn").show();
    });
  });
  