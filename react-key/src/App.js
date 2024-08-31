import React, { useState } from "react";

function App() {
    const [isMe, setIsMe] = useState(true);
    return (
        <>
            <Counter
                key={isMe ? "wendy" : "chan"}
                name={isMe ? "wendy" : "chan"}
            />
            {/* {isMe ? <Counter name={"wendy"} /> : <Counter name={"chan"} />} */}
            <button onClick={() => setIsMe((prev) => !prev)}>사람바꾸기</button>
        </>
    );
}
const Counter = ({ name }) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>
                {name} : {count}
            </h1>
            <button onClick={() => setCount(count + 1)}>++++</button>
        </>
    );
};
export default App;
