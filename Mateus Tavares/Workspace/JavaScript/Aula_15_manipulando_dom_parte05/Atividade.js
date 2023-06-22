const pegaNome = () => {
    const senhaRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
    const nome = document.getElementById('nome').value.toLowerCase();
    const senha = document.getElementById('senha').value;
    const cargoElement = document.getElementById('cargo');
    const cargo = cargoElement.value.toLowerCase();
    let numeroCargo;

    if (!senhaRegex.test(senha)) {
        alert(`Usuário ou senha incorretos!`)

        
    } else {
        

        switch (cargo) {
            case "1":
                numeroCargo = "Estagio";
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

            case "2":
                numeroCargo = "Trainee";
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

            case "3":
                numeroCargo = "Analista";
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

            case "4":
                numeroCargo = "Junior";
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

            case "5":
                numeroCargo = "Pleno";
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

            case "6":
                numeroCargo = "Senior" ;
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

            case "7":
                numeroCargo = "Lider tecnico";
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

            case "8":
                numeroCargo = "CEO";
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

        }
        // Redirecionar usuario
        window.location.href = "https://br.linkedin.com/";
    }
}