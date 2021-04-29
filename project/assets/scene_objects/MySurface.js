import { CGFappearance, CGFobject, CGFshader, CGFtexture } from '../../../lib/CGF.js';
import { MyPlane } from "../shapes/MyPlane.js";

export class MySurface extends CGFobject {
    constructor(scene) {
        super(scene);

        this.initMaterials();
        
        this.plane = new MyPlane(this.scene, 20);
        
        this.distortion = new CGFtexture(this.scene, "images/distortionmap.png");
        this.subtract = 0.5;
        this.multiply = 0.6; 
        this.shader = new CGFshader(this.scene.gl, "shaders/surface.vert", "shaders/surface.frag");

        this.shader.setUniformsValues({distortionmap: 2, subtract: this.subtract, multiply: this.multiply});
    }

    initMaterials() {
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.0, 0.0, 0.0, 0.0);
        this.material.setDiffuse(0.0, 0.0, 0.0, 0.0);
        this.material.setSpecular(0.0, 0.0, 0.0, 0.0);
        this.material.setEmission(1, 1, 1, 1);
        this.material.setShininess(120);
        this.material.loadTexture("images/pier.jpg");
        this.material.setTextureWrap("REPEAT", "REPEAT");
    }

    display() {

        this.scene.pushMatrix();
    
        this.scene.setActiveShader(this.shader);
        this.distortion.bind(2);
        this.scene.scale(100, 1, 100);
        this.scene.translate(0, 10, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.material.apply();
        this.plane.display();

        this.scene.setActiveShader(this.scene.defaultShader);

        this.scene.popMatrix();

    }
}