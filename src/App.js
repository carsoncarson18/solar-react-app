import React from 'react';
import './App.css';
import WeatherComponent from './components/WeatherComponent';
import fortschSolar from './fortsch-solar.jpg';
import solarImage from './centralsolar2.jpg';
import solarMap from "./solarmap.png";
import solargis from "./solargis.png"


function App() {
  return (
    <div className="App">
      <div className="Header-container" style={{ backgroundImage: `url(${fortschSolar})` }}> {/* Set the background image here */}
        <header className="App-header">
          <h1>Solar Capability Analysis of Northern Orlando</h1>
          <h1 className="Subtext">Created by Carson Davie and Nicholas Meyl</h1>
        </header>
      </div>

      <section className="ContentWrapper">
        <div className="TextandWeather">
          <div className="Box1">
            <h2 className="Subheading">OUR MISSION</h2>
            <hr className="Separator" />
            <p>Concentrated Solar Power is a renewable energy technology that utilizes lenses to focus sunlight onto a small area, generating heat that is then converted into electricity. This provides a sustainable energy source reducing the current dependency on fossil fuels and lowering greenhouse gas emissions. The concentrated solar power systems are especially advantageous for large-scale deployment. Moreover, many solar power plants incorporate energy storage, enabling electricity generation even when the sun is not shining. Our mission is to harness solar energy to create a cleaner, more sustainable future for everyone, promoting energy independence, driving economic growth, and ensuring access to affordable and reliable electricity for communities around the world. </p>
          </div>

          <div className="Weather-component">
            <WeatherComponent />
          </div>
        </div>

        <div className="ImageWrapper">
        <img src={solarImage} alt="Solar energy" className="SideImage" />
        </div>
      </section>

      <section className="ContentWrapper2">
        <div className="Text2">
          <h2 className="Subheading">OUR PROCESS</h2>
          <hr className="Separator" />
          <p>Once the model builder was open, each shapefile was converted to a raster from a polygon. This was the same process that was conducted for the other layers. For the land suitability analysis, the FLUCCS codes were uploaded to an excel sheet and classified from 0-1 for their respective land type for development.</p>
          <p>These layers were then plugged into cell statistics to give them a mean and find a site average. This output was then used with the “sacred cow” of land suitability, any open water, and ran as a cell statistics as minimum to rate those areas as zero. Once that was completed a reclassify tool was used to find the best site for solar energy development. After conducting the reclassification, the output needed to be converted to a polygon to run the select tool. The select tool was used to find an area greater than or equal to 300 acres of land for a true solar energy development site.</p>
        </div>

        <div className="ImageWrapper2">
        <img src={solarMap} alt="Solar energy" className="SideImage" />
        </div>
      </section>

      <section className="ContentWrapper2">
        <div className="Text2">
          <h2 className="Subheading">OUR FINDINGS</h2>
          <hr className="Separator" />
          <p>The selected locations for solar energy development in northern Orlando, Florida, are ideal due to a careful analysis of various factors, including land cover, proximity to power lines, parks, conservation areas, and flood zones. Areas with open land and minimal vegetation provide optimal conditions for solar installations, maximizing sunlight exposure while minimizing shading. The proximity to existing power lines ensures efficient energy distribution, reducing infrastructure costs and enhancing connectivity to the grid. Additionally, the consideration of flood zones ensures safe location choices, minimizing risks associated with flooding and environmental impact. By strategically targeting these suitable sites, we can harness solar energy effectively, contributing to a sustainable energy future while preserving the natural beauty and ecological integrity of northern Orlando.</p>
        </div>

        <div className="ImageWrapper2">
        <img src={solargis} alt="Ideal solar farm location" className="SideImage" />
        </div>
      </section>
    </div>
  );
}

export default App;
