



var hogwarts = {
  location: 'Scotland',
  houses: [
    {
      name: 'Griffindor',
      img: 'http://images1.wikia.nocookie.net/__cb20120922143611/harrypotter/images/7/70/G_final.jpg',
      values: [
        'courage',
        'bravery',
        'nerve',
        'chivalry'
      ],
      mascot: 'lion',
      colors: [
        'scarlet',
        'gold'
      ],
      founder: 'Godric Gryffindor',
      students: [
        'Harry Potter',
        'Hermione Granger',
        'Ron Weasley'
      ]
    },
    {
      name: 'Hufflepuff',
      img: 'http://images3.wikia.nocookie.net/__cb20111027164827/harrypotter/images/3/3f/H_final.jpg',
      values: [
        'hardwork',
        'patience',
        'justice',
        'loyalty'
      ],
      mascot: 'badger',
      colors: [
        'canary yellow',
        'black'
      ],
      founder: 'Helga Hufflepuff',
      students: [
        'Cedric Diggory',
        'Susan Bones',
        'Nymphadora Tonks'
      ]
    },
    {
      name: 'Ravenclaw',
      img: 'http://images2.wikia.nocookie.net/__cb20111021043857/harrypotter/images/d/da/R_final.jpg',
      values: [
        'intelligence',
        'creativity',
        'learning',
        'wit'
      ],
      mascot: 'eagle',
      colors: [
        'blue',
        'bronze'
      ],
      founder: 'Rowena Ravenclaw',
      students: [
        'Luna Lovegood',
        'Cho Chang',
        'Padma Patil'
      ]
    },
    {
      name: 'Slytherin',
      img: 'http://images3.wikia.nocookie.net/__cb20111027165214/harrypotter/images/d/da/S_final.jpg',
      values: [
        'ambition',
        'cunning',
        'leadership',
        'resourcefulness'
      ],
      mascot: 'serpent',
      colors: [
        'green',
        'silver'
      ],
      founder: 'Salazar Slytherin',
      students: [
        'Draco Malfoy',
        'Pansy Parkinson',
        'Tom Riddle'
      ]
    }
  ]
}

$(document).ready(function(){
  /* DO YOUR CODE HERE */

  //House Name
  var hName = []
	    hogwarts.houses.forEach(function(house) {
	        hName.push(house.name);
      })
      //house Colores
	    var hColor = []
	    hogwarts.houses.forEach(function(house) {
        hColor.push(house.colors);
      })
      //house valus
	    var hValues = []
	    hogwarts.houses.forEach(function(house) {
        hValues.push(house.values);
      })
      //housw Mascot
	    var hMascot = []
	    hogwarts.houses.forEach(function(house) {
        hMascot.push(house.mascot);
      })
      // house Founder
	    var hFounder = []
	    hogwarts.houses.forEach(function(house) {
        hFounder.push(house.founder);
      })
      //house student
	    var hStudent = []
	    hogwarts.houses.forEach(function(house) {
        hStudent.push(house.students);
	    })
      
    // all imgs
	    var hImg = []
	    hogwarts.houses.forEach(function(house) {
        hImg.push(house.img);
      })
      //Create the names.
	    var cName = Object.keys(hogwarts.houses[0])
      
//append for all house name
	    for (var i = 0; i < hName.length; i++) {
        var $section = $('<section/>');
        $('main').append($section);
        var $hDiv = $('<div/>');
        // append house div
        $($section).append($hDiv);
        //append house img
        $($hDiv).append($('<img/>').attr('src', hImg[i]));
        //append house name
        $($hDiv).append($('<h2/>').html(hName[i]));
        //append house founder
        $($hDiv).append($('<h3/>').html(cName[2]));
        $($hDiv).append($('<p/>').html(cName[5] + ' - ' + hFounder[i]))
        $($hDiv).append($('<p/>').html(cName[3] + ' - ' + hMascot[i]))
        
        var $uValue = $('<ul/>')
        for (var hv = 0; hv < hValues[i].length; hv++) {
          $($uValue).append($('<li/>').html(hValues[i][hv]));
        }
        $($hDiv).append($uValue);
        
        var $ulColor = $('<ul/>')
        $($hDiv).append($('<h3/>').html(cName[4]));
        for (var uc = 0; uc < hColor[i].length; uc++) {
          $($ulColor).append($('<li/>').html(hColor[i][uc]));
        }
        $($hDiv).append($ulColor);
        
        var $ulStudent = $('<ul/>')
        $($hDiv).append($('<h3/>').html(cName[6]));
        for (var us = 0; us < hStudent[i].length; us++) {
          $($ulStudent).append($('<li/>').html(hStudent[i][us]));
        }
        $($hDiv).append($ulStudent);
	    }
	  
      
      
    })
    
    // Guidance:  (Feel free to ignore this).
    
    /* Look at the image of the goal in the README!  What do you see?
    You can tell that we need to create identical sections for each house that
    that has the same information inside.
    
    One approach could be:
    1.  Access the array that belongs to the 'Houses' key of the object.
    2.  Create a function 'renderHouse' that renders a single house.
    3.  Call that function on each house in the array.

    This is going to be a big function.  It has to go through a lot of the 
    different values in the house object, loop through some of the arrays
    inside each house objects.  For example, loop through each houses 'students',
    'colors' and 'values' to render all the elements inside their arrays.

    Optional:  we are looping through arrays three times.  Is there a way
    to make this more DRY and more scalable by turning those loops into a 
    separate function?  You would then call this function on the 
    'students', 'colors' and 'values' arrays.

    For example, a function like createList(title, array).*/


