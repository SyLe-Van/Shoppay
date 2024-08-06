import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://api.ipregistry.co/?key=lc424motdfemedh1"
    );
    const country = response.data.location.country;
    res.status(200).json({ country });
  } catch (error) {
    console.error(error);
    res.status(500).json({ country: "Unknown" });
  }
}
