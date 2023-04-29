import React, { useState } from "react";
import axios from "axios";

function Translate_API() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translateText = async () => {
    const API_KEY = "6365ec8dd8mshe4929898f5a27c8p1fbf8cjsnded5789ea280";
    const API_URL = "https://google-translate1.p.rapidapi.com/language/translate/v2";

    try {
      const response = await axios.post(API_URL, {
        q: inputText,
        target: "es",
      }, {
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "google-translate1.p.rapidapi.com",
          "content-type": "application/x-www-form-urlencoded",
        },
      });

      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={translateText}>Translate</button>
      <p>{translatedText}</p>
    </div>
  );
}

export default Translate_API;
