import React from 'react';
import ReactDOM from  'react-dom';
import './index css.css';


let korean = {
    src: "https://68.media.tumblr.com/1461dcac80c3fb79133ee06751df65aa/tumblr_owc1senmCP1vcilhmo1_1280.jpg",
    alt: 'LOONA ODD EYE CIRCLE',
    width: "300px"
};

let suits = [
    {src: "https://atlantapokerclub.com/images/logos/atlanta-poker-club-club-bw.png"},
    {src: "https://static.adiamor.com/images/diamondpics/diamonds_big/round-diamond.jpg"},
    {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/968px-Love_Heart_SVG.svg.png"},
    {src: "https://cdn.shopify.com/s/files/1/0668/3101/products/spade-sticker_1024x1024.jpg?v=1415431197"}
];

let ran = Math.ceil(Math.random()*4)-1;


export class Something extends React.Component{
    scream() {
        window.location.href = 'www.facebook.com';
    }

    
    render(){
        const suit = suits[ran];



        return (
            <blockquote>
                <p>
                    This is pretty fucking stupid
                </p>
                <button  onClick = {this.scream}>button</button>
                <img 
                    src = {suit.src}
                    alt = {korean.alt}
                    width= "300px"
                    />
                <br />
                <cite>
                    <a target="_blank" href="www.facebook">
                        fuckbook
                    </a>
                </cite>

            </blockquote> 

        );
    }

}



