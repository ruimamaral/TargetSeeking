class Bar {
	constructor(y, c, targetSize, horizontalMargin, isTop) {
		this.y = y;
		this.cols= c;
		this.currentCol = 0;
		this.clusters = [];
		this.targetSize = targetSize;
		this.horizontalMargin = horizontalMargin;
		this.isTop = isTop;
		this.labels = [];
	}

	addCluster(newCluster, letter) {
		if (newCluster.getCols() + this.currentCol > this.cols) {
			return false;
		}
		let clusterX = 40 + this.currentCol * (this.targetSize + this.horizontalMargin);
		let clusterY = this.y;
		let labelX = clusterX;
		let labelY = clusterY;
		let labelWidth = newCluster.getWidth();
		let labelHeight = this.targetSize; 
		if (this.isTop == true) {

			// Applies vertical offset to the
			// cluster in order to properly align it with the top bar
			clusterY -= newCluster.getHeight();
		} else {
			// Applies vertical offset to the label
			// in order to properly align it with the bottom bar
			labelY -= this.targetSize;
		}
		newCluster.generate(clusterX, clusterY);
		let newLabel = new ClusterLabel(
				labelX, labelY, labelWidth, labelHeight, letter);
		this.labels.push(newLabel);
		this.clusters.push(newCluster);
		this.currentCol += newCluster.getCols();
		return true;
	}

	draw() {
		this.clusters.forEach(x => x.draw());
		this.labels.forEach(x => x.draw());
	}
}