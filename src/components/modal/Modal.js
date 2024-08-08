import './modal.css'; // Вынесем стили в отдельный CSS файл

const Modal = ({active, children}) => {

    return (
       <>
           <div className={active ? 'modal active' : 'modal'}>
                <div className={active ? 'modal-content active' : 'modal-content'}>
                    {children}
                </div>
           </div>
       </>


    );
};

export default Modal;
