import React from 'react'
import config from '../../config.json'

// ASSETS
import {ReactComponent as Discord} from '../../assets/discord.svg'
import {ReactComponent as Github} from '../../assets/github.svg'
import {ReactComponent as Twitch} from '../../assets/twitch.svg'
import {ReactComponent as Email} from '../../assets/email.svg'

class Footer extends React.Component {
    render() {
        return (
            <footer className="sticky bottom-0 left-0 w-screen text-center py-3 bg-gray-900">
                {JSON.stringify(config.customization.socials) !== "{}" ? <div className="text-left md:ml-12 ml-5 text-gray-500">Follow me on</div> : <></>}
                <div className="flex items-center md:px-10 px-3">
                    {config.customization.socials.discord ? <Discord onClick={() => window.location.href = config.customization.socials.discord} className="w-11 h-11 p-1 rounded-lg hover:bg-blue-900 cursor-pointer transition duration-100 ease rounded-md" /> : <></>}
                    {config.customization.socials.github ? <Github onClick={() => window.location.href = config.customization.socials.github} className="w-11 h-11 p-1 rounded-lg hover:bg-blue-900 cursor-pointer transition duration-100 ease rounded-md" /> : <></>}
                    {config.customization.socials.twitch ? <Twitch onClick={() => window.location.href = config.customization.socials.twitch} className="w-11 h-11 p-1 rounded-lg hover:bg-blue-900 cursor-pointer transition duration-100 ease rounded-md" /> : <></>}
                    {config.customization.socials.email ? <Email onClick={() => window.location.href = `mailto:${config.customization.socials.email}`} className="w-11 h-11 p-1 rounded-lg hover:bg-blue-900 cursor-pointer transition duration-100 ease rounded-md" /> : <></>}
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