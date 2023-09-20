function HostNeed (props) {

    return(
        
<section class="need d-none d-md-block d-lg-block d-sm-none">
<div class="container">
    <div class="wrap-1">
      <div class="row align-items-center">
      <div className="row align-items-center">
            {props.children}
          </div>
    </div>
  </div>
</div>
</section>
    );
}
export default HostNeed;