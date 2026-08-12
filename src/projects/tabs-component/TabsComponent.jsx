import { useState } from "react";

const tabsData = [
  { label: "home", content: <h1>Home Tab</h1> },
  { label: "about", content: <h1>About Tab</h1> },
  { label: "contact", content: <h1>Contact Tab</h1> },
];

const TabsComponents = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <h1 className="text-4xl text-purple-500 font-bold m-5">
        {" "}
        Tabs components
      </h1>
      <div className="flex gap-10 justify-center ">
        {tabsData.map((tab, index) => (
          <button
            onClick={() => setActive(index)}
            key={index}
            className="text-xl bg-blue-500 rounded p-2"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="m-10 text-2xl text-yellow-400">
        {tabsData[active].content}
      </div>
    </div>
  );
};

export default TabsComponents;

//-------------------------------------------------------------------------------------------------
// Another way

// import React, { useState } from 'react';

// const TabsComponent = () => {
//   const [tab,setTab] = useState('home')
//   return (
//     <div >
//       <h1 className='text-4xl text-purple-500 font-bold m-5'>Tabs Components</h1>
//       <div className='flex gap-10 justify-center'>

//       <button onClick={()=>setTab('home')}  className='text-xl bg-blue-500 rounded p-2'>Home</button>
//       <button onClick={()=>setTab('about')}  className='text-xl bg-blue-500 rounded p-2'>About</button>
//       <button onClick={()=>setTab('contact')} className='text-xl bg-blue-500 rounded p-2'>Content</button>
//       </div>
//     <div className='m-10 text-2xl text-yellow-400'>
//       {
//         tab==='home' && <h1>This is Home </h1>
//       }
//       {
//         tab==='about' && <h1>This is About </h1>
//       }
//       {
//         tab==='contact' && <h1>This is contact</h1>
//       }
//       </div>
// </div>
//   );
// }

// export default TabsComponent;
