const { fabric } = require("./fabric");

var canvas = new fabric.canvas("myCanvas");

block_width = 30;
block_height = 30;

player_x = 15;
player_y = 15;

 var player_object = "";
function player_update()
{
    fabric.Imag.fromURL("player.png", function(ing) {
        player_object = Img

        player_object.scaleToHeight(150);
        player_object.scaleToWidth(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Imag.fromURL(get_image, function(Img) {
        block_image_object = Img

        block_image_object.scaleToHeight(block_width = 30);
        block_image_object.scaleToWidth(block_height = 30);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    
}