import React, { useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import styles from "./Contact.module.css";

function ContactMap() {
  const [center, setCenter] = useState([53.588416885931466, 9.972663369152546]);
  const [zoom, setZoom] = useState(11);
  return (
    <>
      <div className={styles.map_container}>
        <Map
          height={"23.688rem"}
          defaultCenter={[53.588416885931466, 9.972663369152546]}
          defaultZoom={11}
          center={center}
          zoom={zoom}
          onBoundsChanged={({ center, zoom }) => {
            setCenter(center);
            setZoom(zoom);
          }}
        >
          <ZoomControl />
          <Marker width={50} anchor={[53.588416885931466, 9.972663369152546]} />
        </Map>
        {/* </a> */}
      </div>
    </>
  );
}

export default ContactMap;
