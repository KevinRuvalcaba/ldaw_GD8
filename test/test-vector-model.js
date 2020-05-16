const assert = require('assert');
const Vector = require('../app/models/Vector');
const VectorCalculator = require('../app/models/VectorCalculator');

describe('Vector',  ()=> {
    describe('#Operacines bascias de vectores', ()=> {
        it('Deberia sumar dos Vectores', ()=> {
            let V1 = new Vector(1,2,3);
            let V2 = new Vector(4,5,6);
            let Vcalc = new VectorCalculator();
            let Rvector = Vcalc.sum(V1, V2);
            assert.equal(Rvector.x, V1.x + V2.x);
            assert.equal(Rvector.y, V1.y + V2.y);
            assert.equal(Rvector.z, V1.z + V2.z);
        });
        it('Deberia Restar dos Vectores', ()=> {
            let V1 = new Vector(1,2,3);
            let V2 = new Vector(4,5,6);
            let Vcalc = new VectorCalculator();
            let Rvector = Vcalc.sub(V1, V2);
            assert.equal(Rvector.x, V1.x - V2.x);
            assert.equal(Rvector.y, V1.y - V2.y);
            assert.equal(Rvector.z, V1.z - V2.z);
        });
    });

    describe('#Operacines Complejas de vectores', ()=> {
        it('Deberia escalar el Vector', ()=> {
            let V1 = new Vector(1,2,3);
            let Vcalc = new VectorCalculator();
            let Rvector = Vcalc.scalar(V1, 3);
            assert.equal(Rvector.x, V1.x*3);
            assert.equal(Rvector.y, V1.y*3);
            assert.equal(Rvector.z, V1.z*3);
        });
        it('Deberia sacar el producto punto de dos Vectores', ()=> {
            let V1 = new Vector(1,2,3);
            let V2 = new Vector(4,5,6);
            let Vcalc = new VectorCalculator();
            let Dproduct = Vcalc.dot(V1, V2);
            let result = (V1.x*V2.x) + (V1.y*V2.y) + (V1.z*V2.z);
            assert.equal(Dproduct, result);
        });
    });

})

