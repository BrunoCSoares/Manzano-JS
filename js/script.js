//Página 41
function pg41ex4a(){
    let v1 = parseInt(prompt("Digite o primeiro valor:"));
    let v2 = parseInt(prompt("Digite o segundo valor:"));
    let resu = (v1>v2)?v1-v2:v2-v1;
    alert("A diferença é "+resu)
}
function pg41ex4b(){
    let v = parseInt(prompt("Digite o valor:"));
    let resu = (v<0)?v*-1:v;
    alert("A módulo é "+resu)
}
//Página 46
function pg46ex1a(){
    let num = parseInt(prompt("Número da tabuáda: "))
        let contadora = 1
        while(contadora<11){
            alert(num+" x "+contadora+" = "+contadora*num)
            contadora ++
        }
}
function pg46ex1b(){
    let contadora = 1, soma = 0
        while(contadora<=100){
            soma += contadora
            contadora ++
        }
        alert(soma)
}
//Página 50
//Página 66