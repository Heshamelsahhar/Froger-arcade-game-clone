

// Enemies our player must avoid

let curscore = 0;
var Enemy = function(i, j, sp) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = i;
    this.y = j;
    this.speed = sp;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
// Checking if it passed the frame
    if (this.x > 505)
    {
        this.x = - 100; // Returning to original position
        this.speed = Math.floor(Math.random() * 500)+ 75; // Changign speed
    }
// Checking Collisions
    if ( player.x < this.x + 60 && this.x < player.x + 40 && player.y < this.y + 25 && 30 + player.y > this.y )
    {
        player.x = 200;
        player.y = 400;
        document.querySelector(".score").innerText = `Score: 0`;
        curscore = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function(i, j, sp) {

    this.x = i;
    this.y = j;
    this.speed = sp;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(s) {

};

Player.prototype.render = function(){ ctx.drawImage(Resources.get(this.sprite), this.x, this.y); };

Player.prototype.handleInput = function(dir) {
    // handling moves
    if (dir === 'left' && this.x - 100 >= 0) this.x -= 100; 
    else if (dir === 'right' && this.x + 100 <= 400  ) this.x += 100;
    else if (dir === 'up' && this.y - 85 >= -100 ) this.y -= 85;
    else if (dir === 'down' && this.y + 85 <= 450) this.y += 85; 
    // Check Reaching water
    if (this.y === -25){
        this.x = 200;
        this.y = 400;
        document.querySelector(".score").innerText = `Score: ${++curscore}`;
    }

};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
let enemy1 = new Enemy(0, 60, Math.floor(Math.random() * 500)+ 75);
let enemy2 = new Enemy(0, 150, Math.floor(Math.random() * 500)+ 75);
let enemy3 = new Enemy(0, 230, Math.floor(Math.random() * 500)+ 75);
allEnemies.push(enemy1,enemy2,enemy3);
let player = new Player(200, 400 , 50);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

let choosen;
const boy = document.querySelector('.boy');
const cat = document.querySelector('.cat');
const horn = document.querySelector('.horn');
const pink = document.querySelector('.pink');
const princess = document.querySelector('.princess');
boy.addEventListener("click", ()=> {choosen = 'images/char-boy.png' ;player.sprite=choosen;document.querySelector('.modal').style.display="none";});
cat.addEventListener("click", ()=> {choosen = 'images/char-cat-girl.png' ;player.sprite=choosen;document.querySelector('.modal').style.display="none";});
horn.addEventListener("click", ()=> {choosen = 'images/char-horn-girl.png';player.sprite=choosen;document.querySelector('.modal').style.display="none";});
pink.addEventListener("click", ()=> {choosen = 'images/char-pink-girl.png';player.sprite=choosen;document.querySelector('.modal').style.display="none";});
princess.addEventListener("click", ()=> {choosen = 'images/char-princess-girl.png';player.sprite=choosen;document.querySelector('.modal').style.display="none";});


