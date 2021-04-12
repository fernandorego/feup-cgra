import { CGFappearance, CGFobject, CGFtexture } from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';

export class MyUnitCubeQuad extends CGFobject {
    constructor(scene){
        super(scene);
        this.face = new MyQuad(this.scene);
        this.initMaterials();
    }

    initMaterials() {

        this.texture1 = new CGFtexture(this.scene, "images/demo_cubemap/left.png");
        this.texture2 = new CGFtexture(this.scene, "images/demo_cubemap/bottom.png");
        this.texture3 = new CGFtexture(this.scene, "images/demo_cubemap/back.png");
        this.texture4 = new CGFtexture(this.scene, "images/demo_cubemap/right.png");
        this.texture5 = new CGFtexture(this.scene, "images/demo_cubemap/top.png");
        this.texture6 = new CGFtexture(this.scene, "images/demo_cubemap/front.png");

        this.sideMaterial1 = new CGFappearance(this.scene);
        this.sideMaterial1.setAmbient(0.0, 0.0, 0.0, 0.0);
        this.sideMaterial1.setDiffuse(0.0, 0.0, 0.0, 0.0);
        this.sideMaterial1.setSpecular(0.0, 0.0, 0.0, 0.0);
        this.sideMaterial1.setShininess(0.0);
        this.sideMaterial1.setEmission(1, 1, 1, 1);
        this.sideMaterial1.setTexture(this.texture1);
        this.sideMaterial1.setTextureWrap('REPEAT', 'REPEAT');
        
        this.bottomMaterial = new CGFappearance(this.scene);
        this.bottomMaterial.setAmbient(0.0, 0.0, 0.0, 0.0);
        this.bottomMaterial.setDiffuse(0.0, 0.0, 0.0, 0.0);
        this.bottomMaterial.setSpecular(0.0, 0.0, 0.0, 0.0);
        this.bottomMaterial.setShininess(0.0);
        this.bottomMaterial.setEmission(1, 1, 1, 1);
        this.bottomMaterial.setTexture(this.texture2);
        this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.sideMaterial2 = new CGFappearance(this.scene);
        this.sideMaterial2.setAmbient(0.0, 0.0, 0.0, 0.0);
        this.sideMaterial2.setDiffuse(0.0, 0.0, 0.0, 0.0);
        this.sideMaterial2.setSpecular(0.0, 0.0, 0.0, 0.0);
        this.sideMaterial2.setShininess(0.0);
        this.sideMaterial2.setEmission(1, 1, 1, 1);
        this.sideMaterial2.setTexture(this.texture3);
        this.sideMaterial2.setTextureWrap('REPEAT', 'REPEAT');

        this.sideMaterial3 = new CGFappearance(this.scene);
        this.sideMaterial3.setAmbient(0.0, 0.0, 0.0, 0.0);
        this.sideMaterial3.setDiffuse(0.0, 0.0, 0.0, 0.0);
        this.sideMaterial3.setSpecular(0.0, 0.0, 0.0, 0.0);
        this.sideMaterial3.setShininess(0.0);
        this.sideMaterial3.setEmission(1, 1, 1, 1);
        this.sideMaterial3.setTexture(this.texture4);
        this.sideMaterial3.setTextureWrap('REPEAT', 'REPEAT');

        this.topMaterial = new CGFappearance(this.scene);
        this.topMaterial.setAmbient(0.0, 0.0, 0.0, 0.0);
        this.topMaterial.setDiffuse(0.0, 0.0, 0.0, 0.0);
        this.topMaterial.setSpecular(0.0, 0.0, 0.0, 0.0);
        this.topMaterial.setShininess(0.0);
        this.topMaterial.setEmission(1, 1, 1, 1);
        this.topMaterial.setTexture(this.texture5);
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.sideMaterial4 = new CGFappearance(this.scene);
        this.sideMaterial4.setAmbient(0.0, 0.0, 0.0, 0.0);
        this.sideMaterial4.setDiffuse(0.0, 0.0, 0.0, 0.0);
        this.sideMaterial4.setSpecular(0.0, 0.0, 0.0, 0.0);
        this.sideMaterial4.setShininess(0.0);
        this.sideMaterial4.setEmission(1, 1, 1, 1);
        this.sideMaterial4.setTexture(this.texture6);
        this.sideMaterial4.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {

        this.scene.pushMatrix();
        
        //camara position
        this.scene.translate(15,15,15);
        this.scene.scale(50,50,50);

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.sideMaterial4.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.sideMaterial2.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.topMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.bottomMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.sideMaterial3.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.sideMaterial1.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}