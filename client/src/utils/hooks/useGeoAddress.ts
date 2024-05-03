import { useEffect, useState } from "react";

export type GeoAddress = {
  
    city?: string;
    country?: string;
    country_code?: string;
    house_number?: string;
    neighborhood?: string;
    postcode?: string;
    road?: string;
    state?: string;
    state_district?: string;

} | undefined;

function useGeoAddress(): {
  address: GeoAddress;
  error: Error | null;
  status: "granted" | "prompt" | "denied" | null;
} {
  const [address, setAddress] = useState<GeoAddress>(undefined);
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<"granted" | "prompt" | "denied" | null>(
    null
  );

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const { signal } = controller;

    const getAddress = async () => {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0,
            });
          }
        );

        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
          { signal }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch address");
        }

        const data = await res.json();
        if (isMounted) {
          setAddress(data.address as GeoAddress);
        }
      } catch (error) {
        if (isMounted) {
          setError(error as Error);
        }
      }
    };

    getAddress();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    if ("permissions" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (isMounted) {
            setStatus(
              permissionStatus.state as "granted" | "prompt" | "denied"
            );
          }
        });
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return { address, error, status };
}

export default useGeoAddress;

