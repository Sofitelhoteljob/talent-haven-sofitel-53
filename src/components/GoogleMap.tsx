
import React from 'react';

export const GoogleMap = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-3xl font-semibold mb-8 text-center">Find Us</h2>
        <p className="text-center text-muted-foreground mb-8">
          Sofitel Frankfurt Opera - Opernplatz 16, 60313 Frankfurt am Main, Germany
        </p>
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.879536253133!2d8.6721392!3d50.115799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ea72e7ccd73%3A0xde3f30c963ee135b!2sSofitel%20Frankfurt%20Opera!5e0!3m2!1sen!2sus!4v1654967302693!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sofitel Frankfurt Opera Location"
            className="absolute inset-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
