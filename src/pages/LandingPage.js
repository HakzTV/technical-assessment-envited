import { Link } from "react-router-dom";
const landingPage = () =>{
    return(
        <div className="hero">
          <div className="hero-img-section-desktop">
        <div className="hero-img-desktop"></div>
        </div>
        <div>
        <h1 className="hero-txt">Imagine if <span className="snap">Snapchat</span> had events</h1>
            <div className="hero-sub">
                <p>Easily host and share events with your friends accross any social media.</p>
            </div>
            
        </div>
        <div className="all-text">
        <div className="hero-img-section">
        <div className="hero-img"></div>
        </div>
        <button> <Link to="/create" className="btn">🎉 Create my event</Link></button> 
        </div>
       
    </div>
    );
};

export default landingPage;