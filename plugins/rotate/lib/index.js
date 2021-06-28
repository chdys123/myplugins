const rotate={
    install:(app,option)=>{
        app.directive('rotate', {
            mounted(el) {
              el.onmouseover=function(){
                el.style.display='inline-block'
                el.style.transtion="all .5s"
                el.style.transform="rotateZ(180deg)"
                el.style.color="red"
              }
              el.onmouseleave=function(){
                  el.style.transform="rotateZ(0deg)"
                  el.style.color="black"
              }
            }
          })
    }
}

export default rotate