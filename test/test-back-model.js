const assert = require('assert');
const BankAccount = require('../app/models/BankAccount');

describe('BacnkAccount',  ()=> {
    describe('#Consulats basicas', ()=> {
        it('Deberia poder checar el saldo de la cuenta', ()=> {
            let acc =  new BankAccount();
            assert.equal(acc.current(), 0);
        });
        it('Deberia poder checar el historial de la cuenta', ()=> {
            let acc =  new BankAccount();
            acc.append(100);
            acc.substract(50);
            let fakeHistory = [
                {type:'Addition', amount: 100},
                {type:'Substraction', amount: 50}
            ]
            let trueHistory = acc.history();
            for(let i=0;i<2;i++){
                assert.equal(trueHistory[i].type, fakeHistory[i].type);
                assert.equal(trueHistory[i].amount, fakeHistory[i].amount);
            }
        });
    });

    describe('#Operaciones basicas', ()=> {
        it('Deberia aumentar el saldo de la cuenta', ()=> {
            let acc =  new BankAccount();
            assert.equal(acc.append(100), 100);
            assert.equal(acc.append(-100), 100);
        });
        it('Deberia aumentar el saldo de la cuenta', ()=> {
            let acc =  new BankAccount();
            assert.equal(acc.substract(100), -100);
            assert.equal(acc.substract(-100), -100);
        });
        it('Deberia poder hacer merge entre dos cuentas', ()=> {
            let acc =  new BankAccount();
            let acc2 =  new BankAccount();
            acc.append(100);
            acc.append(200);
            acc2.substract(50);
            let fakeHistory = [
                {type:'Addition', amount: 100},
                {type:'Addition', amount: 200},
                {type:'Substraction', amount: 50}
            ]
            acc.merge(acc2);
            let trueHistory = acc.history();
            for(let i=0;i<2;i++){
                assert.equal(trueHistory[i].type, fakeHistory[i].type);
                assert.equal(trueHistory[i].amount, fakeHistory[i].amount);
            }
            assert.equal(acc.current(), 250);
        });
    });


})

