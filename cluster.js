class Cluster {
	constructor(maxRows, targetSize, verticalMargin, horizontalMargin) {
		this.targetSize = targetSize;
		this.verticalMargin = verticalMargin;
		this.horizontalMargin = horizontalMargin;
		this.maxRows = maxRows;
		this.targets = [];
		this.cols = -1;
		this.x = -1;
		this.y = -1;
	}
	getCols() {
		return this.cols;
	}

	addTarget(target) {
		if (this.x < 0) {
			this.targets.push(target);
			this.cols = Math.ceil(this.targets.length / this.maxRows);
		} else {
			console.error("Can't add target after cluster has been generated");
		}
	}

	draw() {
		if (this.x < 0) {
			console.error("Can't draw a cluster without generating it first");
		} else {
			this.targets.forEach(target => target.draw());
		}
	}

	generate(x, y) {
		this.x = x;
		this.y = y;

		let k = 0;

		for (let i = 0; i < this.maxRows; i++) {
			for (let j = 0; j < this.cols; j++) {

				let targetX = this.x + j * (this.targetSize
						+ this.horizontalMargin) + this.targetSize / 2;
				let targetY = this.y + i * (this.targetSize
						+ this.verticalMargin) + this.targetSize / 2;

				this.targets[k++].setPos(targetX, targetY);

				if (k >= this.targets.length) {
					return;
				}
			}
		}
	}

	getHeight() {
		return Math.ceil(this.targets.length / this.cols)
				* (this.targetSize + this.verticalMargin) - this.verticalMargin;
	}

	getWidth() {
		return this.cols * (this.targetSize
				+ this.horizontalMargin) - this.horizontalMargin;
	}
    
}