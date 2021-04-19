import { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import AutoComplete from "../Components/AutoComplete.jsx";
import Marker from "../Components/Marker";
import "../Components/Sidenav/sidenav.css";
import Pin from "../icons/location-pin.svg";
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
// import {
//   GoogleMapProvider,
//   HeatMap,
//   InfoWindow,
//   MapBox,
//   Marker,
//   OverlayView,
//   Polygon,
// } from '@googlemap-react/core'


const MapsPage = () => {
  const [lat, setLat] = useState(9.082);
  const [lng, setLng] = useState(8.6753);
  const [zoom, setZoom] = useState(2);
  const [google, setGoogle] = useState();
  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const [mapApi, setMapApi] = useState();
  const [mapInstance, setMapInstance] = useState();

  const [places, setPlaces] = useState([]);
  
  
  useEffect(() => {
    if (places.length===3) {
       setPlaces([])
    }
    console.log(Pin)
}, [places])

  const handleClick = ({ lat, lng }) => {
    console.log(lat, lng);
    setLat(lat);
    setLng(lng);
    setZoom(zoom + 2);
  };
   console.log(places.length)
  const handleApiLoaded = (map, maps) => {
    setMapApi(maps);
    setMapInstance(map);
    setMapApiLoaded(true);
    
  };
  const [stateInfo, setStateInfo] = useState([]);
  
  

  //  const LocationPin = ({ text }) => (
  //    <div className="pin">
  //      <Icon icon={locationIcon} className="pin-icon" />
  //      <p className="pin-text">{text}</p>
  //    </div>
  //  )
  return (
    <>
    
        
      <div
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        <div
          style={{
            flex:0.95,
            font: "1.4rem",
            margin:"0 auto",
            
          }}
        >  
          
            <h3 className="text-center text-capitalize">Parcel request</h3>
            {mapApiLoaded && (
            <div className="mb-4">
              
              <AutoComplete
                map={mapInstance}
                mapApi={mapApi}
                addplace={async (place) => {
                  setPlaces([...places, place]);
                  const { address_components } = place;
                  
                  const { short_name } = address_components[
                    address_components.length - 2
                  ];
                  
                  console.log(short_name)
                  const res = await fetch(
                    `https://pvc-api.osinachi.me/api/states/${short_name}`
                  );
                  const data = await res.json();
                  console.log(data);
                }}
                searchfield={"Pickup address"}
              />
            </div>
          )}

          {mapApiLoaded && (
            <div className="mb-4">
               <AutoComplete
                map={mapInstance}
                mapApi={mapApi}
                addplace={async (place) => {
                  setPlaces([...places, place]);
                  const { address_components } = place;
                  const { short_name } = address_components[
                    address_components.length - 2
                  ];
                  console.log(short_name);
                  const res = await fetch(
                    `https://pvc-api.osinachi.me/api/states/${short_name}`
                  );
                  const data = await res.json();
                  console.log(data);
                }}
                searchfield={"Dropoff address"}
              /> 

             </div> 
          )}

           
          
          <GoogleMapReact
            onClick={handleClick}
            bootstrapURLKeys={{
              key:process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
              libraries: ["places", "geometry"],
            }}
            defaultCenter={{ lat, lng }}
            defaultZoom={zoom}
            center={{ lat, lng }}
            zoom={zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
          
          {
              places.map((place,index) => (
                <Marker
                  key={index}
                  text={Pin}
                  lat={place.geometry.location.lat()}
                  lng={place.geometry.location.lng()}
                />
                
              ))}
                 
                 
               
              {/* { <LocationPin
                  lat={lat}
                  lng={lng}
                  text={locator}
                /> } */}

              {/* {places.length > 1 &&
              places.map((place) => (
                <Marker
                  key={place.id}
                  text={Pin}
                  lat={place.geometry.location.lat()}
                  lng={place.geometry.location.lng()}
                />
              ))}      */}
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
};

export default MapsPage;
