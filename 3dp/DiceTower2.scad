
$fa = 1;
$fs = 0.4;
$fn=100;

radius = 2;
dimX = 100;
dimY = 100;
dimZ = 32;
cornerX = (dimX/2-radius);
cornerY = (dimY/2-radius);
cornerZ = (dimZ/2-radius);
dimZInt = (dimZ-radius*2);
eps = 0.01;


module drawRoundedBox()
{
    
    hull() {
        translate([cornerX,cornerY,cornerZ])
            sphere(radius);
        translate([cornerX,-cornerY,-cornerZ])
            sphere(radius);
        translate([-cornerX,cornerY,-cornerZ])
            sphere(radius);
        translate([-cornerX,-cornerY,cornerZ])
            sphere(radius);
        translate([cornerX,cornerY,-cornerZ])
            sphere(radius);
        translate([cornerX,-cornerY,cornerZ])
            sphere(radius);
        translate([-cornerX,cornerY,cornerZ])
            sphere(radius);
        translate([-cornerX,-cornerY,-cornerZ])
            sphere(radius);
    }

}

module drawPipeRoute() {
    color("lightblue")
       rotate_extrude(angle=180, convexity=10)
           translate([40, 0]) circle(dimZInt/2);

    color("lightgreen")
    rotate([90,0,-90])
    translate([0, -20, -40])
    rotate_extrude(angle=90, convexity=10)
       translate([20, 0]) circle(dimZInt/2);

    color("cyan")
    rotate([0,0,-90])
    translate([0, -60, 0])
    rotate_extrude(angle=90, convexity=10)
       translate([20, 0]) circle(dimZInt/2);
}

module drawPill(length, height1, radius1, radius2, height2, radius3, radius4) {
    color("pink")
    hull() {
        cylinder(height1, radius1, radius2, center=true);
        translate([length,0,0])
            cylinder(height2, radius3, radius4, center=true);
    }
}

difference() {

    // the body of the dice tower
    //cube([dimX, dimY, dimZ], center=true);
    drawRoundedBox();

    // the main dice route through the body
    translate([-6,-10,0])
        drawPipeRoute();
    
    // the opening for dice entry 
    translate([-48, -26, 0])
        rotate([90,0,87])
        drawPill(40, 2, dimZInt/2, (dimZInt/2)-5, 10, dimZInt/2, dimZInt/2);
    
    // the opening for dice exit 
    translate([34, -29.5, -16])
        rotate([0,0,90])
        drawPill(15, 2, dimZInt/2, dimZInt/2, 27, dimZInt/2, dimZInt/2);

    // hollow out block
    translate([-5,-5,0])
        sphere(dimZInt/2);
    translate([-2,-17,0])
        sphere(dimZInt/2);
    translate([-10,-17,0])
        sphere(dimZInt/2);
    translate([1,-29,0])
        sphere(dimZInt/2);
    translate([-15,-29,0])
        sphere(dimZInt/2);
}   





















