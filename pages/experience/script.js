export default () => {
    const container = document.createElement('div');

    const template = `
        <h1>O que eu faço?</h1>
        <section>
        <div class="img-experience">
            <img src="images/estudante-utad.jpg" width="100px" alt="foto-de-evandro-maris-na-utad">
            <p>
            Atualmente estou estudando Mestrado em Engenharia Informática e Tecnologia Web na UTAD Universidade de Trás- Os-Montes e Alto Douro.
            </p>
        </div>
        <div class="img-experience">
            <img src="images/worten.jpg" width="100px" alt="foto-da-worten">
            <p>
            Trabalho part-tiime na empresa Worten/Sonae como vendedor.
            </p>
        </div>
        </section>
        `;
    container.innerHTML = template;

    return container;
}