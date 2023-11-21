import React from 'react'

function Videocard({ data }) {
    const { snippet, id } = data;
    const { title, channelTitle, thumbnails } = snippet
    const { videoId } = id;
    // console.log(videoId);


    return (
        <>
            <div className='w-1/4'>;
                <a href={`https://youtube.com/watch?v=${videoId}`}>
                    <img src={thumbnails.medium.url} alt="Thumbnail" className='rounded-xl' />
                    {/* console.log({data.item[i].videoId}); */}
                    <p className='pr-11 font-medium text-lg mt-3'>{title}</p>
                    <p className='font-bold text-gray-500'>{channelTitle}</p>
                </a>
            </div>
        </>
    )
}

export default Videocard