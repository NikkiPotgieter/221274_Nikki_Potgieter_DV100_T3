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
  