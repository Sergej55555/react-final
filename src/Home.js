import { useEffect, useState } from 'react';
import { data } from './data';
import Buttons from './Buttons';
import MyWatch from './MyWatch';
import Greetings from './Greetings';


function Home() {
  
    const [watches, setWatches] = useState (data);
    const [state, setState] = useState (
      localStorage.like ? JSON.parse(localStorage.like) : 0);

    useEffect(() => {
      localStorage.setItem('like', JSON.stringify(state))
  }, [state])

    const chosenWatches = (searchTerm) => {
      const newWatches = data.filter(element => element.searchTerm === searchTerm);
      setWatches(newWatches);
    }

    return (<div>
      <div className='cont'>
        <h2 className='back'>Best Price, Best Sale</h2>
      </div>
        <Buttons filteredWatches={chosenWatches} />
        <MyWatch itemsForSale={watches}/>
        <Greetings state={state} likeState={setState}/>
      </div>
    );
  }
  
  export default Home;