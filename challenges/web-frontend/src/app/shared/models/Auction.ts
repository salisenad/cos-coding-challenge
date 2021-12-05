import {Vehicle} from "./Vehicle";

export interface Auction {
  id: number;
  minimumRequiredAsk: number;
  currentHighestBidValue: number;
  locationCountryCode: string;
  startingBidValue: number;
  remainingTimeInSeconds: number;
  associatedVehicle: Vehicle;
  endingTime: string;
  startedAt: string;
  createdAt: string;
  updatedAt: string;
  label: string;
  hotBid: boolean;
  amIHighestBidder: boolean;
}
export interface ResponseAuctions {
  items: Auction[];
}
