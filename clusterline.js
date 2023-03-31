class ClusterLine {
	constructor(originX, originY, endX, endY) {
		this.originX = originX;
		this.originY = originY;
		this.endX = endX;
		this.endY = endY;
	}

	draw() {
		stroke(44);
		strokeWeight(4);
		line(this.originX, this.originY, this.endX, this.endY);
		strokeWeight(0);
	}
}