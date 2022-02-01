
const {NEXT_PUBLIC_MAIN_APP} = process.env;
let mainLink = NEXT_PUBLIC_MAIN_APP
if (mainLink == null){
    mainLink = ""
}

export const link = {
    eren1png:`${mainLink}/eren-1.png`,
    safaripinnedtabsvg:`${mainLink}/safari-pinned-tab.svg`,
    webmanifest:`${mainLink}/site.webmanifest`,
    
    link:`${mainLink}`
    
    
}