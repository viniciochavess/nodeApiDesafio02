
<h1> Desafio 02 </h1>

<h5> Tech </h5>

      {
        node/fastify,
        knex,
        zod,
        Sqlite
      }

<small> Desafio referente ao módulo: Criando APIs RESTfull com Node.js - Rocketseat </small>
<p>Nesse desafio será desenvolvido uma API para controle de dieta diária, a Daily Diet API.</p>

<ul>  
  <li> - [x]  Deve ser possível criar um usuário</li>
         POST: http://localhost:3333/user/create JSON {name:"var"}
  <li> - [x]  Deve ser possível identificar o usuário entre as requisições</li>

          POST: http://localhost:3333/user/login JSON {name:"var"}
          middleware está responsavel pela criação "create-session-id-user" cookie: sessionId 
  <li> - [x]  Deve ser possível registrar uma refeição feita, com as seguintes informações:
  
  
  <ul>
          <li>Nome</li>
          <li>Descrição</li>
          <li>Data e Hora</li>
          <li>Está dentro ou não da dieta</li>
  </ul>

        POST: http://localhost:3333/snack/create JSON {name:"var",description: "var",diet:"bool"}
        middleware está responsavel por verificar se usuário está logado cookie: sessionId  
    
  </li>
  
</ul>


<ul>
   <li> - [x]  Deve ser possível editar uma refeição, podendo alterar todos os dados acima </li>
          PUTCH:http://localhost:3333/snack/update/:idparams podendo alterar os campos body{name, description , diet}
   <li> - [x]  Deve ser possível apagar uma refeição </li>
         DELETE:http://localhost:3333/snack/delete/:idparams podendo deletar apenas o usuário que criou
   <li> - [x]  Deve ser possível listar todas as refeições de um usuário</li>
   
           apenas o usuário que criou pode acessar
           GET:http://localhost:3333/snack/list: busca todas as refeições
         
   <li> - [x]  Deve ser possível visualizar uma única refeição </li>
   
         GET:http://localhost:3333/snack/list/ID busca a refeição especifica
         
   <li> - [x]  Deve ser possível recuperar as métricas de um usuário
          <ul>
            <li> - [x] Quantidade total de refeições registradas </li>
            <li> - [x] Quantidade total de refeições dentro da dieta </li>
            <li> - [x] Quantidade total de refeições fora da dieta </li>
            <li> - [x] Melhor sequência por dia de refeições dentro da dieta </li>
          </ul>
       
          return {
              "sequence": 12 exemple,
              "snackTotal": 79 exemple,
              "snackDietTrue": 76 exemple,
              "snackDietFalse": 3 exemple
            }
  </li>
   <li> - [x]  O usuário só pode visualizar, editar e apagar as refeições o qual ele criou </li>
 </ul>










    

  
 
  

