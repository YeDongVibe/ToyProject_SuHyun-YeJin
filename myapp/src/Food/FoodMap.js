import { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import style from './Food.module.css';

const FoodMap = ({ foodList, selectedFoodId }) => {
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
    isMapVisible: false, // 추가된 상태 변수: 지도 보이기 여부를 관리
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

  const getCurrentLocation = () => {
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
          }));
        },
        (err) => {
          console.error("Error getting current location:", err);
        }
      );
    } else {
      console.error("Geolocation is not available.");
    }
  };

  const handleMapToggle = () => { // 지도 띄우기(반응형 위한)
    setState((prev) => ({
      ...prev,
      isMapVisible: !prev.isMapVisible,
    }));
  };

  const handleCloseMap = () => { // 지도 닫기 버튼 클릭 핸들러
    setState((prev) => ({
      ...prev,
      isMapVisible: false,
    }));
  };

  return (
    <main>
      {state.isMapVisible && (
        <div className={style.Mappopup}>
          <div className={style.MappopupContent}>
            <Map
              center={state.center}
              style={{
                width: "100%",
                height: "100%",
              }}
              level={3}
            >
              {!state.isLoading && (
                <>
                  <MapMarker position={state.center} />
                  {markers.map((marker) => (
                    <MapMarker
                      key={marker.id}
                      position={{ lat: marker.latitude, lng: marker.longitude }}
                    />
                  ))}
                </>
              )}
            </Map>
            <button className={style.CloseButton} onClick={handleCloseMap}>닫기</button>
            <button className={style.MapMyPosi} onClick={getCurrentLocation}>내 위치로</button>
          </div>
        </div>
      )}
      {selectedFood && (
        <div>
          <button onClick={handleMapToggle} className={style.MapSeeBt}>지도보기</button>
        </div>
      )}
    </main>
  );
};

export default FoodMap;
