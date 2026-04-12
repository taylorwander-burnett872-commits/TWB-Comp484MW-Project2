$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.party-button').click(clickedPartyButton);
    $('.dance-button').click(clickedDanceButton);
    $('.call-button').click(clickedCallButton);
    $('.show-button').click(clickedShowButton);

    $('.pet-image').height(200);
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Freddie", weight:90, happiness:80, money:50};
  
    var lastButton = null;
    var consecutiveCount = 0;
   
    function clickedTreatButton() {
      var currentButton = 'treat';
      if (lastButton === currentButton) {
        consecutiveCount++;
      } else {
        consecutiveCount = 1;
        lastButton = currentButton;
      }
      var newText;
      if (pet_info.money < 5) {
        newText = "You need $5 for Munchies, man!";
      } else if (pet_info.weight == 300) {
        newText = "This party freak is too heavy for treats!";
      } else if (consecutiveCount > 3) {
        newText = "Appreciate it bro, but I'm waaay too full.";
      } else {
        pet_info.happiness += 15;
        pet_info.weight += 10;
        pet_info.money -= 5;
        newText = "That's some good stuff, man!";
      }
      if ($('.speech-bubble').text() !== newText) {
        $('.speech-bubble').fadeToggle("slow", "linear", function() {
          $(this).text(newText).fadeToggle("slow", "linear");
        });
      } else {
        $('.speech-bubble').text(newText);
      }
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPartyButton() {
      var currentButton = 'party';
      if (lastButton === currentButton) {
        consecutiveCount++;
      } else {
        consecutiveCount = 1;
        lastButton = currentButton;
      }
      var newText;
      if (consecutiveCount > 3) {
        newText = "Even the party freak has his limits bro.";
      } else {
        pet_info.happiness += 5;
        pet_info.weight -= 2;
        newText = "Partying with the party freak! Oh yeah!";
      }
      if ($('.speech-bubble').text() !== newText) {
        $('.speech-bubble').fadeToggle("slow", "linear", function() {
          $(this).text(newText).fadeToggle("slow", "linear");
        });
      } else {
        $('.speech-bubble').text(newText);
      }
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedDanceButton() {
      var currentButton = 'dance';
      if (lastButton === currentButton) {
        consecutiveCount++;
      } else {
        consecutiveCount = 1;
        lastButton = currentButton;
      }
      var newText;
      if (consecutiveCount > 3) {
        newText = "I'm all danced out man.";
      } else {
        pet_info.happiness -= 10;
        pet_info.weight -= 6;
        newText = "I'm the dancin' new sensation!";
      }
      if ($('.speech-bubble').text() !== newText) {
        $('.speech-bubble').fadeToggle("slow", "linear", function() {
          $(this).text(newText).fadeToggle("slow", "linear");
        });
      } else {
        $('.speech-bubble').text(newText);
      }
      checkAndUpdatePetInfoInHtml();
    }

    function clickedCallButton() {
      var currentButton = 'call';
      if (lastButton === currentButton) {
        consecutiveCount++;
      } else {
        consecutiveCount = 1;
        lastButton = currentButton;
      }
      var newText;
      if (pet_info.money < 2) {
        newText = "Sorry bro, it's $2 a call!";
      } else {
        pet_info.happiness += 15;
        pet_info.weight += 2;
        pet_info.money -= 2;
        newText = "Here's the party freak on the phone! Aw yeah!";
      }
      if ($('.speech-bubble').text() !== newText) {
        $('.speech-bubble').fadeToggle("slow", "linear", function() {
          $(this).text(newText).fadeToggle("slow", "linear");
        });
      } else {
        $('.speech-bubble').text(newText);
      }
      
      checkAndUpdatePetInfoInHtml();
    }

    function clickedShowButton() {
      var currentButton = 'show';
      if (lastButton === currentButton) {
        consecutiveCount++;
      } else {
        consecutiveCount = 1;
        lastButton = currentButton;
      }
      var newText;
      if (pet_info.happiness < 30) {
        newText = "I'm feelin' too down for the show dude.";
      } else if (pet_info.weight > 250) {
        newText = "I'm way too heavy for the freak show man!";
      } else if (consecutiveCount > 2) {
        newText = "Sorry bro, ain't no shows for a freak like me right now.";
      } else if (pet_info.happiness > 200 && pet_info.weight < 100) {
        pet_info.happiness -= 10;
        pet_info.money += 8;
        newText = "1st prize! I'm the coolest freak around!";
      }
      else if (pet_info.happiness > 150 && pet_info.weight < 150) {
        pet_info.happiness -= 15;
        pet_info.money += 4;
        newText = "2nd prize! Sweet!";
      }
      else if (pet_info.happiness > 100 && pet_info.weight < 200) {
        pet_info.happiness -= 20;
        pet_info.money += 2;
        newText = "3rd prize! Not bad!";
      } else {
        pet_info.happiness -= 25;
        newText = "No prize. Lame.";
      }
      if ($('.speech-bubble').text() !== newText) {
        $('.speech-bubble').fadeToggle("slow", "linear", function() {
          $(this).text(newText).fadeToggle("slow", "linear");
        });
      } else {
        $('.speech-bubble').text(newText);
      }
      
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    //Checks if weight or happiness have reached below or above their max or min values and makes sure they cannot go beyond or below them.
    function checkWeightAndHappinessBeforeUpdating() {
      if (pet_info.weight < 10) {
        pet_info.weight = 10;
      }

      if (pet_info.weight > 300) {
        pet_info.weight = 300;
      }

      if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
      }

      if (pet_info.happiness > 300) {
        pet_info.happiness = 300;
      }

      if (pet_info.money < 0) {
        pet_info.money = 0;
      }

    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.money').text(pet_info['money']);
    }
  