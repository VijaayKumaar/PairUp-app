
import './Homepage.css';
import Home from './Home';
import UserList from './Userlist';
import MainComponent from './UserGallery/UserImages';


function Homepage() {
    return (
      
   
        <div className="homepage-container">
          <div className="user-list-container2">
            <MainComponent />
          </div>
          <div className="post-container" style={{width:"100%", height:"100%", padding:"5px"}}>
            <Home />
          </div>
          <div className="user-list-container">
            <UserList />
          </div>
        </div>
      
    );
  }
  
  export default Homepage;
  