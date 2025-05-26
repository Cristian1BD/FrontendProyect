const Header = () => (
  <header className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 border-b border-blue-200 bg-white shadow-sm gap-4">
    <div className="text-base font-semibold text-blue-900">Grupo</div>
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
      <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm shadow w-full sm:w-auto">
        Docente
      </button>
      <img
        src="https://via.placeholder.com/32"
        alt="Avatar"
        className="w-9 h-9 rounded-full object-cover border border-blue-500"
      />
    </div>
  </header>
);

export default Header;
