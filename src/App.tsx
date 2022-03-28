import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="mt-5">
          <h1 className="font-bold text-gray-700 text-4xl mb-10">KML Fatherhood clock</h1>
          <div className="rounded-tl-full bg-black h-48 w-48 flex flex-row-reverse pt-4 mx-auto">
            <div className="rounded-tl-full bg-white h-44 w-44 ">
              <div className="flex items-center">
                <div className="rounded-full bg-black h-5 w-5 mx-auto -mr-1 mt-1">
                  <div className="bg-black h-32 w-2 mt-9 ml-2" />
                </div>
              </div>
              <div className="rounded-full bg-black h-5 w-5 mx-auto mr-18 mt-2" />
              <div className="rounded-full bg-black h-5 w-5 mx-auto mr-32 mt-9" />
              <div className="flex items-center">
                <div className="rounded-full bg-black h-5 w-5 mx-auto mr-36 mt-12">
                  <div className="bg-black h-2 w-32 mt-2 ml-9" />
                </div>
              </div>
            </div>
          </div>
          <h2 className="mt-5 font-bold">The clock is currently 15 minutes to midnight.</h2>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
