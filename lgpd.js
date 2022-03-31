let lgpdUrl = 'https://jsonplaceholder.typicode.com/post';

let lgpdHtml =
    '<div class="lgpd">\n' +
    '    <div class="lgpd--left">\n' +
    '        Nós utilizamos cookie para melhorar sua experiência.<br/>\n' +
    '        Para verificar os cookies utilizados, leia nossa <a href="politica_de_privacidade">Politica de Privacidade</a>\n' +
    '    </div>\n' +
    '    <div class="lgpd--rigth">\n' +
    '        <button class="lgpdButton">Ok</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<link rel="stylesheet" href="lgpd.css"/>';

let lsContent = localStorage.getItem('lgpd');

if(!lsContent){

    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector(".lgpd");
    let lgpdButton = document.querySelector(".lgpdButton");

    lgpdButton?.addEventListener('click', async()=>{
        lgpdArea.remove();

        let result = await fetch(lgpdUrl);
        let json = await result.json();

        if (!json.error != ''){
            let id = 123; // json.id;
            localStorage.setItem('lgpd',id);
        }

    });

    // #######  executar no console ############
    //      localStorage.removeItem('lgpd')
    // #######  executar no console ############
}
else{
    alert (lsContent);  //seu cookie lggpd listando o valor
}









