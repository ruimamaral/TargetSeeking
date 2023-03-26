class ClusterLabel {

	constructor(label, x, y, width, height) {
        this.label = label;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
    }

	draw() {
		fill(88);
        rect(this.x, this.y, this.width, this.height);
		
		// Draw label
		textFont('Arial', 44);
		fill(color(255, 255, 255));
		textAlign(CENTER);
		text(this.label, this.x, this.y);
	}

}