export default function City (name, x, y, p5) {

    this.name = name;
    this.x = x;
    this.y = y;
    this.p5 = p5;

    this.display = function (p5, defaultFont) {

        p5.fill(ACCENT_2);
        p5.noStroke();
        p5.ellipse(this.x, this.y, CITY_SIZE, CITY_SIZE);
        p5.ellipse(this.x + OFFSET, this.y, CITY_SIZE, CITY_SIZE);
        p5.textFont(defaultFont);
        p5.textAlign(p5.CENTER);
        p5.textSize(25);
        p5.noStroke();
        p5.text(this.name, this.x, this.y - 25);
        p5.text(this.name, this.x + OFFSET, this.y - 25);

    }

}