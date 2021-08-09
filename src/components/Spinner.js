import React from 'react'

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center mt-3">
              <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden ms-2">Loading...</span>
                    </div>
                    <div className="spinner-grow text-secondary ms-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success ms-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger ms-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning ms-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-info ms-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-dark ms-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
             </div>
    )
}

export default Spinner
