import React, { useState } from 'react';
import '../css/conversorUnidades.css';

// Fatores de conversão: quantos hectares equivalem a 1 unidade
const FATORES_PARA_HECTARE = {
    hectare: 1,
    alqueirePaulista: 2.42,
    alqueireMineiro: 4.84,
    alqueireNorte: 4.84,
    acre: 0.404686,
    m2: 0.0001,
    km2: 100,
};

const ROTULOS = {
    hectare: 'Hectare (ha)',
    alqueirePaulista: 'Alqueire Paulista',
    alqueireMineiro: 'Alqueire Mineiro/Goiano',
    acre: 'Acre',
    m2: 'Metro Quadrado (m²)',
    km2: 'Quilômetro Quadrado (km²)',
};

const ConversorUnidades = () => {
    const [valor, setValor] = useState('');
    const [unidadeOrigem, setUnidadeOrigem] = useState('hectare');
    const [resultados, setResultados] = useState(null);

    const converter = () => {
        const valorNum = parseFloat(valor);

        if (!valor || isNaN(valorNum) || valorNum <= 0) {
            alert('Por favor, insira um valor de área válido.');
            return;
        }

        const valorEmHectares = valorNum * FATORES_PARA_HECTARE[unidadeOrigem];

        const novosResultados = Object.keys(FATORES_PARA_HECTARE)
            .filter((unidade) => unidade !== unidadeOrigem)
            .map((unidade) => ({
                unidade,
                rotulo: ROTULOS[unidade],
                valor: (valorEmHectares / FATORES_PARA_HECTARE[unidade]).toLocaleString('pt-BR', {
                    maximumFractionDigits: 4,
                }),
            }));

        setResultados(novosResultados);
    };

    return (
        <section id="conversor-unidades">
            <div className="titulo-conversor">
                <h2 className="Exo-2 fw-bold fst-italic">Conversor de Unidades Agrárias</h2>
                <p className="paragrafo">Converta rapidamente a área da sua propriedade entre hectares, alqueires, acres e mais.</p>
            </div>

            <div className="conversor-form">
                <div className="conversor-grupo">
                    <label htmlFor="conversor-valor">Valor</label>
                    <input
                        id="conversor-valor"
                        type="number"
                        placeholder="Ex: 10"
                        min="0"
                        step="0.01"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    />
                </div>

                <div className="conversor-grupo">
                    <label htmlFor="conversor-unidade">Unidade de Origem</label>
                    <select
                        id="conversor-unidade"
                        value={unidadeOrigem}
                        onChange={(e) => setUnidadeOrigem(e.target.value)}
                    >
                        {Object.keys(ROTULOS).map((unidade) => (
                            <option key={unidade} value={unidade}>{ROTULOS[unidade]}</option>
                        ))}
                    </select>
                </div>

                <div className="conversor-btn-row">
                    <button className="btn-converter" onClick={converter}>Converter</button>
                </div>

                {resultados && (
                    <div id="resultado-conversor" className="ativo">
                        {resultados.map((item) => (
                            <div className="conversor-item" key={item.unidade}>
                                <strong>{item.valor}</strong>
                                <span>{item.rotulo}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ConversorUnidades;
