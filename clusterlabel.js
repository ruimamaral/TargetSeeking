class ClusterLabel {

	constructor(x, y, width, height, label) {
        this.label = label;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
    }

	draw() {
		fill(color(55, 55, 55));
        rect(this.x, this.y, this.width, this.height);
		
		// Draw label
		textFont('Arial', 44);
		fill(color(255, 255, 255));
		textAlign(CENTER);
		text(this.label, this.x + this.width / 2, this.y + this.height * 0.85);
	}

}