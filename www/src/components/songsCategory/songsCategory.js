import React, { useState, useEffect } from "react";
import CategoryCard from "../categoryCard/categoryCard";
import "./songsCategory.css";
import { useLocation } from "react-router-dom";
import SongsService from "../../services/songsService";
import Loader from '../loader/loader';

const SongsCategory = () => {
  const [songsCategory, setSongsCategory] = useState([]);

  const email = window.localStorage.getItem("loggedInEmail");
  const path = useLocation().pathname;

  const getCurrentCategory = () => {
    if (path === "/songs/top-playlists") return "Top Playlists";
    if (path === "/songs/new-releases") return "New Releases";
  }
  const currentCategory = getCurrentCategory();

  const getTopPlaylists = async () => {
    const response = await SongsService.getTopPlaylists(email);
    setSongsCategory(response.data);
  }

  const getNewReleases = async () => {
    const response = await SongsService.getNewReleases(email);
    setSongsCategory(response.data);
  }

  useEffect(() => {
    if (path === "/songs/top-playlists") getTopPlaylists();
    if (path === "/songs/new-releases") getNewReleases();
  }, []);

  return (
    <React.Fragment>
      <div className="align-label">{currentCategory}</div>
      {
        songsCategory.length === 0 
        ?
          <div className="align-loader">
            <Loader></Loader>
          </div>
        :
          <div className="align-categories">
            {songsCategory &&
              songsCategory.map((playlist, index) => {
                return (
                  <CategoryCard playlist={playlist} key={index}></CategoryCard>
                );
              })}
          </div>
      }
    </React.Fragment>
  );
}

export default SongsCategory;
