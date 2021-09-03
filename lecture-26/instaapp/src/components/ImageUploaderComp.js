import React, { Fragment, useState } from 'react';
import ImageUploader from 'react-images-upload';
 
export default function ImageUploaderComp(){


    let [picture, setPicture] = useState();

    let onDrop = (pic) => {
        let selected = (pic[pic.length - 1]);
        setPicture(URL.createObjectURL(selected));
    }

    return (
        <Fragment>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />

            {picture && <img src={picture} height="300px"/>}
        </Fragment>
        
    );
}