import React from "react";
import styled from "styled-components";

type GustProps = {
    dumbwords: String;
}

function GustsComponent(props : GustProps){
    return(<div><h2> WHY ARE YOU HERE</h2>
    <p>Get out of my swamp </p>
    <p>{props.dumbwords}</p>
    </div>
    )
}

export default GustsComponent;