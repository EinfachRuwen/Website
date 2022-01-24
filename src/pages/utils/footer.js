import React from 'react'
import config from '../../config.json'

class Footer extends React.Component {
    render() {
        return (
            <footer className="w-screen text-center py-3 bg-gray-900">
                {JSON.stringify(config.customization.socials) !== "{}" ? <div className="text-left md:ml-10 ml-5 text-gray-500">Find me on</div> : <></>}
                <div className="flex items-center md:px-10 px-3">
                    <img alt="" src="https://generat0r.byzero.dev/matrix.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_matrix" onClick={() => window.open('https://by0.link/msg')} />
                    <img alt="" src="https://generat0r.byzero.dev/github.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_patreon" onClick={() => window.open('https://by0.link/github')} /> 
                    <img alt="" src="https://generat0r.byzero.dev/mail.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_reddit" onClick={() => window.open('https://by0.link/mail')} />
                    <img alt="" src="https://generat0r.byzero.dev/twitter.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_twitter" onClick={() => window.open('https://by0.link/twitter')} />  
                    <img alt="" src="https://generat0r.byzero.dev/pixelfed.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_pixelfed" onClick={() => window.open('https://by0.link/pixelfed')} /> 
                    <img alt="" src="https://generat0r.byzero.dev/mastodon.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_mastodon" onClick={() => window.open('https://by0.link/mastodon')} /> 
                    <img alt="" src="https://generat0r.byzero.dev/protonmail.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_protonmail" onClick={() => window.open('mailto:mail.byzero@protonmail.com')} /> 
                    <img alt="" src="https://generat0r.byzero.dev/liberapay.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_donate" onClick={() => window.open('https://by0.link/donate')} />
                </div>
                &copy; 2022 <a href="https://byzero.dev" className="cursor-pointer transition duration-200 hover:text-blue-500 text-blue-300">byZero</a> | Made with <a href="https://by0.link/generator" className="cursor-pointer transition duration-200 hover:text-blue-500 text-blue-300">byZero's Website Generator</a>
            </footer>
        )
    }
}

export default Footer
