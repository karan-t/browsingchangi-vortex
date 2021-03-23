import React, { Component } from 'react'
import AudioPlayer from "react-modular-audio-player";
import rain_vortex from "../assests/The Rain Vortex Changi.mp3";
import airport_ambience from "../assests/Airport ambience.mp3";
import play from "../assests/Play button.svg"
import play_hover from "../assests/Play button-Hover.svg"
import pause from "../assests/Pause.svg"
import pause_hover from "../assests/Pause-hover.svg"
import volume_hover from "../assests/Volume-hover.svg"
import volume from "../assests/Volume.svg"

var boolvalTrue = true;

let audioFiles = [
  {
    src: rain_vortex,
  },
];
let audioFiles2 = [
  {
    src: airport_ambience,
  },
];

export default class MainDashbaord extends Component {
    render() {
        return (
            <div>
              <div className="airport_ambience">
                        <AudioPlayer
          audioFiles={audioFiles2}
          playerWidth="14rem"
          iconSize="2.5rem"
          loopPlaylist = {boolvalTrue}
          hideRewind = {boolvalTrue}
          hideName = {boolvalTrue}
          hideForward = {boolvalTrue}
          hideLoop = {boolvalTrue}
          hideSeeking = {boolvalTrue}
          hideTime = {boolvalTrue}
          playIcon = {play}
          playHoverIcon = {play_hover}
          pauseIcon = {pause}
          pauseHoverIcon = {pause_hover}
          muteIcon = {volume}
          muteEngagedIcon = {volume}
          volumeIcon = {volume}
          volumeEngagedIcon = {volume_hover}
        /></div>
        <div className="rain_vortex">
                <AudioPlayer
          audioFiles={audioFiles}
          playerWidth="14rem"
          iconSize="2.5rem"
          loopPlaylist = {boolvalTrue}
          hideRewind = {boolvalTrue}
          hideName = {boolvalTrue}
          hideForward = {boolvalTrue}
          hideLoop = {boolvalTrue}
          hideSeeking = {boolvalTrue}
          hideTime = {boolvalTrue}
          playIcon = {play}
          playHoverIcon = {play_hover}
          pauseIcon = {pause}
          pauseHoverIcon = {pause_hover}
          muteIcon = {volume}
          muteEngagedIcon = {volume}
          volumeIcon = {volume}
          volumeEngagedIcon = {volume_hover}
        /></div>
            </div>
        )
    }
}
