import React from 'react'
import config from '../../config.json'

class Footer extends React.Component {
    render() {
        return (
            <footer className="w-screen text-center py-3 bg-gray-900">
                {JSON.stringify(config.customization.socials) !== "{}" ? <div className="text-left md:ml-10 ml-5 text-gray-500">Follow me on</div> : <></>}
                <div className="flex items-center md:px-10 px-3">
                    <img alt="" src="./image/icon_discord.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_twitter" onclick="window.open('https://discord.com/users/390965278470569985')" />
                    <img alt="" src="https://keybase.io/images/icons/icon-keybase-logo-48.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_keybase" onclick="window.open('https://keybase.io/byzero)" />
                    <img alt="" src="./image/icon_github.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_patreon" onclick="window.open('https://byzer0.ml/github')" /> 
                    <img alt="" src="./image/icon_twitch.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_youtube" onclick="window.open('https://byzer0.ml/twitch')" /> 
                    <img alt="" src="./image/icon_mail.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_reddit" onclick="window.open('mailto:business@byzero.ml')" />
                    <img alt="" src="./image/icon_twitter.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_twitter" onclick="window.open('https://byzer0.ml/twitter')" /> 
                    <img alt="" src="./image/icon_patreon.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_patreon" onclick="window.open('https://byzer0.ml/patreon')" /> 
                    <img alt="" src="./image/icon_youtube.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_youtube" onclick="window.open('https://byzer0.ml/yt')" /> 
                    <img alt="" src="./image/icon_reddit.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_reddit" onclick="window.open('https://byzer0.ml/reddit')" /> 
                    <img alt="" src="./image/icon_donate.png" className="inline-block rounded-lg w-10 h-10 cursor-pointer mr-2" id="icon_donate" onclick="window.open('https://byzer0.ml/donate')" />
                </div>
                &copy; 2021 <a href="https://byzero.ml" className="cursor-pointer transition duration-200 hover:text-blue-500 text-blue-300">byZero</a> | Made with <a href="https://byzer0.ml/generator" className="cursor-pointer transition duration-200 hover:text-blue-500 text-blue-300">byZero's Website Generator</a>
            </footer>
        )
    }
}

export default Footer
