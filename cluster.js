class Cluster {
	constructor(rows, targetSize, verticalMargin, horizontalMargin) {
		this.targetSize = targetSize;
		this.verticalMargin = verticalMargin;
		this.horizontalMargin = horizontalMargin;
		this.rows = rows;
		this.targets = [];
		this.cols = 1;
	}
	setPos(x, y) {
		this.x = x;
		this.y = y;
	}
	getCols() {
		return this.cols;
	}
	addTarget(target) {
		if (this.targets.length >= this.rows * this.cols) {

			this.cols++;
			let k = 0;

			for (let i = 0; i < this.rows; i++) {
				for (let j = 0; j < this.cols; j++) {
					this.targets[k++].setPos(this.x + j * (this.targetSize
							+ this.horizontalMargin) + this.targetSize / 2,
							this.y + i * (this.targetSize + this.verticalMargin)
							+ this.targetSize / 2);
					if (k >= this. targets.length) {
						return;
					}
				}
			}
		}
		let targetX = this.x + (this.targets.length % this.cols)
						* (this.targetSize + this.horizontalMargin)
						+ this.targetSize / 2;
		let targetY = this.y + Math.floor(this.targets.length / this.cols)
						* (this.targetSize + this.verticalMargin)
						+ this.targetSize / 2;

		target.setPos(targetX, targetY);
		this.targets.push(target);
	}
}