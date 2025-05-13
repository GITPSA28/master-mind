function Modal({ visible, title = "", children, close }) {
  if (!visible) return;

  return (
    <div
      id="modal"
      className="fixed top-0 left-0 flex items-center justify-center w-full h-dvh bg-black/30"
    >
      <div
        id="content"
        className="w-11/12 max-w-xl p-6 bg-white rounded-2xl sm:min-w-96"
      >
        <div id="top" className="flex justify-between">
          <h2 id="title" className="w-full py-2 font-bold text-center">
            {title}
          </h2>
          {close && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="cursor-pointer size-6"
              onClick={() => close()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <div id="main-content" className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
