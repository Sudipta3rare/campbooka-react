function Feature(props) {
    return (
        <li>
            <i className="fa fa-tree" aria-hidden="true"></i>
            {props.featureName}
        </li>
    );
}

export default Feature;