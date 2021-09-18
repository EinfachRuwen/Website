import React from 'react'
import config from '../../config.json'

class Footer extends React.Component {
    render() {
        return (
            <footer className="w-screen text-center py-3 bg-gray-900">
                {JSON.stringify(config.customization.socials) !== "{}" ? <div className="text-left md:ml-10 ml-5 text-gray-500">Find me on</div> : <></>}
                <div className="flex items-center md:px-10 px-3">
                    <img alt="" src="https://element.io/images/logo-mark-primary.svg" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_matrix" onClick={() => window.open('https://byzer0.ml/matrix')} />
                    <img alt="" src="./image/icon_github.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_patreon" onClick={() => window.open('https://byzer0.ml/github')} /> 
                    <img alt="" src="./image/icon_mail.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_reddit" onClick={() => window.open('mailto:business@byzero.ml')} />
                    <img alt="" src="./image/icon_twitter.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_twitter" onClick={() => window.open('https://byzer0.ml/twitter')} /> 
                    <img alt="" src="./image/icon_patreon.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_patreon" onClick={() => window.open('https://byzer0.ml/patreon')} /> 
                    <img alt="" src="./image/icon_youtube.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_youtube" onClick={() => window.open('https://byzer0.ml/yt')} /> 
                    <img alt="" src="./image/icon_reddit.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_reddit" onClick={() => window.open('https://byzer0.ml/reddit')} /> 
                    <img alt="" src="https://protonmail.com/blog/wp-content/themes/bootstrap-basic/img/stripeLogo.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_protonmail" onClick={() => window.open('mailto:mail.byzero@protonmail.com')} /> 
                    <img alt="" src="./image/icon_donate.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_donate" onClick={() => window.open('https://byzer0.ml/donate')} />
                </div>
                &copy; 2021 <a href="https://byzero.ml" className="cursor-pointer transition duration-200 hover:text-blue-500 text-blue-300">byZero</a> | Made with <a href="https://byzer0.ml/generator" className="cursor-pointer transition duration-200 hover:text-blue-500 text-blue-300">byZero's Website Generator</a>
            </footer>
        )
    }
}

export default Footer
