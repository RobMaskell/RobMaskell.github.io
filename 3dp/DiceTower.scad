$fa = 1;
$fs = 0.4;
//width = 60;
//cube([width,width,3],center=true);
//translate([0,0,30])
//    cube([60,60,3],center=true);

$fn=60;

radius = 2;
dimX = 100;
dimY = 100;
dimZ = 32;
cornerX = (dimX/2-radius);
cornerY = (dimY/2-radius);
cornerZ = (dimZ/2-radius);
dimZInt = (dimZ-radius*2);
    
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

difference() {
    
    //color(alpha = 0.5)render()
    //drawRoundedBox();
    cube([dimX, dimY, dimZ], center=true);
    
    //translate([0, -20, 0])
        //cube(dimZInt, center=true);

    // entry triangle
    linear_extrude(dimZInt, center=true)
        translate([0,-9,0])
        rotate(-135)
        polygon([[0,0], [60,0], [0,60]]);
    
    // bottom inverted triangle
    linear_extrude(dimZInt, center=true)
        translate([0,0,0])
        polygon([[-15,-30], 
                 [20,-30], 
                 [27,0], 
                 [27,20], 
                 [24,30],
                 [18,40],
                 [10,45],
                 [0,48],
                 [-10,48],
                 [-20,20],
                 [-13,19],
                 [-8,15],
                 [-5,10],
                 [-5,0]
        ]);
    
    // down tube
    //translate([15, -5, 0])
    //    rotate(70)
    //    cube([50, 40, dimZInt], center=true);
    
    // exit tube
    translate([-36, 34, 0])
        cube([52, dimZInt, dimZInt], center=true);
}

