import React from 'react';
import {Button, TextField} from "@mui/material";

function App() {
    return (
        <>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                    <h1>Shortener</h1>
                    <TextField id="shortUrl" label="Short URL"/>
                    <Button variant="text">Create</Button>
                </div>
            </div>
        </>
    );
}

export default App;
