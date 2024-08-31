const Children = () => {
    const [items, setItems] = useState([
        { id: 6, name: "wendy" },
        { id: 1, name: "riel" },
        { id: 2, name: "chan" },
        { id: 3, name: "gang" },
        { id: 4, name: "jeff" },
        { id: 5, name: "amy" },
    ]);

    const shuffleItems = () => {
        const shuffled = [...items].reverse(); // 순서 반전
        setItems(shuffled);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Index as key:</h2>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            padding: "10px",
                            border: "1px solid black",
                            marginBottom: "5px",
                        }}
                    >
                        {item.id} / {item.name} / key : {index}
                    </div>
                ))}
            </div>

            <h2>ID as key:</h2>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            padding: "10px",
                            border: "1px solid black",
                            marginBottom: "5px",
                        }}
                    >
                        {item.id} / {item.name} / key : {item.id}
                    </div>
                ))}
            </div>

            <button onClick={shuffleItems} style={{ marginTop: "20px" }}>
                순서 바꾸기
            </button>
        </div>
    );
};
export default Children;
