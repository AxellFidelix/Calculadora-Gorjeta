// Funções para calcular a gorjeta com base na qualidade do serviço
const calcularGorjetaBom = valor => valor * 0.2;
const calcularGorjetaRegular = valor => valor * 0.1;
const calcularGorjetaRuim = valor => valor * 0.05;

// Função principal que utiliza uma função de callback
const calcularGorjetaTotal = (valorConta, callback) => callback(valorConta);

// Função que será chamada ao clicar no botão
const calcularGorjeta = () => {
    const valorConta = parseFloat(document.getElementById("valorConta").value);
    const qualidadeServico = document.getElementById("qualidadeServico").value;
    let gorjeta = 0;

    // Verificação de erro para valor de conta inválido
    if (isNaN(valorConta) || valorConta <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um valor válido para a conta.";
        return;
    }

    // Escolhe a função de callback com base na qualidade do serviço
    if (qualidadeServico === "bom") {
        gorjeta = calcularGorjetaTotal(valorConta, calcularGorjetaBom);
    } else if (qualidadeServico === "regular") {
        gorjeta = calcularGorjetaTotal(valorConta, calcularGorjetaRegular);
    } else {
        gorjeta = calcularGorjetaTotal(valorConta, calcularGorjetaRuim);
    }

    // Exibe o resultado
    document.getElementById("resultado").innerText = `Gorjeta: R$ ${gorjeta.toFixed(2)}`;
};
