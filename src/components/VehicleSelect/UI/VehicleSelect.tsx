import React from "react";
import styles from "./VehicleSelect.module.scss";
import Container from "../../Container";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { carProps, choseCar } from "../../../redux/cars/carsSlice";
import InfoHeader from "../../InfoHeader";

const VehicleSelect = () => {
  const dispatch = useDispatch();

  const cars = useSelector((state: RootState) => state.carsSlice.cars);
  const selectedCar = useSelector(
    (state: RootState) => state.carsSlice.selectedCar
  );

  const choseCarHandler = (car: carProps) => {
    dispatch(choseCar(car));
  };

  return (
    <Container>
      <div className={styles.carChoseHeader}>
        <InfoHeader>
        <h3>Vehicle Modelss</h3>
        <h1>Our rental fleet</h1>
        <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        </InfoHeader>
        
      </div>
      
      <div className={styles.choseCarWrapper}>
        <div className={styles.chooseCarBtns}>
          {cars.map((car) => {
            let choseCarBtnStyle = styles.chooseCarBtn;
            choseCarBtnStyle +=
              selectedCar.id === car.id ? " " + styles.active : "";

            return (
              <button
                onClick={() => choseCarHandler(car)}
                className={choseCarBtnStyle}
              >
                {car.carName}
              </button>
            );
          })}
        </div>

        <img src={selectedCar.carImage} alt="" />

        <div className={styles.carDetails}>
          <h2>
            $35 / <span>rent per day</span>
          </h2>
          <ul>
            <li>
              <span>Model</span>
              <span>{selectedCar.model}</span>
            </li>
            <li>
              <span>Mark</span>
              <span>{selectedCar.mark}</span>
            </li>
            <li>
              <span>Year</span>
              <span>{selectedCar.year}</span>
            </li>
            <li>
              <span>Doors</span>
              <span>{selectedCar.doors}</span>
            </li>
            <li>
              <span>AC</span>
              <span>{selectedCar.AC ? "Yes":"No"}</span>
            </li>
            <li>
              <span>Transmission</span>
              <span>{selectedCar.transmission}</span>
            </li>
            <li>
              <span>Fuel</span>
              <span>{selectedCar.fuel}</span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default VehicleSelect;
