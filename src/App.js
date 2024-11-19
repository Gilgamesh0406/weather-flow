import WeatherInformationProvider from "./Contexts/WeatherInformation.js";
import WeatherBoard from "./Pages/WeatherBoard.jsx";

export default function App() {
  return (
  <WeatherInformationProvider>
    <WeatherBoard></WeatherBoard>
  </WeatherInformationProvider>);
}
