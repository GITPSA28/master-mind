function NavBar() {
  return (
    <nav className="flex items-center justify-between border-b-1 border-b-gray-400 px-6 py-3 text-gray-800">
      <div id="streaks">18</div>
      <div id="logo">
        <p className="text-2xl font-bold">Code Chase</p>
      </div>
      <div className="flex gap-4">
        <div id="help-toggle">help</div>
        <div id="options-toggle">options</div>
      </div>
    </nav>
  );
}

export default NavBar;
