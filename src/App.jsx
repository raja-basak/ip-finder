import axios from "axios";
import { useState, useEffect } from "react";
import Map from "./Map";

const App = () => {
  const [ip, setIp] = useState("");
  const [loc, setLocation] = useState("");
  const [isp, setIsp] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  useEffect(() => {
    axios
      .get('https://api.ipdata.co/?api-key=e587f198b1dcb4b6f2874761716c33a26b3e206f458004c08455682b')
      .then((response) => {
        setIp(response.data.ip);
        setLocation(response.data.country_name);
        setIsp(response.data.asn.name);
        setLat(response.data.latitude);
        setLong(response.data.longitude);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  return (
    <div className="container p-3">
      <h6 className="text-center text-primary">IP Adress Finder</h6>
      <div className="row">
        <div className="col-md-4">
          <h6 className="text-danger">IP Adress</h6>
          <p className="text-success">
            {ip}
          </p>
          <h6 className="text-danger">Location</h6>
          <p className="text-success">
            {loc}
          </p>
          <h6 className="text-danger">ISP</h6>
          <p className="text-success">
            {isp}
          </p>
        </div>
        <div className="col-md-8">
          {
            lat !== '' && long !== '' ? <Map lat={lat} long={long}/> : ''
          }
        </div>
      </div>
    </div>
  );
};
export default App;
