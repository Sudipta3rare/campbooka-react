function HostAbout (props) {

    return(
        <section class="hipcamp">
      <div class="container">
        <div class="what-div">
          <div class="row align-items-center">
            {props.children}
          </div>
        </div>
      </div>
    </section>
    );
}
export default HostAbout;