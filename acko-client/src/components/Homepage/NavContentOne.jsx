

export const NavContentOne = ({applyStyles}) => {
    return (
        <div className="content_container" style={applyStyles}>
            <div className="inner_container">
                <div className="column">
                    <div className="heading">
                        Car & Taxi</div>
                    <div className="list">
                        <ul>
                            <li>Comprehensive Car Insurance</li>
                            <li>Third Party Car Insurance</li>
                            <li>Commercial Car Insurance</li>
                        </ul>
                    </div>
                </div>

                <div className="column">
                    <div className="heading">
                        Bike</div>
                    <div className="list">
                        <ul>
                            <li>Comprehensive Bike Insurance</li>
                            <li>Third Party Bike Insurance</li>
                        </ul>
                    </div>
                </div>

                <div className="column">
                    <div className="heading">
                        Health</div>
                    <div className="list">
                        <ul>
                            <li>Health Insurance</li>
                            <li>Arogya Sanjeevani</li>
                            <li>Group Medical Cover</li>
                        </ul>
                    </div>
                </div>

                <div className="column">
                    <div className="heading">
                        Electronics</div>
                    <div className="list">
                        <ul>
                            <li>Mobile Protection</li>
                            <li>Appliance Protection</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}