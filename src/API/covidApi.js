import Axios from "axios";

Axios.defaults.baseURL = "https://covid19-brazil-api.now.sh/api/report/v1";

// get img
// https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/CE.png

export const getStateData = (uf) =>
  Axios.get("/brazil/uf/" + uf)
    .then((response) => response.data)
    .catch((err) => console.log("deu ruim", err));

export const getCountryData = (country) =>
  Axios.get("/" + country)
    .then((response) => response.data.data)
    .catch((err) => console.log("deu ruim", err));

export const getAllStateBrazilData = () =>
  Axios.get()
    .then((response) =>
      response.data.data.sort((a, b) => a.state.localeCompare(b.state))
    )
    .catch((err) => console.log("deu ruim", err));
