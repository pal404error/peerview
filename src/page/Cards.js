import React, {Component} from "react";

export class Card extends Component
{  
        render()
        {
            let {url, ccaption, name} = this.props;
            return(
                <div class="card">
                    <h3 class="name">
                        {name}
                    </h3>
                    <img src={url}></img>
                    <h4 class="caption">
                        {ccaption}
                    </h4>
                </div>
            )   
        }
}

export default Card;