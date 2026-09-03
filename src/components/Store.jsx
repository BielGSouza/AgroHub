import React, { useState, useRef } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import '../css/store.css';
import Enxada from '../assets/banners/enxada.jpg';
import BannerUm from '../assets/banners/banner_agricola_equipamentos(1).jpg';
import BannerDois from '../assets/banners/banner_agricola_insumos(1).jpg'

const Store = () => {
    // Referências para os carrosséis de produtos
    const carrosselRef = useRef(null);
    const carrosselRef2 = useRef(null);

    // Função para mover o carrossel de produtos
    const mover = (direcao) => {
        if (carrosselRef.current) {
            const scrollAmount = 300;
            const newScrollLeft = direcao === 'direita'
                ? carrosselRef.current.scrollLeft - scrollAmount
                : carrosselRef.current.scrollLeft + scrollAmount;

            carrosselRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    // Função para mover o segundo carrossel de produtos
    const moverTwo = (direcao) => {
        if (carrosselRef2.current) {
            const scrollAmount = 300;
            const newScrollLeft = direcao === 'direita'
                ? carrosselRef2.current.scrollLeft - scrollAmount
                : carrosselRef2.current.scrollLeft + scrollAmount;

            carrosselRef2.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <Header />
            <main style={{ display: 'block' }}>
                <section id="apresentacao">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src={BannerUm}
                                    className="d-block w-100"
                                    alt="Banner agrícola equipamentos"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={BannerDois}
                                    className="d-block w-100"
                                    alt="Banner agrícola insumos"
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>

                <section id="card">
                    <div className="card-store" id="card-store-one">
                        <img
                            className="img-card"
                            src="../assets/sectionStore/photo-1573561368183-fd88bdb4503d 1.png"
                            alt="Ferramentas agrícolas"
                            height="100%"
                        />
                        <div className="text-card">
                            <p className="paragrafo mb-0">FERRAMENTAS</p>
                            <button className="btn-card">
                                <img
                                    src="../assets/sectionStore/agrohub_tech_font_1-removebg-preview 2.svg"
                                    alt="Ícone AgroHub"
                                />
                                CONFIRA
                            </button>
                        </div>
                    </div>

                    <div className="card-store" id="card-store-two">
                        <img
                            className="img-card"
                            src="../assets/sectionStore/photo-1685335686020-e0b487f7f426 1.png"
                            alt="Máquinas agrícolas"
                            height="100%"
                        />
                        <div className="text-card">
                            <p className="paragrafo mb-0">MÁQUINAS</p>
                            <button className="btn-card">
                                <img
                                    src="../assets/sectionStore/agrohub_tech_font_1-removebg-preview 2.svg"
                                    alt="Ícone AgroHub"
                                />
                                CONFIRA
                            </button>
                        </div>
                    </div>

                    <div className="card-store" id="card-store-three">
                        <img
                            className="img-card"
                            src="../assets/sectionStore/premium_photo-1661964196891-3d3f378a97b2 1.png"
                            alt="Insumos agrícolas"
                            height="100%"
                        />
                        <div className="text-card">
                            <p className="paragrafo mb-0">INSUMOS</p>
                            <button className="btn-card">
                                <img
                                    src="../assets/sectionStore/agrohub_tech_font_1-removebg-preview 2.svg"
                                    alt="Ícone AgroHub"
                                />
                                <p className="paragrafo mb-0">CONFIRA</p>
                            </button>
                        </div>
                    </div>
                </section>

                <section id="melhores-ofertas">
                    <p className="subtitulo mb-0 text-white" style={{ zIndex: 1 }}>Melhores Ofertas</p>
                    <div id="linhas-produtos" style={{ zIndex: 1 }}>
                        <img
                            id="btn-direita"
                            className="setas-linha-produto"
                            src="../assets/sectionStore/arrow_forward_50dp_F1E9DC_FILL0_wght400_GRAD0_opsz48 2.svg"
                            alt="Seta direita"
                            onClick={() => mover('direita')}
                        />
                        <div id="tela-rolavel-produtos" ref={carrosselRef}>
                            <div className="card-produto">
                                <img src={Enxada} alt="Enxada preta e afiada" />
                                <p className="paragrafo mb-0 text-center">Enxada preta e afiada</p>
                                <p className="pagrafo mb-0 fw-medium">R$ 75,90</p>
                            </div>
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                        </div>
                        <img
                            id="btn-esquerda"
                            className="setas-linha-produto"
                            src="../assets/sectionStore/arrow_forward_50dp_F1E9DC_FILL0_wght400_GRAD0_opsz48 2.svg"
                            alt="Seta esquerda"
                            style={{ transform: 'rotate(180deg)' }}
                            onClick={() => mover('esquerda')}
                        />
                    </div>
                    <img
                        src="../assets/vetores/vetoresLinhas.svg"
                        alt="Vetores de linhas"
                        style={{ position: 'absolute', width: '100%', height: '61%' }}
                    />
                </section>

                <section id="produtos">
                    <div className="arte">Lugar para arte de ecommerce</div>
                    <p className="p-store" id="p-two">Produtos</p>
                    <div id="dad-lista-de-produtos">
                        <div id="lista-de-produtos">
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                        </div>
                    </div>
                    <p id="p-ver-todos" className="mb-0 paragrafo">Ver Todos</p>
                    <div className="arte">Lugar para arte de ecommerce</div>
                </section>

                <section id="para-voce">
                    <p className="p-store" style={{ zIndex: 1 }}>Produtos Para Você</p>
                    <div id="linhas-produtos" style={{ zIndex: 1 }}>
                        <img
                            id="btn-direita2"
                            className="setas-linha-produto"
                            src="../assets/sectionStore/arrow_forward_50dp_F1E9DC_FILL0_wght400_GRAD0_opsz48 2.svg"
                            alt="Seta direita"
                            onClick={() => moverTwo('direita')}
                        />
                        <div id="tela-rolavel-produtos2" ref={carrosselRef2}>
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                        </div>
                        <img
                            id="btn-esquerda2"
                            className="setas-linha-produto"
                            src="../assets/sectionStore/arrow_forward_50dp_F1E9DC_FILL0_wght400_GRAD0_opsz48 2.svg"
                            alt="Seta esquerda"
                            style={{ transform: 'rotate(180deg)' }}
                            onClick={() => moverTwo('esquerda')}
                        />
                    </div>
                    <img
                        src="../assets/vetores/vetoresLinhas.svg"
                        alt="Vetores de linhas"
                        style={{ position: 'absolute', width: '100%', height: '61%' }}
                    />
                </section>

                <aside id="sub-rodape">
                    <div className="div-rodape">
                        <img
                            src="../assets/sectionStore/box_50dp_263238_FILL0_wght400_GRAD0_opsz48 1.svg"
                            alt="Ícone de caixa"
                        />
                        <div>
                            <p className="p-rodape-title texto-pequeno mb-0">Frete Grátis</p>
                            <p className="p-rodape-text texto-pequeno mb-0">Para todo Brasil</p>
                        </div>
                    </div>
                    <div className="div-rodape">
                        <img
                            src="../assets/sectionStore/credit_card_50dp_263238_FILL0_wght400_GRAD0_opsz48 1.svg"
                            alt="Ícone de cartão de crédito"
                        />
                        <div>
                            <p className="p-rodape-title texto-pequeno mb-0">Pagamento Seguro</p>
                            <p className="p-rodape-text texto-pequeno mb-0">10x sem juros no cartão</p>
                        </div>
                    </div>
                </aside>
            </main>
            <Footer />
        </>
    );
};

export default Store;