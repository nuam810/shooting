export const enemies = [];
const SIZE = 100;
const enemyImge = new Image();
enemyImge.src = "https://stat.ameba.jp/user_images/20141228/09/notfound-ktz/25/44/p/o0800090213172064151.png?caw=800x600";

function pushEnemies(canvas) {
  const w = SIZE;
  const h = SIZE;
  const x = Math.random() * (canvas.width - w);
  const y = 0;
  const vy = 5

  enemies.push({ x, y, width: w, height: h, vy });
}

export function spawnEnemy(canvas) {
 if (enemies.length < 5 ) {
    pushEnemies(canvas);
 }
}

export function updateEnemies(canvas) {
  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i];
    e.y += e.vy;
    if (e.y > canvas.height) {
      enemies.splice(i, 1);
    }
  }
}

export function drawEnemies(ctx) {
  ctx.fillStyle = "crimson";
  for (const e of enemies) {
    ctx.drawImage(enemyImge,e.x, e.y, e.width, e.height);
  }
}
