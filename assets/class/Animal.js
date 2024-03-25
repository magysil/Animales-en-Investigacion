class Animal{
    constructor(nombre,img,sonido,edad,comentarios){
        this._nombre = nombre;
        this._img = img;
        this._sonido = sonido;
        this._edad = edad;
        this._comentarios = comentarios;
        
}
    get Nombre(){
        return this._nombre
    }
    get Img(){
        return this._img
    }
    get Sonido(){
        return this._sonido
    }
    get Edad(){
        return this._edad
    }

    set Edad(nuevaEdad){
        this.edad = nuevaEdad
    }
    set Comentarios(nuevoComentario){
        this.cometarios = nuevoComentario
    }
};

export {Animal}