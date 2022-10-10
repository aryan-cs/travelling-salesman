export default class BruteForce {

  constructor (WIDTH, HEIGHT, place, div) {

    new p5 (function (p5) {

      window.addEventListener("resize", function (ignored) {}, true);

      var canv, defaultFont = p5.loadFont("assets/fonts/default.ttf");
      var order = [], bestOrder = [], bestDistance = Number.MAX_VALUE;
      var startTime = Date.now(), interval, elapsedTime;
      var total = factorial(CITY_COUNT), done = 0;
      
      p5.preload = function () { defaultFont = p5.loadFont("assets/fonts/default.ttf"); }
      
      p5.setup = function () {

        canv = p5.createCanvas(WIDTH, HEIGHT);
        canv = canv.elt;
        p5.frameRate(999);

        for (var index = 0; index < place.cities.length; index++) { order.push(index); }

      }

      p5.draw = function () {

        p5.background(BACKGROUND_COLOR);

        // randomly picking cities to swap around - repitions can be made
        // order = swapify(order, p5.floor(p5.random(order.length)), p5.floor(p5.random(order.length)));

        // ordering cities lexicographically - no repitions
        order = lexicographicify(order, p5);

        if (place.checkPathLength(order, bestDistance, p5)) {

          bestOrder = order.slice(0);
          bestDistance = place.calculatePathLength(order, p5);

        }

        place.path(order, p5);
        place.bestPath(bestOrder, p5);

        place.cities.forEach(function (city) { city.display(p5, defaultFont); });
        done++;

        p5.textAlign(p5.LEFT);
        elapsedTime = Date.now() - startTime;
        p5.text("brute force algorithm [" + (elapsedTime / 1000).toFixed(3) + " sec]", 20, 40);
        p5.textAlign(p5.RIGHT);
        p5.textSize(50);
        p5.text(((done / total) * 100).toFixed(CITY_COUNT / 3) + "%", WIDTH - 30, HEIGHT - 20);

        if (done === total) { clearInterval(interval); p5.noLoop(); }

      }
      
    }, div);

  }
  
}