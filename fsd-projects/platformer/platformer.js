$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-1350 , canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    //Requirement	Description	Points
    //Create at least 5 platforms	Platforms should be placed strategically throughout the game	30
    //Add 3 collectables	Place collectables at various positions using different types	
    //Add 3 cannons	Place cannons on different sides with varying delays	
    //Design a playable level	Create a level that’s challenging but achievable	

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(325, 700, 50, 20, "#6f458f",250, 450, 1,700,700,0);
    createPlatform(525, 600, 50, 20, "#6f458f", 450, 650, 2, 600, 600,0);
    createPlatform(825, 550, 50, 20, "#6f458f");
    createPlatform(1100, 600, 50, 20, "#6f458f");
    createPlatform(1325, 550, 50, 20, "#6f458f");
    createPlatform(1325, 420, 50, 20, "#6f458f");
    createPlatform(200, 350, 1000, 20, "#6f458f");
    createPlatform(200, 230, 50, 20, "#6f458f");
    createPlatform(250, 150, 20, 100, "#6f458f");  
    createPlatform(250, 130, 1100, 20, "#6f458f");
    createBadPlatform(0, 745, 1400, 20, "red")


    // TODO 3 - Create Collectables
    createCollectable("Soul_Orb", 500, 150, 1.0, 1.0,);
    createCollectable("Soul_Orb", 1000, 150, 1.0, 1.0,);
    createCollectable("Soul_Orb", 1200, 70, 1.0,0.5,);


    
    // TODO 4 - Create Cannons
    createCannon("right", 360, 2000);
    createCannon("left", 240, 2000);
    createCannon("right", 90, 2000);
    createCannon("bottom",460 ,5000 );
    createCannon("bottom",960 ,5000 );
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
