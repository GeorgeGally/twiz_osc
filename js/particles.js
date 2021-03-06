var particleEngine = function(num_particles){

// var particles = {

// }
var particles = [];
// var grid_w = 4;
// var grid_h = 1;
// var grid = createGrid(grid_w, grid_h, w/2,h);
// var num_particles = grid_w * grid_h;


for (var i = 0; i < num_particles; i++) {	
	
	var x = w/2 + (-3 + i) * 100;
    var m = map(i, 0, num_particles, 0, 360);
    var cc = hsl(m, 96, 60);
	addParticle(w/4+grid[i][0], grid[i][1]+100, cc, i);
}

var cc = hsl(m, 96, 60);
addParticle(w/2, h/2+100, cc, 4);

function draw(){

	ctx.fillStyle = rgba(255,255,255, 0.4);
	ctx.fillRect(0, 0, w, h);
	//ctx.clearRect(0, 0, w, h);
	moveParticles();
	//pixelate(5);

}


function addParticle(_x, _y, _colour, _me){
	
	var particle = {
		x: _x,
		y: _y,
		xx: w/2,
		yy: h/2,
		c: _colour,
		me: _me,
		r: 0,
		subparticles: [],
		me2: (_me + randomInt(-30,30))%num_particles,
		speedx: random(-2,2)/2,
		speedy: random(2,20),
		sz: 0,
		angle: radians((2.2*_me)%360)
	}
	
	particles.push(particle);

}


function moveParticles(){

	for (var i = 0; i < particles.length; i++) {
		
		p = particles[i];
		p.sz =  tween(p.sz, map(audioChannelVolume[20+(p.me2)%120], 0, 150,
			100,400), 4);
		var sz = p.sz;
		if (p.me == 4) sz *= 1.5;
		//ctx.lineWidth = 0;
		ctx.fillStyle = rgb(0);
		//ctx.fillRect( p.x-5, p.y, 10, -p.sz);
		ctx.fillTriangle(p.x-sz/3, p.y, p.x + sz/3, p.y, p.x, p.y - sz/2);
		ctx.strokeStyle = rgb(255);
		ctx.strokeTriangle(p.x-sz/3, p.y, p.x + sz/3, p.y, p.x, p.y - sz/2);
		
	};

}

return particles;

}
