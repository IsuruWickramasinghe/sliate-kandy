import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import client from "../config/sanity_config";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [heroBanners, setHeroBanners] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);
  const [gallery, setGallery] = useState([]);

  // home page
  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryBanners = '*[_type == "hero_banner"]';
        const docBanners = await client.fetch(queryBanners);
        setHeroBanners(docBanners);

        const queryAnnouncements = '*[_type == "announcements"]';
        const docAnnouncements = await client.fetch(queryAnnouncements);
        setAnnouncements(docAnnouncements);

        const queryEvents = '*[_type == "events"]';
        const docEvents = await client.fetch(queryEvents);
        setEvents(docEvents);

        const queryGallery = '*[_type == "gallery"]';
        const docGallery = await client.fetch(queryGallery);
        setGallery(docGallery);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
        console.error(err.message);
      }
    };

    fetchData();
  }, []);

  // select announcement
  const getAnn = useMemo(() => async (ann_id) => {
    try {
      const queryAnn = `*[_type == "announcements" && _id == "${ann_id}" ]`;
      const docAnn = await client.fetch(queryAnn);
      return docAnn;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }, []);

  // select event
  const getEvent = useMemo(() => async (event_id) => {
    try {
      const queryEvent = `*[_type == "events" && _id == "${event_id}" ]`;
      const docEvent = await client.fetch(queryEvent);
      return docEvent;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }, []);

  // select Gal
  const getGal = useMemo(() => async (Gal_id) => {
    try {
      const queryGal = `*[_type == "gallery" && _id == "${Gal_id}" ]`;
      const docGal = await client.fetch(queryGal);
      return docGal;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }, []);
  

  return (
    <Context.Provider
      value={{
        isLoading,
        error,
        heroBanners,
        announcements,
        events,
        gallery,
        getAnn,
        getEvent,
        getGal
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
