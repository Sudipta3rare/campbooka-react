import './InnerBanner.css';

function InnerBanner(props) {
    return(
        <section>
         
        <div className="sub-banner">
            <div className="overlay">
                <div className="container">
                    <div className="breadcrumb-area">
                        <h1>{props.data}</h1>
                        
                    </div>
                </div>
            </div>
            
        </div>
      </section>
    );
}

export default InnerBanner;