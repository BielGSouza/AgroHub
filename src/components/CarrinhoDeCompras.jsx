import { useState } from 'react';
import '../css/CarrinhoDeCompras.css';

const CarrinhoDeCompras = () => {

    const [carrinhoAberto, setCarrinhoAberto] = useState(false);

    return (
        <>
            {!carrinhoAberto && (

                <div className='carrinho' onClick={() => setCarrinhoAberto(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e3e3e3"><path d="M444-576v-132H312v-72h132v-132h72v132h132v72H516v132h-72ZM213-117.21q-21-21.21-21-51T213.21-219q21.21-21 51-21T315-218.79q21 21.21 21 51T314.79-117q-21.21 21-51 21T213-117.21Zm432 0q-21-21.21-21-51T645.21-219q21.21-21 51-21T747-218.79q21 21.21 21 51T746.79-117q-21.21 21-51 21T645-117.21ZM48-792v-72h133l155 360h301l113-264h78L703-476q-9 20-26.5 32T637-432H317l-42 72h493v72H276q-42 0-63-36.5t0-71.5l52-90-131-306H48Z" /></svg>
                </div>
            )}
            {carrinhoAberto && (
                <div className='carrinho-container'>
                    <div className="fechar-carrinho" onClick={() => setCarrinhoAberto(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg>
                    </div>
                    <div className="barra-carrinho">
                        <p className='mb-0 text-white'>Carrinho</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3"><path d="M444-576v-132H312v-72h132v-132h72v132h132v72H516v132h-72ZM213-117.21q-21-21.21-21-51T213.21-219q21.21-21 51-21T315-218.79q21 21.21 21 51T314.79-117q-21.21 21-51 21T213-117.21Zm432 0q-21-21.21-21-51T645.21-219q21.21-21 51-21T747-218.79q21 21.21 21 51T746.79-117q-21.21 21-51 21T645-117.21ZM48-792v-72h133l155 360h301l113-264h78L703-476q-9 20-26.5 32T637-432H317l-42 72h493v72H276q-42 0-63-36.5t0-71.5l52-90-131-306H48Z" /></svg>
                    </div>
                </div>
            )}
        </>
    )
}

export default CarrinhoDeCompras
