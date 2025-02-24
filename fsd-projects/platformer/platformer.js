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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall
    createPlatform(-50, -50, 50, canvas.height + 500); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // ();


    // TODO 2 - Create Platforms
    createPlatform(500, 0, 20, 290);
createPlatform(50, 200, 60, 30, "orange");
createPlatform(300, 500, 200, 10);
createPlatform(900, 570, 150, 4000);
createPlatform(600, 630, 200, 10);
createPlatform(250, 650, 200, 20);
createPlatform(1100, 640, 120, 50);
createPlatform(600, 400, 160, 30);

    // TODO 3 - Create Collectables
    createCollectable("steve", 450, 20, 0.7, 0.1);
    createCollectable("diamond", 800, 170, 0.5, 0.7);
    createCollectable("diamond", 1000, 70, 0.5, 0.7);
    createCollectable("database", 1250, 76, 0.5, 0.5);
    createCollectable("database", 150, 76, 0.5, 0.5);
    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 1500);
    createCannon("right", 250, 2000);
    createCannon("left", 400, 2100);
    
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
