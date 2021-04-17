import "./styles.css";
import { useState } from "react";

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");
  const emojis = {
    "😜": "Mischief",
    "😍": "lovely",
    "😇": "Lucky",
    "😎": "Smart",
    "🤔": "Thinking",
    "😂": "LOL"
  };

  function emojiInputHandler(event) {
    var meaning = emojis[event.target.value];
    if (meaning === undefined) {
      meaning = "We dont have in our database";
    }
    setEmojiMeaning(meaning);
  }

  function emojiClickHandler(value) {
    var temp = emojis[value];
    setEmojiMeaning(temp);
  }
  return (
    <div className="App">
      <h1>Emoji Recognizer</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{emojiMeaning}</h2>
      <h3>Emojis We Know </h3>
      {Object.keys(emojis).map((item, count) => {
        return (
          <span
            onClick={() => {
              emojiClickHandler(item);
            }}
            key={count}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
