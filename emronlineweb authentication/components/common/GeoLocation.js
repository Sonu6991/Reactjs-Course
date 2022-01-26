import Head from 'next/head'
import React from 'react'

const GeoLocation = ({ address, type }) => {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
            let latitude = results[0].geometry.location.lat();
            let longitude = results[0].geometry.location.lng();
            console.log(latitude, longitude);
        }
    });
    return (
        <>
            <Head>
                <script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=false"></script>
            </Head>
            <span>
                {type == 'latitude' ? latitude : longitude}
            </span>
        </>
    )
}

export default GeoLocation
