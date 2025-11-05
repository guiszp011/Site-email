
//inicializando o emailjs com um token (public key)
emailjs.init(windows.env.EMAIL_PUBLICK_KEY);
//Função para enviar o formulário por email
function enviarFormulario(e){
    //impede a página de recarregar quando o formulário for enviado
    e.preventDefault();

    //pegando os campos do formulário por ID e armazenando em variavel
let nome = document.getElementById("nome").value;
let email = document. getElementById("email").value;
let mensagem = document.getElementById("mensagem").value;
let resposta = document.getElementById("resposta");
let form = document.getElementById("form");
    //envia o email usando o :
    // service_id
    // template_id
    // campos do email
    emailjs.send(window.env.EMAIL_SERVICE_ID, windows.env.EMAIL_TEMPLATE_ID_ADMIN, {
        nome: nome,
        email: email,
        mensagem: mensagem
    });

     emailjs.send(windows.env.EMAIL_SERVICE_ID, windows.env.EMAIL_TEMPLATE_ID_REPLY, {
        nome: nome,
        email: email
     });

    // alert ("Sua mensagem foi enviada com sucesso! Aguarda nosso retorno!");
    //inserir dentro do paragrafo (HTML) o texto apos enviar a mensagem
    resposta.innerHTML =
    "Sua mensagem foi enviada com sucesso! Aguarde nosso retorno!";
    // limpa os campos do formlário
    form.reset();

}