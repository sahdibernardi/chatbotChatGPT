import { useState } from 'react'
import './App.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator   } from '@chatscope/chat-ui-kit-react'


const APIKEY = import.meta.env.VITE_API_KEY;
function App() {
  const [count, setCount] = useState(0)
  
  console.log("apiKey: "+APIKEY);
  return (
    <div className="App">
          <div> Olá mundo </div>
     <MainContainer>
      <ChatContainer>
        <MessageList>
        </MessageList>
      </ChatContainer>
     </MainContainer>
    </div>
  )
}

export default App
