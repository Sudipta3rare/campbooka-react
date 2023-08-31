import PropertyCard from "./PropertyCard";
import './PropertyCardSection.css';

function PropertyCardSection() {
    return (
        <section className="viewpropert">
            <div className="container">
            <div className="viewproperty-wrap">
                <div className="row">
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                </div>
            </div>
        </div>
        </section>
    );
}

export default PropertyCardSection;