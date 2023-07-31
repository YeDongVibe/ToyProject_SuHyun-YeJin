import { useEffect, useState } from 'react';

const { kakao } = window;
const FoodMap = ({ foodList }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const locPosition = new window.kakao.maps.LatLng(lat, lon);
          const message = '현위치';

          displayMarker(kakaoMap, locPosition, message);
        },
        function (error) {
          console.error('Error getting current position:', error);
          const locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
          const message = 'geolocation을 사용할 수 없어요..';
          displayMarker(kakaoMap, locPosition, message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      const locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
      const message = 'geolocation을 사용할 수 없어요..';
      displayMarker(kakaoMap, locPosition, message);
    }
  }, []);

  const displayMarker = (map, locPosition, message) => {
    const marker = new window.kakao.maps.Marker({
      map: map,
      position: locPosition
    });

    const iwContent = message;
    const iwRemoveable = true;

    const infowindow = new window.kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable
    });

    infowindow.open(map, marker);

    map.setCenter(locPosition);
  };

  return (
    <div id="map" style={{ width: '600px', height: '500px' }}></div>
  );
};

export default FoodMap;