import { useState } from 'react';
import { data } from './pictureData';

function Contact() {

    const [picture, setPicture] = useState(0);
    const {image} = data[picture]; 

    const nextItem = () => {
        setPicture((picture => {
          picture ++;
            if(picture > data.length-1) {
              picture = 0;
            }
            return picture;
        }))
        }

    const prevItem = () => {
        setPicture((picture => {
          picture --;
            if (picture < 0) {
            return data.length-1;
            }
            return picture;
        }))
        }

    return (<div>
        <div className="watch">
        <p>Our contacts:</p>
        <p>Email: customer.services@rolex.co.uk</p>
        <p>Instagram: @therolexwatchess"@therolexwatchess</p>
        <p>Facebook: https://www.facebook.com/rolex</p>
        <p>Viber: ROLEX WATCHES🫰🏻🐼 by BOKPANDA88 #R4E</p>
        <p>Telegram: https://t.me/rolex_rep</p>
        </div>
        <br></br>
        <div className="watchInfo">
        <h3>Проверяйте Ваши часы на подлинность: <a href="https://www.youtube.com/watch?v=yEQiFkaU1pA">Смотри здесь как</a></h3>
        </div>
        <div className="watchInfo">
        <h3>Все часы продаваемые на нашем сайте имеют сертификат качества компании Rolex</h3>
        </div>
        <br></br>
        <div className='watchInfo'>
        <h2>Знаменитые люди которые носят часы Rolex</h2>
        </div>
        <div className='famous'>
            <button onClick={prevItem} className="change">Go Back</button>
            <img src={image} className='changer' width='350px' alt='PictureHere' />
            <button onClick={nextItem} className="change">Go Forward</button>
        </div>
        <h2 className='watchInfo'>Они предпочли нашу марку часов</h2>
    </div>
    );
  }
  
  export default Contact;

