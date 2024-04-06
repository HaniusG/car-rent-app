import React from 'react';
import './App.css';
import Header from '../../components/Header';
import RentInfo from '../../components/RentIntro';
import BookCar from '../../components/BookCar';
import Calendar from 'react-calendar';
import VehicleSelect from '../../components/VehicleSelect';
import Footer from '../../components/Footer';
import TripPlanInfo from '../../components/TripPlanInfo';
import BlackBanner from '../../components/BlackBanner';
import DealsSection from '../../components/DealsSection';

function App() {
  return (
    <div>
      <Header/>
      <RentInfo/>
      <BookCar/>
      <TripPlanInfo/>
      <VehicleSelect/>
      <BlackBanner/>
      <DealsSection/>
      <Footer/>
    </div>
  );
}

export default App;
