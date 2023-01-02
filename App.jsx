import React,{useState} from 'react' 
import './App.css'
import { BsSun } from 'react-icons/bs'
import { BiMoon } from 'react-icons/bi'
import {fb,insta,twitter,utube,up,down} from './assets'
function App() {

  const [mode, setMode] = useState("dark")
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white"
  })
  const [text, setText] = useState("Enable Light Mode")
  const [emoji, setEmoji] = useState(<BsSun/>)
  const toggleMode = ()=>{
    if (style.color == "black") {
      setEmoji(<BiMoon/>)
      setMode("light")
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
      setText("Enable Dark Mode");
    } else {
      setEmoji(<BsSun/>)
      setMode('dark')
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setText("Enable Light Mode");
    }
  }
  return (
    <div className="App">
      <div  style={{backgroundColor:mode==='light'?'white':'black' , color:mode==='dark'?'white':'black'}} className="container mx-auto" >
        <div className="top">
          <div className="heading flex items-center justify-around p-5 flex-col md:flex-row">
            <div>
            <h1 className='text-2xl  font-bold' style={{backgroundColor:mode==='light'?'white':'black' , color:mode==='dark'?'white':'black'} }>Social Media Dashboard</h1>
            <span className=''style={{backgroundColor:mode==='light'?'white':'black' , color:mode==='dark'?'white':'black'} }>Total Followers: 23,004</span>
            </div>
            <div  className=' text-xl flex flex-row justify-between space-x-32 mt-5 items-center' style={{backgroundColor:mode==='light'?'white':'black' , color:mode==='dark'?'white':'black'} }>
             <div>{text}</div>  <div onClick={toggleMode}>{emoji}</div> 
            </div>
          </div>
        </div>
        <div className="social-box p-5 space-y-5 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-5 md:space-y-0">
          <div className="fb relative rounded-lg p-5 pb-5 w-80 mx-auto " style={{backgroundColor:mode==='light'?'#D3D3D3':'#00008B' , color:mode==='dark'?'white':'black'} } >
          <div className='bg-indigo-400 h-1 rounded-lg absolute top-0 left-0 w-full'></div>
            <div className=' h-1 rounded-lg absolute top-0 left-0 w-full'></div>
            <div className='flex flex-row space-x-3 w-fit mx-auto items-center'>
            <img src={fb} alt="" />
            <span className=''>@code_college</span>
              </div>
              <div className="followers flex-col flex mt-3">
                <span className=' text-6xl font-extrabold text-center'>1987</span><span className=' text-lg  font-light tracking-widest text-center'>FOLLOWERS</span>
              </div>
              <div className='flex flex-row items-center space-x-2 w-fit mx-auto mt-3'>
                <img src={up} alt="" />
                <span className=' text-sm'>12 Today</span>
              </div>
          </div>
          <div className="twitter relative rounded-lg p-5 pb-5 w-80 mx-auto " style={{backgroundColor:mode==='light'?'#D3D3D3':'#00008B' , color:mode==='dark'?'white':'black'} }>
          <div className='bg-indigo-400 h-1 rounded-lg absolute top-0 left-0 w-full'></div>
            <div className='flex flex-row space-x-3 w-fit mx-auto items-center'>
            <img src={twitter} alt="" />
            <span className=''>@code_college</span>
              </div>
              <div className="followers flex-col flex mt-3">
                <span className=' text-6xl font-extrabold text-center'>1044</span><span className=' text-lg  font-light tracking-widest text-center'>FOLLOWERS</span>
              </div>
              <div className='flex flex-row items-center space-x-2 w-fit mx-auto mt-3'>
                <img src={up} alt="" />
                <span className=' text-sm'>99 Today</span>
              </div>
          </div>
          <div className="insta relative rounded-lg p-5 pb-5 w-80 mx-auto " style={{backgroundColor:mode==='light'?'#D3D3D3':'#00008B' , color:mode==='dark'?'white':'black'} }>
          <div className='bg-gradient-to-r from-yellow-500 to-orange-400 to-pink-500 h-1 rounded-lg absolute top-0 left-0 w-full'></div>
            <div className='flex flex-row space-x-3 w-fit mx-auto items-center'>
            <img src={insta} alt="" />
            <span className=''>@code_college</span>
              </div>
              <div className="followers flex-col flex mt-3">
                <span className=' text-6xl font-extrabold text-center'>11K</span><span className=' text-lg  font-light tracking-widest text-center'>FOLLOWERS</span>
              </div>
              <div className='flex flex-row items-center space-x-2 w-fit mx-auto mt-3'>
                <img src={up} alt="" />
                <span className=' text-sm'>1099 Today</span>
              </div>
          </div>
          <div className="utube relative rounded-lg p-5 pb-5 w-80 mx-auto " style={{backgroundColor:mode==='light'?'#D3D3D3':'#00008B' , color:mode==='dark'?'white':'black'} }>
          <div className='bg-red-600 h-1 rounded-lg absolute top-0 left-0 w-full'></div>
            <div className='flex flex-row space-x-3 w-fit mx-auto items-center'>
            <img src={utube} alt="" />
            <span className=''>@code_college</span>
              </div>
              <div className="followers flex-col flex mt-3">
                <span className=' text-6xl font-extrabold text-center'>8239</span><span className=' text-lg  font-light tracking-widest text-center'>SUBSCRIBERS</span>
              </div>
              <div className='flex flex-row items-center space-x-2 w-fit mx-auto mt-3'>
                <img src={down} alt="" />
                <span className=' text-sm'>144 Today</span>
              </div>
          </div>
        </div>
        <div className="today mt-8">
          <h2 className='text-3xl  ml-6 font-bold' style={{backgroundColor:mode==='light'?'white':'black' , color:mode==='dark'?'white':'black'} }>OVERVIEW - TODAY</h2>
          <div className="todayd md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-5 md:p-2 md:pb-5 mt-5" >
        <div className="fb rounded-lg p-5 pb-5 w-80 mx-auto  mt-3" style={{backgroundColor:mode==='light'?'#D3D3D3':'#00008B' , color:mode==='dark'?'white':'black'} }>
            <div className='flex flex-row-reverse justify-between space-x-3  mx-auto items-center'>
            <img src={fb} alt="" />
            <span className=''>Page Views</span>
              </div>
              <div className='flex flex-row justify-between space-x-3 mt-3 mx-auto items-center '>
            <div className=' font-bold text-3xl ml-3'>87</div>
            <div className='flex flex-row items-center space-x-2 w-fit mx-auto mt-3'>
                <img src={up} alt="" />
                <span className='text-green-700 text-sm'>+3%</span>
              </div>
              </div>
          </div>
          <div className="fb rounded-lg p-5 pb-5 w-80 mx-auto  mt-3" style={{backgroundColor:mode==='light'?'#D3D3D3':'#00008B' , color:mode==='dark'?'white':'black'} }>
            <div className='flex flex-row-reverse justify-between space-x-3  mx-auto items-center'>
            <img src={fb} alt="" />
            <span className=''>Likes</span>
              </div>
              <div className='flex flex-row justify-between space-x-3 mt-3 mx-auto items-center '>
            <div className=' font-bold text-3xl ml-3'>52</div>
            <div className='flex flex-row items-center space-x-2 w-fit mx-auto mt-3'>
                <img src={down} alt="" />
                <span className='text-red-700 text-sm'>-2%</span>
              </div>
              </div>
          </div>
          <div className="insta rounded-lg p-5 pb-5 w-80 mx-auto  mt-3" style={{backgroundColor:mode==='light'?'#D3D3D3':'#00008B' , color:mode==='dark'?'white':'black'} }>
            <div className='flex flex-row-reverse justify-between space-x-3  mx-auto items-center'>
            <img src={insta} alt="" />
            <span className=''>Page Views</span>
              </div>
              <div className='flex flex-row justify-between space-x-3 mt-3 mx-auto items-center '>
            <div className=' font-bold text-3xl ml-3'>52K</div>
            <div className='flex flex-row items-center space-x-2 w-fit mx-auto mt-3'>
                <img src={up} alt="" />
                <span className='text-green-700 text-sm'>+1375%</span>
              </div>
              </div>
          </div>
          <div className="insta rounded-lg p-5 pb-5 w-80 mx-auto  mt-3" style={{backgroundColor:mode==='light'?'#D3D3D3':'#00008B' , color:mode==='dark'?'white':'black'} }>
            <div className='flex flex-row-reverse justify-between space-x-3  mx-auto items-center'>
            <img src={insta} alt="" />
            <span className=''>Likes</span>
              </div>
              <div className='flex flex-row justify-between space-x-3 mt-3 mx-auto items-center '>
            <div className=' font-bold text-3xl ml-3'>5462</div>
            <div className='flex flex-row items-center space-x-2 w-fit mx-auto mt-3'>
                <img src={up} alt="" />
                <span className='text-green-700 text-sm'>+2257%</span>
              </div>
              </div>
          </div>
          <div className="twitter rounded-lg p-5 pb-5 w-80 mx-auto  mt-3" style={{backgroundColor:mode==='light'?'#D3D3D3':'#00008B' , color:mode==='dark'?'white':'black'} }>
            <div className='flex flex-row-reverse justify-between space-x-3  mx-auto items-center'>
            <img src={twitter} alt="" />
            <span className=''>Retweets</span>
              </div>
              <div className='flex flex-row justify-between space-x-3 mt-3 mx-auto items-center '>
            <div className=' font-bold text-3xl ml-3'>117</div>
            <div className='flex flex-row items-center space-x-2 w-fit mx-auto mt-3'>
                <img src={up} alt="" />
                <span className='text-green-700 text-sm'>+303%</span>
              </div>
              </div>
          </div>
          <div className="twitter rounded-lg p-5 pb-5 w-80 mx-auto  mt-3" style={{backgroundColor:mode==='light'?'#D3D3D3':'#00008B' , color:mode==='dark'?'white':'black'} }>
            <div className='flex flex-row-reverse justify-between space-x-3  mx-auto items-center'>
            <img src={twitter} alt="" />
            <span className=''>Likes</span>
              </div>
              <div className='flex flex-row justify-between space-x-3 mt-3 mx-auto items-center '>
            <div className=' font-bold text-3xl ml-3'>507</div>
            <div className='flex flex-row items-center space-x-2 w-fit mx-auto mt-3'>
                <img src={up} alt="" />
                <span className='text-green-700 text-sm'>+553%</span>
              </div>
              </div>
          </div>
          <div className="utube rounded-lg p-5 pb-5 w-80 mx-auto  mt-3" style={{backgroundColor:mode==='light'?'#D3D3D3':'#00008B' , color:mode==='dark'?'white':'black'} }>
            <div className='flex flex-row-reverse justify-between space-x-3  mx-auto items-center'>
            <img src={utube} alt="" />
            <span className=''>Likes</span>
              </div>
              <div className='flex flex-row justify-between space-x-3 mt-3 mx-auto items-center '>
            <div className=' font-bold text-3xl ml-3'>107</div>
            <div className='flex flex-row items-center space-x-2 w-fit mx-auto mt-3'>
                <img src={down} alt="" />
                <span className='text-red-700 text-sm'>-19%</span>
              </div>
              </div>
          </div>
          <div className="utube rounded-lg p-5 pb-5 w-80 mx-auto  mt-3" style={{backgroundColor:mode==='light'?'#D3D3D3':'#00008B' , color:mode==='dark'?'white':'black'} }>
            <div className='flex flex-row-reverse justify-between space-x-3  mx-auto items-center'>
            <img src={utube} alt="" />
            <span className=''>Total Views</span>
              </div>
              <div className='flex flex-row justify-between space-x-3 mt-3 mx-auto items-center '>
            <div className=' font-bold text-3xl ml-3'>1047</div>
            <div className='flex flex-row items-center space-x-2 w-fit mx-auto mt-3'>
                <img src={down} alt="" />
                <span className='text-red-700 text-sm'>-12%</span>
              </div>
              </div>
          </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
