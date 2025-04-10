export default function greetings({state, likeState}) {
    
    return (<div className="cont">
        <h3>You liked our watch, prove it</h3>
        <p>{state} likes</p>
        <button className="clean" onClick={() => likeState(state + 1)}>Hit me</button>
      </div>
    )
  }

 
  
  