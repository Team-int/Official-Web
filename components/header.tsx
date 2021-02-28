import React from 'react';

class Header extends React.Component {
    transform (e): void {
        e.target.classList.toggle('change')
    }

    render(): JSX.Element {
        return (
            <div className="header">
                <img src="../logo.png" alt="Logo" height="70px"/>
                <div className="container-menu" onClick={this.transform}>
                    <div className="container">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header