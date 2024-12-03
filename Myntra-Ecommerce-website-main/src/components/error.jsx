

import "./error.css"
export const Error=()=>{
  const navigate=useNavigate();
  const handleError=()=>{
    navigate(-1);
  }
    return (<>
    
  <button type="button" className="btn btn-outline-success errorbtn" onClick={handleError}>GO BACK</button>
  <img className="image4"src="https://th.bing.com/th/id/OIP.yYBFzWZ0R970KK2bJhwO9AHaEi?w=7520&h=4603&rs=1&pid=ImgDetMain"></img>
    </>)
}