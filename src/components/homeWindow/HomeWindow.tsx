import {useEffect, useState} from "react";
import {getData} from "../service/api";

export default function HomeWindow (){
    const [stateData, setStateData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const posts = await getData();
            setStateData(posts)
        }
        fetchData();
    }, [])
    console.log(stateData)
    return (
        <div>
        HomeWindow
        </div>
        );
}