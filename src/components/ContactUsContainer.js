function ContactUsContainer (props) {

    return(
        <section className="cont" id="cont">
      <div className="container">
        <div className="cont-wrap">
          <div className="row align-items-center">
            {props.children}
          </div>
          </div>
          </div>
          </section>
    );
}
export default ContactUsContainer;