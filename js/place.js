import City from "./city.js";

export default function Place (count) {

    this.cities = [];

    for (var city = 0; city < count; city++) {

        this.cities[city] = new City(city + 1, Math.floor((Math.random() * (WIDTH / 2 - 200)) + 100), Math.floor((Math.random() * (HEIGHT - 200)) + 100));

    }

    this.path = function (list, p5) {

        p5.drawingContext.setLineDash([5, 5]);

        for (var index = 0; index < list.length - 1; index++) {

            p5.stroke(ACCENT_1); p5.strokeWeight(3);

            p5.line(this.cities[list[index]].x, this.cities[list[index]].y, this.cities[list[(index + 1)]].x, this.cities[list[(index + 1)]].y);

        }
        

    }
    
    this.bestPath = function (list, p5) {

        p5.drawingContext.setLineDash([1]);

        for (var index = 0; index < list.length - 1; index++) {

            p5.stroke(89, 255, 106); p5.strokeWeight(3);

            p5.line(this.cities[list[index]].x + OFFSET, this.cities[list[index]].y, this.cities[list[(index + 1)]].x + OFFSET, this.cities[list[(index + 1)]].y);

        }

    }

    this.calculatePathLength = function (list, p5) {

        var sum = 0

        for (var city = this.cities.length - 1; city > 0 && this.cities.length == CITY_COUNT; city--) {

            sum += p5.dist(this.cities[list[city]].x, this.cities[list[city]].y, this.cities[list[(city - 1)]].x, this.cities[list[(city - 1)]].y);

        }

        return sum;

    }

    this.checkPathLength = function (list, bestDistance, p5) { return this.calculatePathLength(list, p5) < bestDistance; }


}