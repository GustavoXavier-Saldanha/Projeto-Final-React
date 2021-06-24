import './estilo.css'
import img1 from './LogoCortadoHome.png'
import img4 from './imagem menor home.jpg'
import img3 from './ImagemNikeIMG2.jpg'
import img2 from './maxresdefault.jpg'

const Home = () => {



    return (
        <div className="home">
            <img src={img1} className="Logo-Tela"/>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={img2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img4} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    )

}

export default Home