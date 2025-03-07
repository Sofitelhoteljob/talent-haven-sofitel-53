
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

export const GoogleMap = () => {
  const hotelAddress = "Sofitel Frankfurt Opera, Opernplatz 16, 60313 Frankfurt am Main, Germany";
  
  const handleGetDirections = () => {
    // Encode the address for the Google Maps URL
    const encodedAddress = encodeURIComponent(hotelAddress);
    // Open Google Maps in a new tab with directions to the hotel
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-background" aria-labelledby="location-heading">
      <div className="container mx-auto px-6">
        <h2 id="location-heading" className="font-playfair text-3xl font-semibold mb-8 text-center">Find Us</h2>
        <div className="flex flex-col items-center mb-8">
          <p className="text-center text-muted-foreground mb-4">
            <MapPin className="inline-block mr-2 h-5 w-5" aria-hidden="true" />
            {hotelAddress}
          </p>
          <Button 
            onClick={handleGetDirections}
            className="mt-2 bg-secondary hover:bg-secondary/90"
            aria-label="Get directions to Sofitel Frankfurt Opera"
          >
            <Navigation className="mr-2 h-4 w-4" aria-hidden="true" />
            Get Directions
          </Button>
        </div>
        <div 
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg"
          aria-label="Interactive map of Sofitel Frankfurt Opera location"
          role="application"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.879536253133!2d8.669950976926301!3d50.11579797942765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ea72e7ccd73%3A0xde3f30c963ee135b!2sSofitel%20Frankfurt%20Opera!5e0!3m2!1sen!2sus!4v1681254619876!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            title="Sofitel Frankfurt Opera Location Map"
            aria-describedby="map-description" 
            className="absolute inset-0"
          ></iframe>
          <span id="map-description" className="sr-only">
            Interactive Google Map showing the location of Sofitel Frankfurt Opera at Opernplatz 16, 60313 Frankfurt am Main, Germany. 
            Use the map to zoom in, zoom out, and explore the surroundings.
          </span>
        </div>
      </div>
    </section>
  );
};
