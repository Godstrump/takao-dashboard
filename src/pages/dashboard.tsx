import { Box, Stack, TextField, InputAdornment, IconButton, Button } from "@mui/material";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Outlet, useMatch } from "react-router-dom";
import AppDrawer from "../components/common/app-drawer";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectItems } from "../redux/items/items.selectors";
import { useState } from "react";
import { search } from "../redux/items/items.reducer";

const Dashboard = () => {
    const data = useAppSelector(selectItems)
    const dispatch = useAppDispatch()
    const match = useMatch("/items")
    const [text, setText] = useState('')

    const handleInput = (e: any) => {
        // I am suppose to implement debounce but oh well
        const word = e.target.value
        setText(word)
        setTimeout(() => 
            dispatch(search(word))            
        ,500)
    }

    
    return (
        <AppDrawer>
            <Box pb={4} sx={{ borderBottom: "1px solid grey"}}>
                <Stack direction="row" width="100%" alignItems="center" justifyContent="space-between">
                    <h2>Item search</h2>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <TextField 
                            sx={{ width: 400 }} 
                            value={text}
                            onChange={handleInput}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => {}}
                                            edge="end"
                                        >
                                            <SearchOutlinedIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button variant="contained" sx={{ height: 54, fontSize: 20, backgroundColor: "#FFF", color: "blue" }}>+</Button>
                        <BookmarkBorderOutlinedIcon sx={{ fontSize: 30 }} />
                        <FilterListOutlinedIcon sx={{ fontSize: 30 }} />
                    </Stack>
                </Stack>
                <Stack direction="row" >
                    <span>{match ? data?.length : 0} items</span>
                </Stack>
            </Box>
            <Outlet />
        </AppDrawer>
    )
}

export default Dashboard;