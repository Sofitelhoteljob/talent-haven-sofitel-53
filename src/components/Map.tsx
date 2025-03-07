
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapToken, setMapToken] = useState<string>('');
  const [showMap, setShowMap] = useState<boolean>(false);

  // Frankfurt Opera House coordinates
  const lng = 8.673;
  const lat = 50.116;

  useEffect(() => {
    if (!mapContainer.current || !showMap || !mapToken) return;

    // Initialize map
    mapboxgl.accessToken = mapToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom: 14,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add marker for Sofitel Frankfurt Opera
    new mapboxgl.Marker({ color: '#C8A754' })
      .setLngLat([lng, lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          '<h3 class="font-semibold">Sofitel Frankfurt Opera</h3><p>Opernplatz 16, 60313 Frankfurt</p>'
        )
      )
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapToken, showMap]);

  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowMap(true);
  };

  return (
    <section className="py-16 bg-background" id="location">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-playfair text-3xl font-bold mb-4">Our Location</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sofitel Frankfurt Opera is located in the heart of Frankfurt, offering easy access to the city's major attractions and business districts.
          </p>
        </div>

        {!showMap ? (
          <div className="max-w-md mx-auto p-6 border border-border rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4">Enter Mapbox Token</h3>
            <p className="text-sm text-muted-foreground mb-4">
              To view the map, please enter your Mapbox public token. You can get one by signing up at{" "}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                mapbox.com
              </a>
            </p>
            <form onSubmit={handleTokenSubmit} className="space-y-4">
              <input
                type="text"
                value={mapToken}
                onChange={(e) => setMapToken(e.target.value)}
                placeholder="Enter your Mapbox public token"
                className="w-full p-2 border border-input rounded-md"
                required
              />
              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                Show Map
              </Button>
            </form>
          </div>
        ) : (
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <div ref={mapContainer} className="absolute inset-0" />
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-md shadow-md z-10 max-w-xs">
              <div className="flex gap-2">
                <MapPin className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Sofitel Frankfurt Opera</p>
                  <p className="text-sm text-muted-foreground">Opernplatz 16, 60313 Frankfurt am Main, Germany</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MapSection;
