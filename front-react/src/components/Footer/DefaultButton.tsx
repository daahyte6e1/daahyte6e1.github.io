import React from 'react';
import './DefaultButton.css'

export const DefaultButton: FC = ({text, className}: {text: string, className: string}) => {
    return (
        <div className={className}>
            <div className="soupofjustice text">
                {text}
            </div>
            <img src="assets/footer-button.png" alt="footer" className="footer-button w-100" />
        </div>
    )
}