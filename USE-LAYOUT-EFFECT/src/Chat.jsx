import { useLayoutEffect, useRef } from 'react'

function Chat() {
    const chatRef = useRef(null);

    useLayoutEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, []);

  return (
    <div ref={ chatRef } style={{ height:"100px", border:"1px solid #ccc", overflowY:"scroll" }}>
        <p>Hello</p>
        <p>How are you?</p>
        <p>Welcome to chat.</p>
        <p>Tesing</p>
        <p>How are you?</p>
        <p>Welcome to chat.</p>
        <p>Tesing</p>
    </div>
  )
}

export default Chat