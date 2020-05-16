const Vector = require('./Vector');
class VectorCalculator {
    constructor(){}
    sum(V1, V2){
        return new Vector(
            V1.x + V2.x ,
            V1.y + V2.y ,
            V1.z + V2.z 
        );
    }

    sub(V1, V2) {
        return new Vector(
            V1.x - V2.x ,
            V1.y - V2.y ,
            V1.z - V2.z 
        );
    }

    scalar(V, S){
        return new Vector(
            V.x*S  ,
            V.y*S  ,
            V.z*S  
        );
    }

    dot(V1, V2){
        return (V1.x*V2.x) + (V1.y*V2.y) + (V1.z*V2.z);
    }
}
module.exports = VectorCalculator;