export interface RestaurantModel {
    "id": string;
    "name":string;
    "imagePath":string;
    "deliveryEstimate": string;
    "category": string;
    "rating":number;
    about?: string;
    hours?: string;
}