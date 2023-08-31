import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';

const Products = () => {
  const [currency, setCurrency] = useState('KM');
  const [color, setColor] = useState('color1');
  const handleClick = () => {
    if(currency=='EUR'){
      setCurrency('KM');
    }else{
      setCurrency('EUR');
    }
  };
  const handleClickColor = () => {
    if(color=='color1'){
      setColor('color2');
    }else{
      setColor('color1');
    }
  };
    return(
        <div className='products'>
                    <div className="kocka">
          <img src="https://gema.ba/wp-content/uploads/2022/08/Joop-women-_a22_705_4140006393-scaled.jpg"/>
          {currency=='KM' ? <p>Cijena:300KM</p> :
          <p>Cijena:150EUR</p>}
          <p className={color=='color1' ? 'color1' : 'color2'}><b>O torbi:</b><br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
        </div>
        <div className="kocka">
          <img src="https://www.buzzsneakers.ba/files/thumbs/files/images/slike-proizvoda/media/FB6/FB6526-838/images/thumbs_350/FB6526-838_350_350px.jpg" />
          {currency=='KM' ? <p>Cijena:50KM</p> :
          <p>Cijena:25EUR</p>}
          <p className={color=='color1' ? 'color1' : 'color2'}><b>O kapi:</b><br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className="kocka">
          <img src="https://jumbomedias3-14033.kxcdn.com/bh/2021/04/1190636.jpg"/>
          {currency=='KM' ? <p>Cijena:100KM</p> :
          <p>Cijena:50EUR</p>}
          <p className={color=='color1' ? 'color1' : 'color2'}><b>O novčaniku:</b><br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <button className='buttons' onClick={handleClick}>Change currency</button>
        <button className='buttons' onClick={handleClickColor}>Change color</button>
        </div>
    );
  };
  
  export default Products;