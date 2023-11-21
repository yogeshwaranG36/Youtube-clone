import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
function Feed() {
    const [videoList, setvideoList] = useState([]);
    useEffect(() => {
        VideoColor()
    }, [setvideoList])
    async function VideoColor() {
        const url = 'https://youtube-v31.p.rapidapi.com/search?q=Latest&part=snippet%2Cid&regionCode=US&maxResults=50&order=date';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f7c16499f6msh6e14703248273b1p196de6jsn1f0c646db694',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setvideoList(result.items)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='flex-wrap flex'>
            {videoList.map((item, i) => { return <Videocard key={i} data={item} /> })}
        </div>
    )
}

export default Feed