import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const FoodMap = ({ foodList, selectedFoodId }) => {
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setState((prev) => ({
            ...prev,
            center: {
              lat: latitude,
              lng: longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할 수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  // 선택한 음식점의 위치 정보만 따로 추출하여 markers 상태로 저장
  const selectedFood = foodList.find((food) => food.id === selectedFoodId);
  const markers = selectedFood ? [
    {
      id: selectedFood.id,
      name: selectedFood.name,
      latitude: selectedFood.latitude,
      longitude: selectedFood.longitude,
    },
  ] : [];

  useEffect(() => {
    // 선택한 음식점의 위치가 변경되면 지도 화면도 해당 위치로 이동
    if (selectedFood) {
      setState((prev) => ({
        ...prev,
        center: {
          lat: selectedFood.latitude,
          lng: selectedFood.longitude,
        },
      }));
    }
  }, [selectedFood]);

  return (
    <main>
      <Map
        center={state.center}
        style={{
          width: "600px",
          height: "500px",
          position: 'absolute',
          top: '50%',
          right: '5%',
          transform: 'translate(0, -50%)',
        }}
        level={3}
      >
        {!state.isLoading && (
          <>
            {/* Marker for the user's current location */}
            <MapMarker position={state.center} />
            {/* Marker for the selected food location */}
            {markers.map((marker) => (
              <MapMarker
                key={marker.id}
                position={{ lat: marker.latitude, lng: marker.longitude }}
              />
            ))}
          </>
        )}
      </Map>
    </main>
  );
};

export default FoodMap;
