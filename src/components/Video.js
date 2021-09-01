import React from 'react'

const Video = ({data,dispOverlay}) => {
    
    //defining source 
    const source="https://static.roomvu.com//storage/market_update/videos/to-monthly-update_video.mp4";
  
   
    
    return (
        <section className="video">
            <h2>Greater Vancouver Market Update</h2>
            <video width="100%" controls muted  onTimeUpdate={dispOverlay} autoPlay>
              <source src={source} type="video/mp4"/>
            </video>
        {/* overlay 1 */}
        <div id="overlay1">
            <div className="photo">
                <img src="images/profile.png" alt="" />
            </div>
            <div className="info1"> 
                <p>{data.fullname}</p>
            </div>
                <div className="info2">
                <p>{data.phnum}</p>
            <p className="brk-name">{data.brkname}</p>
            </div>
        </div>
        {/* overlay 2 */}
        <div id="overlay2">
            <div className="photo">
                <div className="pic">
                    <img src="images/profile.png" alt="" />
                </div>
            </div>
            <div className="info">
                <p>{data.fullname}</p>
                <p >{data.phnum}</p>
            </div>
        </div>
        {/* overlay 3 */}
        <div id="overlay3">
            <div className="photo">
              <img src="images/profile.png" alt="" />
            </div>
            <div className="info1"> 
              <p>{data.fullname}</p>
            </div>
            <div className="info2">
              <p>{data.phnum}</p>
              <p className="brk-name">{data.brkname}</p>
            </div>
        </div>

    </section>
    )
    
}

export default Video
