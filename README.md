
<h1> Desafio 02 </h1>
<small> Desafio referente ao módulo: Criando APIs RESTfull com Node.js - Rocketseat </small>
<p>Nesse desafio será desenvolvido uma API para controle de dieta diária, a Daily Diet API.</p>

<ul>  
  <li> - [x]  Deve ser possível criar um usuário</li>
        <p> POST: http://localhost:3333/user/create JSON {name:"var"}<p>
  <li> - [x]  Deve ser possível identificar o usuário entre as requisições</li>
         <p> POST: http://localhost:3333/user/login JSON {name:"var"}<p>
         <span> middleware está responsavel pela criação "create-session-id-user" cookie:'sessionId' <span>
  <li> - [x]  Deve ser possível registrar uma refeição feita, com as seguintes informações:
      <ul>
          <li>Nome</li>
          <li>Descrição</li>
          <li>Data e Hora</li>
          <li>Está dentro ou não da dieta</li>
      </ul>
  
  </li>
   <p> POST: http://localhost:3333/snack/create JSON {name:"var",description:"var","diet":"bool"}<p>
</ul>


<ul>
   <li> - [ ]  Deve ser possível editar uma refeição, podendo alterar todos os dados acima </li>
   <li> - [ ]  Deve ser possível apagar uma refeição </li>
   <li> - [ ]  Deve ser possível listar todas as refeições de um usuário</li>
   <li> - [ ]  Deve ser possível visualizar uma única refeição </li>
   <li> - [ ]  Deve ser possível recuperar as métricas de um usuário
          <ul>
            <li> - [ ] Quantidade total de refeições registradas </li>
            <li> - [ ] Quantidade total de refeições dentro da dieta </li>
            <li> - [ ] Quantidade total de refeições fora da dieta </li>
            <li> - [ ] Melhor sequência por dia de refeições dentro da dieta </li>
          </ul>
       
  </li>
   <li> - [ ]  O usuário só pode visualizar, editar e apagar as refeições o qual ele criou </li>
 </ul>










    

  
 
  

