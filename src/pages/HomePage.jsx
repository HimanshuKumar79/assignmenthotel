import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { GiSandsOfTime } from "react-icons/gi";

const HomePage = () => {
  const hotelData = useSelector(
    (state) => state.filterHotelJsonData.hotelFilteredJsonData
  );

  const [cardsToShow, setCardsToShow] = useState(6);

  const handleShowMore = () => {
    setCardsToShow(cardsToShow + 6);
  };

  useEffect(() => {
    setCardsToShow(6);
  }, [hotelData]);
  const visibleHotelData = hotelData.slice(0, cardsToShow);

  return (
    <div className="h-fit w-[100vw] flex flex-col justify-center items-center gap-2 pt-3">
      <Header />
      <div className="grid grid-cols-3 gap-6 px-6">
        {visibleHotelData.length > 0 ? (
          visibleHotelData.map(
            (
              {
                location,
                beds,
                rooms,
                bathroom,
                sft,
                price,
                forRent,
                popular,
                url,
                hotelLocation,
              },
              index
            ) => {
              return (
                <Card
                  key={index} // Add a unique key for each card
                  location={location}
                  hotelLocation={hotelLocation}
                  beds={beds}
                  rooms={rooms}
                  bathroom={bathroom}
                  sft={sft}
                  price={price}
                  forRent={forRent}
                  popular={popular}
                  url={url}
                />
              );
            }
          )
        ) : (
          <div>No data Available</div>
        )}
      </div>
      {hotelData.length > cardsToShow && (
        <div
          className="flex justify-center cursor-pointer items-center h-fit w-fit px-4 gap-3 py-2 my-2 rounded-2xl bg-[blue] text-white font-semibold"
          onClick={handleShowMore}
        >
          <GiSandsOfTime className="mt-[2px]" />
          <p>Show More</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
