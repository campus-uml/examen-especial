const App = () => {
  return (
    <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Hotels</h1>
      <div className="flex flex-col gap-4">
        {/* Hotel 1 */}
        <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm">
          <img src="./img/img1.jpg" alt="Ledadu Beach" className="w-16 h-16 md:w-20 md:h-20 rounded-md" />
          <div className="flex flex-col flex-grow">
            <h2 className="text-lg font-semibold">Ledadu Beach</h2>
            <p className="text-sm text-gray-600">3 days 2 nights</p>
            <p className="text-sm text-gray-500">📍 Australia</p>
          </div>
          <p className="text-lg font-bold">$20<span className="text-sm">/Person</span></p>
        </div>

        {/* Hotel 2 */}
        <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm">
          <img src="./img/img2.jpg" alt="Endigada Beach" className="w-16 h-16 md:w-20 md:h-20 rounded-md" />
          <div className="flex flex-col flex-grow">
            <h2 className="text-lg font-semibold">Endigada Beach</h2>
            <p className="text-sm text-gray-600">5 days 4 nights</p>
            <p className="text-sm text-gray-500">📍Japon</p>
          </div>
          <p className="text-lg font-bold">$18<span className="text-sm">/Person</span></p>
        </div>

        {/* Hotel 3 */}
        <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm">
          <img src="./img/img3.jpg" alt="Doreen Tower" className="w-16 h-16 md:w-20 md:h-20 rounded-md" />
          <div className="flex flex-col flex-grow">
            <h2 className="text-lg font-semibold">Doreen Tower</h2>
            <p className="text-sm text-gray-600">5 days 4 nights</p>
            <p className="text-sm text-gray-500">📍 USA</p>
          </div>
          <p className="text-lg font-bold">$14<span className="text-sm">/Person</span></p>
        </div>

        {/* Hotel 4 */}
        <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm">
          <img src="./img/img4.jpg" alt="Royal Palace" className="w-16 h-16 md:w-20 md:h-20 rounded-md" />
          <div className="flex flex-col flex-grow">
            <h2 className="text-lg font-semibold">Royal Palace</h2>
            <p className="text-sm text-gray-600">5 days 4 nights</p>
            <p className="text-sm text-gray-500">📍 China</p>
          </div>
          <p className="text-lg font-bold">$21<span className="text-sm">/Person</span></p>
        </div>

          {/* Hotel 5 */}
            <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm">
          <img src="./img/img5.jpg" alt="Royal Palace" className="w-16 h-16 md:w-20 md:h-20 rounded-md" />
          <div className="flex flex-col flex-grow">
            <h2 className="text-lg font-semibold">El Dorado</h2>
            <p className="text-sm text-gray-600">5 days 4 nights</p>
            <p className="text-sm text-gray-500">📍España</p>
          </div>
          <p className="text-lg font-bold">$26<span className="text-sm">/Person</span></p>
        </div>

          {/* Hotel 6 */}
          <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm">
          <img src="./img/img6.jpg" alt="Royal Palace" className="w-16 h-16 md:w-20 md:h-20 rounded-md" />
          <div className="flex flex-col flex-grow">
            <h2 className="text-lg font-semibold">San Marino</h2>
            <p className="text-sm text-gray-600">5 days 4 nights</p>
            <p className="text-sm text-gray-500">📍Argentina</p>
          </div>
          <p className="text-lg font-bold">$28<span className="text-sm">/Person</span></p>
        </div>
      </div>
    </div>
  );
};

export default App;