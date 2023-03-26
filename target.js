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
			['B', color(175, 13, 102)],
			['C', color(33, 150, 122)],
			['F', color(100, 55, 185)],
			['G', color(34, 150, 34)],
			['K', color(222, 22, 88)],
			['L', color(177, 177, 55)],
			['M', color(55, 55, 250)],
			['N', color(100, 145, 0)],
			['O', color(250, 66, 0)],
			['P', color(175, 77, 177)],
			['R', color(37, 70, 25)],
			['S', color(44, 33, 135)],
			['T', color(200, 0, 0)],
			['V', color(44, 177, 177)],
			['W', color(139, 134, 78)],
			['Y', color(44, 166, 55)],
			['Z', color(63, 25, 12)]]);

		this.sphereColor = this.colors.get(this.letter);
	}
	
	// Checks if a mouse click took place
	// within the target
	clicked(mouse_x, mouse_y)
	{
		return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
	}
	
	// Draws the target (i.e., a circle)
	// and its label
	draw()
	{
		// Draw target
		fill(this.sphereColor);								 
		circle(this.x, this.y, this.width);
		
		// Draw label
		textFont('Arial', 17);
		fill(color(255, 255, 255));
		textAlign(CENTER);
		text(this.label, this.x, this.y + 4);
	
		// Draw letter label
		textFont('Arial', 32);
		fill(color(255, 255, 255));
		// stroke(0);
		textAlign(CENTER);
		text(this.letter, this.x, this.y - 22);
	}
	
	setPos(x, y)
	{
		this.x = x;
		this.y = y;
	}
}