export interface Vehicle {
  id: number;
  ez: string;
  make: string;
  mileageInKm: number;
  model: string;
  vin: string;
  hasAccident: boolean;
  accidentDescription: boolean;
  urlToAttachment1: string;
  urlToVehicleSummarySheet: string;
  amIHighestBidder: boolean;
  hasMaintenanceBook: boolean;
  lastServiceInspectionDate: boolean;
  lastServiceInspectionMileage: boolean;
  damagesDescription: string;
  fuelType: number;
  transmission: number;
}
