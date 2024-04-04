import React, { useState } from "react";
import Container from "../../Container";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaRegCalendar } from "react-icons/fa";
import styles from "./CarCalendar.module.scss";
import Select from "../../Select";
import { FaLocationDot } from "react-icons/fa6";

type ValuePiece = Date | null;

const CarCalendar: React.FC = () => {
  const [date, setDate] = useState<string | null>(
    null
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onCalendarSelect = (date: ValuePiece | [ValuePiece, ValuePiece]) => {
    if (Array.isArray(date)) {
    } else {
     let  formattedDate =  date &&`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      date && setDate(formattedDate);
    }
  };

  const onOpenClick = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className={styles.calendarWrapper}>
        <div className={styles.calendarInput}>

        <span>{date ? date: 'mm/ dd/ yyyy'}</span>
        <button onClick={onOpenClick}>
          <FaRegCalendar />
        </button>
        </div>
				
        {isOpen && (
          <Calendar
            className={[styles.calendar]}
            onChange={onCalendarSelect}
            value={date}
          />
        )}
      </div>
  );
};

export default CarCalendar;
