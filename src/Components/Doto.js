import { useState } from "react";

function Doto() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTodo = () => {
        const payload = {
            title: title,
            description: description,
        };
        console.log("Sending payload:", payload);

        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(async (res) => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await res.json();
            alert(data.msg); // "Todo created"
            setTitle(""); // Reset the form
            setDescription("");
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
            alert("Failed to add todo");
        });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
}

export default Doto;