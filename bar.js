class Bar {
	constructor(y, c, targetSize, horizontalMargin) {
		this.y = y;
		this.maxCols = c;
		this.currentCol = 0;
		this.clusters = [];
		this.targetSize = targetSize;
		this.horizontalMargin = horizontalMargin;
	}

	addCluster(Cluster n) {
		if (new.getCols + this.currentCol <= this.maxCols) {
			clusterX = 40 + this.currentCol * (this.targetSize + this.horizontalMargin);
			clusterY = this.y;
			n.setPos(clusterX, clusterY);
			this.c += n.getCols();
			this.clusters.push(n);
		}
	}

	draw() {
		this.clusters.forEach(x => x.draw());
	}
}