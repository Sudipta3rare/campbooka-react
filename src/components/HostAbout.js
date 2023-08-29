function HostAbout (props) {

    return(
        <section className="hipcamp">
      <div className="container">
        <div className="what-div">
          <div className="row align-items-center">
            {props.children}
          </div>
        </div>
      </div>
    </section>
    );
}
export default HostAbout;