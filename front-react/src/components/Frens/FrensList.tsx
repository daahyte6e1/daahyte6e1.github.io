import React from 'react'
import './FrensList.css'

const FrensList = () => {
    return (
        <div className='table frens-border'>
            <div className="table-header flex">
                <div className="icon-column">
                    <img src="assets/friends-list.png" alt="friends-list" className="image friends" />
                </div>
                <div className="column">name</div>
                <div className="column">
                    <img src="assets/reward.png" alt="reward" className="image friends" />
                    reward
                </div>
            </div>
            <div className="table-body ">
                <div className="table-row w-100 flex">
                    <div className="icon-column">
                        <div className="black-circle"/>
                    </div>
                    <div className="column">test</div>
                    <div className="column">
                        111
                        <img src="assets/crumble.png" alt="crumble" className="crumble-image" />
                    </div>
                </div>
                <div className="table-row w-100 flex">
                    <div className="icon-column">
                        <div className="black-circle"/>
                    </div>
                    <div className="column">test</div>
                    <div className="column">
                        111
                        <img src="assets/crumble.png" alt="crumble" className="crumble-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FrensList