import React, { useState } from 'react';

export function Generations(props) {
    return (
        <div className="generationsContainer">
            <div className="generation1">
                <div className="generations">
                    <img src={props.redBlue.front_default}></img>
                    <img src={props.redBlue.back_default}></img>
                </div>
                <div className="yellow">
                    <img src={props.yellow.front_default}></img>
                    <img src={props.yellow.back_default}></img>
                </div>
            </div>
            <div className="generation2">
                <div className="crystal">
                    <img src={props.crystal.front_default}></img>
                    <img src={props.crystal.back_default}></img>
                    <img src={props.crystal.front_shiny}></img>
                    <img src={props.crystal.back_shiny}></img>
                </div>
                <div className="gold">
                    <img src={props.gold.front_default}></img>
                    <img src={props.gold.back_default}></img>
                    <img src={props.gold.front_shiny}></img>
                    <img src={props.gold.back_shiny}></img>
                </div>
                <div className="gold">
                    <img src={props.silver.front_default}></img>
                    <img src={props.silver.back_default}></img>
                    <img src={props.silver.front_shiny}></img>
                    <img src={props.silver.back_shiny}></img>
                </div>
            </div>
            <div className="generation3">
                <div className="emerald">
                    <img src={props.emerald.front_default}></img>
                    <img src={props.emerald.back_default}></img>
                    <img src={props.emerald.front_shiny}></img>
                    <img src={props.emerald.back_shiny}></img>
                </div>
                <div className="fire">
                    <img src={props.fire.front_default}></img>
                    <img src={props.fire.back_default}></img>
                    <img src={props.fire.front_shiny}></img>
                    <img src={props.fire.back_shiny}></img>
                </div>
                <div className="ruby">
                    <img src={props.ruby.front_default}></img>
                    <img src={props.ruby.back_default}></img>
                    <img src={props.ruby.front_shiny}></img>
                    <img src={props.ruby.back_shiny}></img>
                </div>
            </div>
            <div className="generation4">
                <div className="diamond">
                    <img src={props.diamond.front_default}></img>
                    <img src={props.diamond.back_default}></img>
                    <img src={props.diamond.front_shiny}></img>
                    <img src={props.diamond.back_shiny}></img>
                </div>
                <div className="Heart">
                    <img src={props.Heart.front_default}></img>
                    <img src={props.Heart.back_default}></img>
                    <img src={props.Heart.front_shiny}></img>
                    <img src={props.Heart.back_shiny}></img>
                </div>
                <div className="paltinum">
                    <img src={props.paltinum.front_default}></img>
                    <img src={props.paltinum.back_default}></img>
                    <img src={props.paltinum.front_shiny}></img>
                    <img src={props.paltinum.back_shiny}></img>
                </div>
            </div>
            <div className="generation5">
                <div className="blackWhite">
                    <img src={props.blackWhite.front_default}></img>
                    <img src={props.blackWhite.back_default}></img>
                    <img src={props.blackWhite.front_shiny}></img>
                    <img src={props.blackWhite.back_shiny}></img>
                </div>
            </div>
            <div className="generation6">
                <div className="omega">
                    <img src={props.omega.front_default}></img>
                    <img src={props.omega.back_default}></img>
                    <img src={props.omega.front_shiny}></img>
                    <img src={props.omega.back_shiny}></img>
                </div>
                <div className="XY">
                    <img src={props.XY.front_default}></img>
                    <img src={props.XY.back_default}></img>
                    <img src={props.XY.front_shiny}></img>
                    <img src={props.XY.back_shiny}></img>
                </div>
            </div>
            <div className="generation7">
                <div className="SevenIcons">
                    <img src={props.SevenIcons.front_default}></img>
                    <img src={props.SevenIcons.back_default}></img>
                    <img src={props.SevenIcons.front_shiny}></img>
                    <img src={props.SevenIcons.back_shiny}></img>
                </div>
                <div className="ultra">
                    <img src={props.ultra.front_default}></img>
                    <img src={props.ultra.back_default}></img>
                    <img src={props.ultra.front_shiny}></img>
                    <img src={props.ultra.back_shiny}></img>
                </div>
            </div>
            <div className="generation8">
                <div className="EightIcons">
                    <img src={props.EightIcons.front_default}></img>
                    <img src={props.EightIcons.back_default}></img>
                    <img src={props.EightIcons.front_shiny}></img>
                    <img src={props.EightIcons.back_shiny}></img>
                </div>
            </div>
        </div>
    
    )
}




