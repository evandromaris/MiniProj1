export default () => {
    const container = document.createElement('div');

    const template = `
        <h1>Quem sou eu?</h1>
        <h3>Evandro Pedro da Silva Maris</h3>
        <div class="img-evandro">
            <img src="images/myPhoto.jpeg" width="100px"  alt="foto-de-evandro-maris">
        </div>
        <p>
            Sou Evandro Maris, apaixonado por    tecnologia e inovação, estou sempre aberto a compartilhar conhecimentos e experiências.🤝 <br> <br>
            Minha carreira em Tecnologia teve início em 2010 como Instrutor de Informática, entre 2013 e 2020 realizei muitas atividades e projetos como Analista de Suporte Técnico e Analista de sistemas. <br> <br>
            Em 2020 iniciei meus estudos na área de Desenvolvimento Web e Programação de Sistemas, realizando projetos profissionais em lojas virtuais (e-commerce), aplicando conhecimentos de Front-end, e Atendimento ao Cliente.
        </p>
        `;
    container.innerHTML = template;

    return container;
}