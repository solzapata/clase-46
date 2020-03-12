mocha.setup("bdd");

const expect = chai.expect;


/* CALCULADORA

describe(`calculadora(str, delimitador)`, () => {
    it('deberia tomar en cuenta los numeros entre 0 y mil y adicionarlos a la variable sumar', () => {
        const resultado1 = calculadora('1, 2, 3, 4');

        expect(resultado1).to.be.equal(10);
    }) 

    it("deberia devolver cero si no se ingresan numeros", () => {
        const resultado2 = calculadora('');

        expect(resultado2).to.be.equal(0);
    })

    it("debería tirar error con los numeros negativos", () => {
        const str =  '3, -5, 5, -6';
        const resultado3 = () => {
            calculadora(str)
        }

        expect(resultado3).to.throw(`No se pueden ingresar números negativos. Ingresó: -7 -50`)
    })
})
*/


// ALGORITMO

describe('algoritmo(tarjeta)', () =>{
    it('deberia separar en distintos array todos los numeros', () => {
        const primerTest = '124';
        const resultado1 = () => {
            algoritmo(primerTest)
        }

        expect(resultado1).to.eql([1], [2], [4])
    })
})




mocha.run();