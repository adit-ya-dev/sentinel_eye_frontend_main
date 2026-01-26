"use client";

import { useEffect, useRef, useState } from "react";
import { Trash2, Square, Loader2 } from "lucide-react";

export default function LeafletMapClient({
  onBboxChange,
}: {
  onBboxChange: (bbox: any) => void;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const rectangleRef = useRef<any>(null);

  const [mapLoaded, setMapLoaded] = useState(false);
  const [drawingMode, setDrawingMode] = useState(false);
  const [hasSelection, setHasSelection] = useState(false);

  // Fix: Use a ref for the callback to prevent the dependency array size error
  const onBboxChangeRef = useRef(onBboxChange);
  useEffect(() => {
    onBboxChangeRef.current = onBboxChange;
  }, [onBboxChange]);

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return;

    const initMap = () => {
      // @ts-ignore
      const L = window.L;
      if (!L || mapInstance.current) return;

      const map = L.map(mapRef.current, {
        zoomControl: false,
      }).setView([28.6139, 77.209], 12);

      mapInstance.current = map;

      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        { attribution: "Esri World Imagery" },
      ).addTo(map);

      let startPoint: any = null;

      map.on("mousedown", (e: any) => {
        if (!drawingMode) return;
        map.dragging.disable();
        startPoint = e.latlng;

        if (rectangleRef.current) {
          map.removeLayer(rectangleRef.current);
        }

        rectangleRef.current = L.rectangle([startPoint, startPoint], {
          color: "#3b82f6",
          weight: 2,
          fillOpacity: 0.2,
          interactive: true,
        }).addTo(map);
      });

      map.on("mousemove", (e: any) => {
        if (!startPoint || !rectangleRef.current) return;
        rectangleRef.current.setBounds(L.latLngBounds(startPoint, e.latlng));
      });

      map.on("mouseup", () => {
        if (!startPoint || !rectangleRef.current) return;

        const bounds = rectangleRef.current.getBounds();
        // Access current callback through ref
        onBboxChangeRef.current({
          north: bounds.getNorth(),
          south: bounds.getSouth(),
          east: bounds.getEast(),
          west: bounds.getWest(),
        });

        startPoint = null;
        map.dragging.enable();
        setDrawingMode(false);
        setHasSelection(true);
      });

      setMapLoaded(true);
    };

    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    if (!(window as any).L) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
    // Removed onBboxChange to keep dependency array constant
  }, [drawingMode]);

  const handleClear = () => {
    if (rectangleRef.current && mapInstance.current) {
      mapInstance.current.removeLayer(rectangleRef.current);
      rectangleRef.current = null;
      setHasSelection(false);
    }
  };

  return (
    <div className="relative w-full h-full min-h-[500px] bg-[#020817]">
      <div
        ref={mapRef}
        className="w-full h-full z-0"
        style={{ cursor: drawingMode ? "crosshair" : "grab" }}
      />

      {/* Floating UI Controls - Z-INDEX FIXED TO 10 TO STAY BELOW HEADER */}
      <div className="absolute top-6 right-6 z-[10] flex flex-col gap-3">
        <button
          onClick={() => setDrawingMode(!drawingMode)}
          className={`group flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-200 ${
            drawingMode
              ? "bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              : "bg-[#071225]/80 backdrop-blur-md border-white/10 text-white/70 hover:text-white"
          }`}
        >
          <Square className="w-5 h-5" />
        </button>

        {hasSelection && (
          <button
            onClick={handleClear}
            className="group flex h-12 w-12 items-center justify-center rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-500 backdrop-blur-md transition-all duration-200 hover:bg-rose-500 hover:text-white"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* DRAWING NOTIFICATION - FIXED Z-INDEX */}
      {drawingMode && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full border border-blue-400/50 shadow-xl z-[10]">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-[10px] text-white font-black tracking-widest uppercase">
            Drawing Active
          </span>
        </div>
      )}

      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#020817] z-[20]">
          <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
        </div>
      )}
    </div>
  );
}
