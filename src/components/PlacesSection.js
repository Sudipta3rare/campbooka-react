
function PlacesSection(props) {
    return (
        <div class="container-list container">
            <div class="columns">
                <div class="column">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default PlacesSection;