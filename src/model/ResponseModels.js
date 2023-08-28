
class SearchLocationResponseModel {
    constructor(data) {
        this.id = data.id;
        this.locationName = data.locationName;
        this.countryName = data.countryName;
    }
}

export { SearchLocationResponseModel };