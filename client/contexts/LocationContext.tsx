import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Coordinates, getCurrentLocation, DEFAULT_USER_LOCATION } from '@/lib/location';

interface LocationContextType {
  userLocation: Coordinates;
  setUserLocation: (location: Coordinates) => void;
  isLoadingLocation: boolean;
  refreshLocation: () => Promise<void>;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [userLocation, setUserLocation] = useState<Coordinates>(DEFAULT_USER_LOCATION);
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);

  const refreshLocation = async () => {
    setIsLoadingLocation(true);
    try {
      const location = await getCurrentLocation();
      setUserLocation(location);
    } catch (error) {
      console.warn('Could not get user location:', error);
      setUserLocation(DEFAULT_USER_LOCATION);
    } finally {
      setIsLoadingLocation(false);
    }
  };

  useEffect(() => {
    refreshLocation();
  }, []);

  return (
    <LocationContext.Provider value={{
      userLocation,
      setUserLocation,
      isLoadingLocation,
      refreshLocation,
    }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
