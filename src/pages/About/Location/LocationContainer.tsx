import React, { useEffect, useRef } from "react";
import { LocationPresentation } from "./LocationPresentaion";

const LocationContainer: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const script = document.createElement('script');
        script.src =
          `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=bid104fm7c`;
        script.async = true;
    
        script.onload = () => {
          // @ts-ignore – 네이버 스크립트가 전역 주입
          const { naver } = window;
          if (!naver || !mapRef.current) return;
    
          const map = new naver.maps.Map(mapRef.current, {
            center: new naver.maps.LatLng(37.542262, 126.863322),
            zoom: 17,
            minZoom: 15,
            maxZoom: 20,
            zoomControl: true,
            zoomControlOptions: { position: naver.maps.Position.TOP_RIGHT },
            scrollWheel: false,
          });
    
          new naver.maps.Marker({
            position: new naver.maps.LatLng(37.542262, 126.863322),
            map,
          });
        };
    
        document.head.appendChild(script);
        return () => {
          document.head.removeChild(script);
        };
      }, []);

  return <LocationPresentation mapRef={mapRef as React.RefObject<HTMLDivElement>} />;
};

export default LocationContainer;