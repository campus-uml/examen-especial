

const App= () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 lg:p-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">Hotels</h1>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg shadow-sm">
          <img src="./img/img1.jpg" alt="Ledadu Beach" className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-md" />
          <div className="flex flex-col flex-grow text-center sm:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Ledadu Beach</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">3 days 2 nights</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">📍 Australia</p>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-bold">$20<span className="text-sm sm:text-base">/Person</span></p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg shadow-sm">
          <img src="./img/img2.jpg" alt="Endigada Beach" className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-md" />
          <div className="flex flex-col flex-grow text-center sm:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Endigada Beach</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">5 days 4 nights</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">📍 India</p>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-bold">$18<span className="text-sm sm:text-base">/Person</span></p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg shadow-sm">
          <img src="./img/img3.jpg" alt="Doreen Tower" className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-md" />
          <div className="flex flex-col flex-grow text-center sm:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Doreen Tower</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">5 days 4 nights</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">📍 USA</p>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-bold">$14<span className="text-sm sm:text-base">/Person</span></p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg shadow-sm">
          <img src="./img/img4.jpg" alt="Royal Palace" className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-md" />
          <div className="flex flex-col flex-grow text-center sm:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Royal Palace</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">5 days 4 nights</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">📍 India</p>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-bold">$21<span className="text-sm sm:text-base">/Person</span></p>
        </div>
      </div>
    </div>
  );
};



export default App;