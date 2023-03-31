// Target class (position and width)
class Target
{
	constructor(w, l, id)
	{
		this.x = -1;
		this.y = -1;
		this.width = w;
		this.label = l;
		this.id	= id;
		this.letter = l[0];
		this.colors = new Map([
			['0', color(0, 100, 200)],
			['A', color(200, 100, 100)],
			['B', color(33, 150, 122)],
			['C', color(175, 13, 102)],
			['F', color(100, 55, 185)],
			['G', color(34, 150, 34)],
			['K', color(222, 22, 88)],
			['L', color(177, 177, 55)],
			['M', color(55, 55, 166)],
			['N', color(100, 145, 0)],
			['O', color(250, 66, 0)],
			['P', color(175, 77, 177)],
			['R', color(200, 0, 0)],
			['S', color(44, 88, 166)],
			['T', color(144, 88, 25)],
			['V', color(44, 177, 177)],
			['W', color(139, 134, 78)],
			['Y', color(44, 166, 55)],
			['Z', color(155, 25, 12)]]);

		this.backgroundColor = this.colors.get(this.letter);
		this.backgroundColor.setAlpha(177);
	}
	
	
	// Checks if a mouse click took place
	// within the target
	clicked(mouse_x, mouse_y)
	{
		return (mouse_x >= this.x && mouse_x <= this.x + this.width
				&& mouse_y >= this.y && mouse_y <= this.y + this.width);
	}
	
	// Draws the target (i.e., a circle)
	// and its label
	draw()
	{
		if (this.x < 0) {
			console.error("Cannot draw target: position not set");
		}
		// Draw target
		fill(this.backgroundColor);								 
		if (this.clicked(mouseX, mouseY)) {
			strokeWeight(5);
			stroke(this.backgroundColor);
		}
		rect(this.x, this.y, this.width, this.width);
		strokeWeight(0);
		
		// Draw label
		textFont('Arial', 17);
		fill(color(255, 255, 255));
		textAlign(CENTER);
		text(this.label, this.centerX, this.centerY + 4);
	
		// Draw letter label
		textFont('Arial', 32);
		fill(color(255, 255, 255));
		// stroke(0);
		textAlign(CENTER);
		text(this.letter, this.centerX, this.centerY - 22);
	}
	
	setPos(x, y) {
		// Calculates top left corner position from the center of the target
		this.x = x - this.width / 2;
		this.y = y - this.width / 2;
		this.centerX = x;
		this.centerY = y;
	}
}