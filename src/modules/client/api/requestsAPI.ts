import firebase from "firebase";

// Initialize Firebase app
const firebaseConfig = {
  apiKey: "AIzaSyBwSIBnp5vGFsc-bu41bcEO4IKAUcE_Rtc",
  authDomain: "kronos-io.firebaseapp.com",
  projectId: "kronos-io",
  storageBucket: "kronos-io.appspot.com",
  messagingSenderId: "776585474837",
  appId: "1:776585474837:web:dc1977f7168e22417eaf1c",
};
firebase.initializeApp(firebaseConfig);

// Define database reference
const database = firebase.database();

// Define interface for request data
interface IRequestData {
  requestId: string;
  requestIIN: string;
  serviceName: string;
  organizationName: string;
  requestFirstName: string;
  requestLastName: string;
  countryName: string;
  cityName: string;
  regionName: string;
  streetName: string;
  houseNumber: string;
  flatNumber: string;
  floorNumber: string;
  entranceNumber: string;
  frame: string;
  LCDName: string;
  extraInfo: string;
  recieverIIN: string;
  recieverFirstName: string;
  recieverLastName: string;
  isConfidant: boolean;
  deliveryServiceId: number;
  termsOfUseChecked: boolean;
  privacyPolicyChecked: boolean;
  currentStep: number;
}

// Function to create a new request in the database
const createRequest = (requestData: IRequestData) => {
  return database.ref("requests").push(requestData);
};

// Function to read a request from the database
const readRequest = (requestId: string): Promise<IRequestData> => {
  return database
    .ref(`requests/${requestId}`)
    .once("value")
    .then((snapshot: any) => snapshot.val());
};

// Function to update an existing request in the database
const updateRequest = (
  requestId: string,
  updatedData: Partial<IRequestData>
): Promise<void> => {
  return database.ref(`requests/${requestId}`).update(updatedData);
};

// Function to delete a request from the database
const deleteRequest = (requestId: string): Promise<void> => {
  return database.ref(`requests/${requestId}`).remove();
};

export default {
  createRequest,
  readRequest,
  updateRequest,
  deleteRequest,
};
