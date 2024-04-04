import { createSlice } from "@reduxjs/toolkit";

export interface carProps {
  id: string;
  carName: string;
  carImage: string;

  rent: number;
  model: string;
  mark: string;
  year: number;
  doors: string;
  AC: boolean;
  transmission: string;
  fuel: string;
}

interface initialStateProps {
  cars: carProps[];
	selectedCar: carProps;
}

const initialState: initialStateProps = {
  cars: [
    {
      id: "0",
      carName: "Audi A1 S-Line",
      carImage: "Car-images/cars/audi-a1-s-line.jpg",
      rent: 45,
      model: "Audi",
      mark: "A1",
      year: 2012,
      doors: "4/5",
      AC: true,
      transmission: "Manual",
      fuel: "Gasoline",
    },
    {
      id: "1",
      carName: "VW Golf 6",
      carImage: "Car-images/cars/vw-golf-6.jpg",
			rent: 37,
      model: "Golf 6",
      mark: "Volkswagen",
      year: 2008,
      doors: "4/5",
      AC: true,
      transmission: "Manual",
      fuel: "Diesel",
		},
    {
      id: "2",
      carName: "Toyota Camry",
      carImage: "Car-images/cars/toyota-camry.jpg",
			rent: 30,
      model: "Camry",
      mark: "Toyota",
      year: 2006,
      doors: "4/5",
      AC: true,
      transmission: "Automatic",
      fuel: "Hybrid",
		},
    {
      id: "3",
      carName: "BMW 320 ModernLine",
      carImage: "Car-images/cars/bmw-320-modernline.jpg",
			rent: 35,
      model: "320",
      mark: "BMW",
      year: 2012,
      doors: "4/5",
      AC: true,
      transmission: "Manual",
      fuel: "Diesel",
		},
    {
      id: "4",
      carName: "Mercedes-Benz GLK",
      carImage: "Car-images/cars/mercedes-benz-glk.jpg",
			rent: 50,
      model: "Benz GLK",
      mark: "Mercedes",
      year: 2006,
      doors: "4/5",
      AC: true,
      transmission: "Manual",
      fuel: "Diesel",
		},
    {
      id: "5",
      carName: "VW Passat CC",
      carImage: "Car-images/cars/vw-passat-cc.jpg",
			rent: 25,
      model: "Passat CC",
      mark: "Volkswagen",
      year: 2008,
      doors: "4/5",
      AC: true,
      transmission: "Automatic",
      fuel: "Gasoline",
		},
  ],

	selectedCar: {
      id: "0",
      carName: "Audi A1 S-Line",
      carImage: "Car-images/cars/audi-a1-s-line.jpg",
      rent: 45,
      model: "Audi",
      mark: "A1",
      year: 2012,
      doors: "4/5",
      AC: true,
      transmission: "Manual",
      fuel: "Gasoline",
    }
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
		choseCar: (state, action) => {
      state.selectedCar = action.payload;
    },
	},
});

export const { choseCar } = carsSlice.actions; 
export default carsSlice.reducer;

