function ContactUsContainer (props) {

    return(
        <section class="cont" id="cont">
      <div class="container">
        <div class="cont-wrap">
          <div class="row align-items-center">
            {props.children}
          </div>
          </div>
          </div>
          </section>
    );
}
export default ContactUsContainer;