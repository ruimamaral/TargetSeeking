class Bar {
	constructor(y, cols, rows, targetSize, verticalMargin, horizontalMargin, isTop) {
		this.y = y;
		this.cols= cols;
		this.rows = rows;
		this.currentCol = 0;
		this.clusters = [];
		this.targetSize = targetSize;
		this.horizontalMargin = horizontalMargin;
		this.verticalMargin = verticalMargin;
		this.isTop = isTop;
		this.labels = [];
		this.lines = [];
	}

	addCluster(newCluster, letter) {
		if (newCluster.getCols() + this.currentCol > this.cols) {
			return false;
		}
		let clusterX = 40 + this.currentCol * (this.targetSize + this.horizontalMargin);
		let clusterY = this.y;
		let labelX = clusterX
		let labelY = clusterY - this.targetSize / 2 - this.targetSize * 0.05;
		let labelWidth = newCluster.getWidth();
		let labelHeight = this.targetSize / 2; 
		let lineX = clusterX - this.horizontalMargin / 2;
		let lineOriginY = labelY + labelHeight / 2;
		let lineEndY = clusterY + (this.targetSize + this.verticalMargin) * this.rows - this.verticalMargin * 2;
		if (this.isTop == true) {

			// Applies vertical offset to the label
			// in order to properly align it with the top bar
			labelY = clusterY + this.targetSize * 0.05;
			lineOriginY = labelY + labelHeight / 2;
			// Applies vertical offset to the
			// cluster in order to properly align it with the top bar
			lineEndY = clusterY - (this.targetSize + this.verticalMargin) * this.rows + this.verticalMargin * 2;
			clusterY -= newCluster.getHeight();
		}
		newCluster.generate(clusterX, clusterY);
		let newLabel = new ClusterLabel(
				labelX, labelY, labelWidth, labelHeight, letter);
		this.labels.push(newLabel);
		this.clusters.push(newCluster);
		if (this.clusters.length > 0) {
			let newLine = new ClusterLine(lineX, lineOriginY, lineX, lineEndY);
			this.lines.push(newLine);
		}
		this.currentCol += newCluster.getCols();
		return true;
	}

	draw() {
		this.clusters.forEach(x => x.draw());
		this.labels.forEach(x => x.draw());
		this.lines.forEach(x => x.draw());
	}
}