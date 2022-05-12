import React from 'react'
import LogniFacebook from '../../Hook/LoginFacebook'
import LoginGithub from '../../Hook/LoginWithGithub'
import LoginWGoogle from '../../Hook/LoginWithGoogle'

const OtherOption = () => {

        const Google = () => {
            LoginWGoogle()
        }
        const Github = () => {
            console.log('clicked')
            LoginGithub()
        }
        const Facebook = () => {
            LogniFacebook()
        }
        return (
            <div>
                <div className="txt1 text-center p-t-54 p-b-20">
                    <span>
                        Or Sign In Using
                    </span>
                </div>
                <div className="flex-c-m">
                    <button onClick={Google} className="login100-social-item bg1">
                        <i className="fa-brands fa-google"></i>
                    </button >
                    <button onClick={Github} className="login100-social-item bg2">
                        <i className="fa-brands fa-github"></i>
                    </button >
                    <button onClick={Facebook} className="login100-social-item bg3">
                        <i className="fa-brands fa-facebook"></i>
                    </button >
                </div>
            </div>
        )
    }

    export default OtherOption