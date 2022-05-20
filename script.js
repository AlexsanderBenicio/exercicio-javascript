// AUTOR: ALEXSANDER BENICIO
// CURSO: TERA
// BOOTCAMP: FULLSTACK DEVELOPMENT
// MODULO: JAVASCRIPT

// DECLARAÇÃO DA CONSTANTE DA PRIMEIRA PERGUNTA E RESPOSTA
const Pergunta1 = document.getElementById("pergunta1").textContent = `Você gosta de jogos?[SIM/NÃO]`.toUpperCase();
const resposta1 = window.prompt(Pergunta1).toUpperCase();

// VERIFICAÇÃO DA PRIMEIRA RESPOSTA
if (resposta1 == "SIM") {
    
    // ATRIBUINDO ESTILOS A RESPOSTA
    document.getElementById("resposta1").style.color = '#00F';
    document.getElementById("resposta1").style.fontSize = '20px';
    document.getElementById("resposta1").style.fontWeight = 'Bold';

    // MOSTRANDO A PRIMEIRA RESPOSTA
    document.getElementById("resposta1").textContent = `${resposta1}`;
    
    // DECLARAÇÃO DA CONSTANTE DA SEGUNDA PERGUNTA E RESPOSTA
    const Pergunta2 = document.getElementById("pergunta2").textContent = "Você tem amigos?[SIM/NÃO]".toUpperCase();
    const resposta2 = window.prompt(Pergunta2).toUpperCase();

    // VERIFICAÇÃO DA SEGUNDA RESPOSTA
    if (resposta2 == "SIM") {
        
        // ATRIBUINDO ESTILOS A RESPOSTA
        document.getElementById("resposta2").style.color = '#00F';
        document.getElementById("resposta2").style.fontSize = '20px';
        document.getElementById("resposta2").style.fontWeight = 'Bold';

        // MOSTRANDO A SEGUNDA RESPOSTA
        document.getElementById("resposta2").textContent = `${resposta2}`;

        // DECLARAÇÃO DA CONSTANTE DA TERCEIRA PERGUNTA E RESPOSTA
        const Pergunta3 = document.getElementById("pergunta3").textContent = `Amigos reais ou virtuais?
         [ 1 ] Para reais
         [ 2 ] Para virtuais`.toUpperCase();
        const resposta3 = parseInt(window.prompt(Pergunta3));

        // LOOP DE VERIFICAÇÃO DA ESCOLHA ERRADA
        while (resposta3 !== 1 || resposta3 !== 2) {
            Pergunta3 = document.getElementById("pergunta3").textContent = `Amigos reais ou virtuais?
            [ 1 ] Para reais
            [ 2 ] Para virtuais`.toUpperCase();
            resposta3 = parseInt(window.prompt(Pergunta3));
        }
        
        // VERIFICAÇÃO DA TERCEIRA RESPOSTA
        // COM BASE EM VALORES EXATOS
        switch (resposta3) {
            case 1:
                // ATRIBUINDO ESTILOS A RESPOSTA
                document.getElementById("resposta3").style.color = '#00F';
                document.getElementById("resposta3").style.fontSize = '20px';
                document.getElementById("resposta3").style.fontWeight = 'Bold';

                // MOSTRANDO A TERCEIRA RESPOSTA CASO A OPÇÃO SEJA 1
                document.getElementById("resposta3").textContent = `${resposta3} - Seus amigos são reais, então compre um Wii`.toUpperCase();
                break;
            case 2:
                // ATRIBUINDO ESTILOS A RESPOSTA
                document.getElementById("resposta3").style.color = '#C9CF2F';
                document.getElementById("resposta3").style.fontSize = '20px';
                document.getElementById("resposta3").style.fontWeight = 'Bold';

                // MOSTRANDO A TERCEIRA RESPOSTA CASO A OPÇÃO SEJA 2
                document.getElementById("resposta3").textContent = `${resposta3} - Seus amigos são virtuais, então compre um XBOX`.toUpperCase();
                break;
            default:

                // ATRIBUINDO ESTILOS A RESPOSTA
                document.getElementById("resposta3").style.color = '#F00';
                document.getElementById("resposta3").style.fontSize = '20px';
                document.getElementById("resposta3").style.fontWeight = 'Bold';
                document.getElementById("resposta3").style.fontStyle = 'italic';

                // MOSTRANDO A TERCEIRA RESPOSTA CASO A OPÇÃO SEJA INVÁLIDA
                document.getElementById("resposta3").textContent = `Opção inválida, tente novamente.`.toUpperCase();
                break;
        }
    } else {

        // CASO A RESPOSTA 2 SEJA "NÃO"
        document.getElementById("resposta2").style.color = '#C9CF2F';
        document.getElementById("resposta2").style.fontSize = '20px';
        document.getElementById("resposta2").style.fontWeight = 'Bold';
        document.getElementById("resposta2").textContent = `Compre um PS3`;
        

    }
} else{
    
    // CASO A RESPOSTA 1 SEJA "NÃO"
    document.getElementById("resposta1").style.color = '#C9CF2F';
    document.getElementById("resposta1").style.fontSize = '20px';
    document.getElementById("resposta1").style.fontWeight = 'Bold';
    
    document.getElementById("resposta1").textContent = `Compre um PC`;

} 
