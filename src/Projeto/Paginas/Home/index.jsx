import './estilo.css'
import img1 from './LogoCortadoHome.png'
import img4 from './imagem menor home.jpg'
import img3 from './ImagemNikeIMG2.jpg'
import img2 from './maxresdefault.jpg'

const Home = () => {



    return (
        <div>
            <div className='home' >

                <img src={img1} className="Logo-Tela" />

                <section class="grid-container">
                    <div class="grid-item first"><img src={img2} className="imagem1"/></div>
                    <div class="grid-item second"><img src={img3} className="imagem2"/></div>
                    <div class="grid-item third"><img src={img4} className="imagem3"/></div>
                </section>

            </div>
        </div>

    )

}

export default Home