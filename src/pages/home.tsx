import { Button } from "@mui/material"
import Stack from "@mui/material/Stack"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (
        <div style={{ marginTop: 17, backgroundColor: "#FFF", width: "100%", height: "100%" }}>
            <Stack spacing={2} width="100%" alignItems="center" mt="17%">
                <h3 style={{ padding: 0, margin: 0 }}>What are you looking for</h3>
                <span>Get started by searching and filtering a few</span>
                <Button onClick={() => navigate("/items")} variant="contained" sx={{ width: "max-content" }}>Fetch data</Button>
                <span>or search for an item</span>
            </Stack>
        </div>
    )
}

export default Home