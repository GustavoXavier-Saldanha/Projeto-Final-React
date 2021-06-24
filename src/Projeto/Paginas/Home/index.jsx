import './estilo.css'
import img1 from './LogoCortadoHome.png'
import img3 from './nikePosterCarrousel.jpg'
import img4 from './imagem menor home.jpg'
// import img3 from './ImagemNikeIMG2.jpg'
import img2 from './maxresdefault.jpg'
import img5 from './adidasNmd.jpg'
import img6 from './air-jordan-1-mid.jpg'

const Home = () => {



    return (
        <div className="home">
  
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
            <div className="container marketing">
                <div className="row">
                    <div className="col-lg-4">
                        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={img4} alt="" />
                        
                        <h2>Gazzelle Sport Pack</h2>
                        <p>The Adidas Gazelle Sport Pack felt very comfortable as per most wearers.</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                    <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={img5} alt="" />
                        <h2>Nmd R1 Cinza</h2>
                        <p>Cápsulas especiais que promovem alto retorno de energia e um amortecimento extremamente macio.</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                    <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={img6} alt="" />

                        <h2>Air Jordan 1 Mid</h2>
                        <p>Essa nova abordagem do AJ1 apresenta uma base de couro branco com camadas pretas clean.</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                </div>
            </div>
            </div>
            )      

}

export default Home