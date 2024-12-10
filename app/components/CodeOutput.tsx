'use client'
import React, {useRef, useEffect} from 'react'

interface CodeOutputProps {
    code: string;
}

const CodeOutput: React.FC<CodeOutputProps> = ({code}) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.srcdoc = code;
        }
    }, [code])
  
    return (
        <iframe ref={iframeRef}/>
    )
}

export default CodeOutput