export default function Modal({ children }) {
  return (
    <article className="modal modal__open">
      <div className="modal__container">
        <button className="modal__close">X</button>
        {children}
      </div>
    </article>
  );
}
