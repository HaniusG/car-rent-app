import React from "react";
import styles from "./BookCar.module.scss";
import Container from "../../Container";
import Select from "../../Select";
import { FaCarSide } from "react-icons/fa";
import { FaLocationDot, FaRegCalendarPlus, FaRegCalendarMinus } from "react-icons/fa6";
import stylesSel from '../../Select/UI/Select.module.scss'
import Button from "../../Button";
import CarCalendar from "../../CarCalendar";

const BookCar = () => {
  return (
    <Container>
      <div className={styles.bookCar}>
        <h2>Book a car</h2>
        <div className={styles.bookCarForm}>
          <div className={styles.selectContainer}>
            <Select>
              <div className={stylesSel.title}>
                <FaCarSide/>
                <span>Select Your Car Type</span>
              </div>
              <select>
                <option value="" disabled hidden selected>Select your car type</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </Select>

            <Select>
              <div className={stylesSel.title}>
                <FaLocationDot/>
                <span>Pick up</span>
              </div>
              <select>
                <option value="" disabled hidden selected>Select pick up location</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </Select>

            <Select>
              <div className={stylesSel.title}>
                <FaLocationDot/>
                <span>Drop of</span>
              </div>
              <select>
                <option value="" disabled hidden selected>Select drop off location</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </Select>

            <Select>
              <div className={stylesSel.title}>
                <FaRegCalendarPlus/>
                <span>Pick up</span>
              </div>
              <CarCalendar/>
            </Select>

            <Select>
              <div className={stylesSel.title}>
                <FaRegCalendarMinus/>
                <span>Drop of</span>
              </div>
              <CarCalendar/>
            </Select>
            <Button version="blue">Search</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookCar;
