export default function ModalImage({image}) {
    return (
        <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <img src={image} alt="" style={{maxHeight: '100vh', objectFit: 'cover'}} />
                </div>
            </div>
        </div>
    )
}