import PropertyCard from "./PropertyCard";

function PropertyCardSection() {
    return (
        <div class="container">
            <div class="viewproperty-wrap">
                <div class="row">
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                </div>
            </div>
        </div>
    );
}

export default PropertyCardSection;