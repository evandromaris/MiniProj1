export default () => {
    const container = document.createElement('div');

    const template = `
        <h1>Hobbies</h1>
        <div class="img-hobbie">
        <div class="content-hoobie">
            <img src="images/cozinhar-receitas.jpg" width="100px" alt="foto-de-evandro-maris">
            <p>Cozinhar Receitas 👨‍🍳</p>
        </div>
        <div class="content-hoobie">
            <img src="images/jogos-eletronicos.jpg" width="100px"
            alt="foto-de-evandro-maris">
            <p>Jogos eletrônicos 🎮</p>
        </div>
        <div class="content-hoobie">
            <img src="images/contemplar-natureza.jpg"  width="100px" alt="foto-de-evandro-maris">
            <p>Contemplar a Natureza 🏝️</p>
            </div>
        </div>      
    `;
    container.innerHTML = template;

    return container;
}