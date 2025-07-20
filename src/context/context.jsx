import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompts, setPreviousPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function() {
      setResultData(prev => prev + nextWord);
    }, 75 * index);
  };

const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    
    // Only add to previousPrompts if input is not empty
    if (input.trim()) {
        setPreviousPrompts(prev => [...prev, input]);
    }

    try {
        const response = await runChat(input);
        console.log("Response from Gemini:", response);
        
        // Process bold formatting (**text**)
        let responseArray = response.split("**");
        let newResponse = "";

        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }

        // Process line breaks (* becomes <br/>)
        let newResponse2 = newResponse.split("*").join("<br/>");
        
        // Split into words for typing animation
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i] + " ";
            delayPara(i, nextWord);
        }
        
        setInput("");
    } catch (error) {
        console.error("Error in onSent:", error);
        setResultData("Error: Could not get response from AI. Please try again.");
    } finally {
        setLoading(false);
    }
};

  const contextValue = {
    previousPrompts,
    setPreviousPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;