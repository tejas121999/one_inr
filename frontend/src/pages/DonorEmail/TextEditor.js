import React from 'react'
import { useRef, useEffect, useState } from "react";
import suneditor from "suneditor";
import plugins from "suneditor/src/plugins";
import "suneditor/dist/css/suneditor.min.css";

const TextEditor = () => {

    let editor = useRef(null);
    let txtArea = useRef();

    useEffect(() => {
        editor.current = suneditor.create(txtArea.current, {
            plugins: plugins,
            width: "100%",
            height: "300px",
            minHeight: "300px",
            buttonList: [
                // Default
                ["undo", "redo"],
                ["font", "fontSize", "formatBlock"],
                ["paragraphStyle", "blockquote"],
                ["bold", "underline", "italic", "strike", "subscript", "superscript"],
                ["fontColor", "hiliteColor", "textStyle"],
                ["removeFormat"],
                ["outdent", "indent"],
                ["align", "horizontalRule", "list", "lineHeight"],
                ["table", "link", "image", "video", "audio"],
                ["imageGallery"],
                ["fullScreen", "showBlocks", "codeView"],
                ["preview", "print"],
                ["save", "template"]
            ],
            historyStackDelayTime: 100,
            attributesWhitelist: {
                all: "style"
            }
        });
    }, []);
    return (
        <div>
            <textarea
                ref={txtArea}
                value="Hi this is default content, you can edit here"
            ></textarea>
        </div>
    )
}

export default TextEditor
