const express = require("express");
const { createTodo, updateTodo } = require("./types"); // Ensure updateTodo is defined
const { todo } = require('./db');
const cors = require("cors"); // Add CORS middleware
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); 

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }

    try {
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        });

        res.json({
            msg: "Todo created"
        });
    } catch (error) {
        console.error("Error creating todo:", error);
        res.status(500).json({
            msg: "Internal server error"
        });
    }
});


app.get("/doto", async function(req, res) {
    try {
        const todos = await todo.find({});
        res.json({
            todos
        });
    } catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).json({
            msg: "Internal server error"
        });
    }
});


app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }

    try {
        await todo.updateOne(
            { _id: updatePayload.id }, // Filter by ID
            { completed: true } // Update operation
        );

        res.json({
            msg: "Todo marked as completed"
        });
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({
            msg: "Internal server error"
        });
    }
});


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});