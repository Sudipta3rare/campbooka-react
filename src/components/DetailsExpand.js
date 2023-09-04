function DetailsExpand(props){
    return(
        <li>
            <a href="host-details.html">
                <i className="bi bi-circle"></i><span>{props.data}</span>
            </a>
        </li>
             
    )
}

export default DetailsExpand;