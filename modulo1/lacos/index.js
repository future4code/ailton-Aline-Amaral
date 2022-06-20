/*

1. É uma soma dos valores a partir de 0 até 5 (sem incluir o 5).
   O resultado no console é 10 (0+1+2+3+4)
  
2.a) Vai ser impresso no console uma lista de números dos itens do array que forem menores que 18.
  b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
    Se sim, o que poderia ser usado para fazer isso?
    
3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
 */
   
  
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }
   
   /*     
    - 💡 Dica
        
        <aside>
        ⭐ Se tiver dificuldade para entender esse exercício, rode as duas primeiras iterações do loop no [pytutor](http://pythontutor.com/javascript.html#mode=edit)
        
        </aside>
        

- **Exercícios de escrita de código**
    1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
        
        a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
        
        b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
        
        - 💡 Dica
            
            <aside>
            ⭐ Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
            
            </aside>
            
        
        c) Por fim, imprima o array com os nomes dos bichinhos no console
        
    2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
        
        a) Escreva um programa que **imprime** cada um dos valores do array original.
        
        b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
        
        c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
        
        d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
        
        e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
        
        - 💡 Dica
            
            Você deve criar variáveis para guardar o `valorMaximo` e o `valorMinimo`. Inicialize a variável `valorMaximo` com um valor que não seja maior que qualquer valor do array original e a `valorMinimo` com um valor que não seja menor que qualquer valor do array original.
            
        - Exemplo de saídas esperadas
*/