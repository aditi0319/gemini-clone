import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context.jsx/Context'
const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
      <div className="main-container">
        {
        !showResult
        ?
         <>
          <div className="greet">
            <p><span>Hello,Adi.</span></p>
            <p>How can i help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Briefly summarize this concept: urban planning. Include  </p>
                <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card">
                <p>Draft an email to my recruiter to accept the Social Media Manager job offer </p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Generate a vibrant and lively image depicting an elephant party</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>You are a social trend expert on the latest internet slang and memes. Explain</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
         </>
         :
         <div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="resultData">
                <img src={assets.gemini_icon} alt="" />
                {loading?
          <div className="loader">
<hr />
<hr />
<hr />

          </div> :
          <p dangerouslySetInnerHTML={{__html:resultData}}></p>

}
            </div>
         </div>
}
       
        <div className="main-bottom">
            <div className="searchBox">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a promt here' />
               <div> 
                <img src={assets.gallery_icon} alt="" />
               <img src={assets.mic_icon} alt="" />
               <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
               </div>
            </div>
            <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses.<u>Your privacy and Gemini Apps</u> </p>
        </div>
      </div>
    </div>
  )
}

export default Main
