import React, { useEffect, useState } from 'react';
import http from '../axios';

function Home() {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [topMixes, setTopMixes] = useState([]);
  const [madeForYou, setMadeForYou] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [jumpBackIn, setJumpBackIn] = useState([]);
  const [uniquelyYours, setUniquelyYours] = useState([]);

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`
  };

  useEffect(() => {
    http.get('featured-playlists', { headers })
      .then(response => setFeaturedPlaylists(response.data.playlists.items))
      .catch(error => console.error('Error fetching featured playlists:', error));

    http.get('categories/toplists/playlists', { headers })
      .then(response => setTopMixes(response.data.playlists.items))
      .catch(error => console.error('Error fetching top mixes:', error));

    http.get('categories/0JQ5DAqbMKFHOzuVTgTizF/playlists', { headers })
      .then(response => setMadeForYou(response.data.playlists.items))
      .catch(error => console.error('Error fetching made for you:', error));

    http.get('categories/0JQ5DAqbMKFQ00XGBls6ym/playlists', { headers })
      .then(response => setRecentlyPlayed(response.data.playlists.items))
      .catch(error => console.error('Error fetching recently played:', error));

    http.get('categories/0JQ5DAqbMKFLVaM30PMBm4/playlists', { headers })
      .then(response => setJumpBackIn(response.data.playlists.items))
      .catch(error => console.error('Error fetching jump back in:', error));

    http.get('categories/0JQ5DAqbMKFCbimwdOYlsl/playlists', { headers })
      .then(response => setUniquelyYours(response.data.playlists.items))
      .catch(error => console.error('Error fetching uniquely yours:', error));
  }, []);

  const renderPlaylists = (playlists) => {
    return playlists.map((playlist) => (
      <div key={playlist.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
        <img src={playlist.images[0]?.url} alt={playlist.name} className="w-full h-40 object-cover rounded-md mb-2" />
        <h3 className="text-lg font-semibold">{playlist.name}</h3>
        <p className="text-sm text-gray-400">{playlist.description}</p>
      </div>
    ));
  };

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Good Afternoon</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {renderPlaylists(featuredPlaylists)}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Top Mixes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {renderPlaylists(topMixes)}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Made for You</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {renderPlaylists(madeForYou)}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recently Played</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {renderPlaylists(recentlyPlayed)}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Jump Back In</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {renderPlaylists(jumpBackIn)}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Uniquely Yours</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {renderPlaylists(uniquelyYours)}
        </div>
      </div>
    </div>
  );
}

export default Home;