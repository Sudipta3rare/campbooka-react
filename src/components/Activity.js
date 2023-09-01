function Activity(props) {
    return (
        <li>
            <i className="fa fa-tree" aria-hidden="true"></i>
            {props.activityName}
        </li>
    );
}

export default Activity;