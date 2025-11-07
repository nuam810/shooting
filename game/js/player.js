const enemyImge = new Image();
enemyImge.src = "https://stat.ameba.jp/user_images/20141228/09/notfound-ktz/25/44/p/o0800090213172064151.png?caw=800x600";

export const player = {
    x: 0,
    y: 0,
    width: 30,
    height: 30,
    color: "yellow",
    life: 3,
    score: 0
};
const  playerImge = new Image();
playerImge.src = "https://myoji-yurai.net/createMyojiImage.htm?pageAction=onRenderImage&myojiKanji=%E5%A4%A7%E6%B2%BC";
export function initPlayer(canvas) {
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - 60;
    console.log("Player:", player);
}

export function drawPlayer(ctx) {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.drawImage(playerImge,player.x, player.y, player.width, player.height);
}