

import SideBar from './SideBar';

const Calendario = () =>{
    var slider_img = document.querySelector('.slider-img');
    var images=['/assets/abril.png','/assets/mayo.png','/assets/junio.png'];
    var i=0;

return(
    <div class="slider">
            <SideBar/>
            <div class="img-box">
            <img id="mes" src="/assets/abril.png" width="1200" height="644" class="slider-img" />
            </div>
            <button class="btn" onclick="next()">Next</button>
        </div>
        
   )


   function prev(){
    if(i<=0)i=images.length;
        i--;
        document.getElementById('btncal').style.visibility = 'hidden';
     return setImg();
    }
    
    function next(){
        if(i>=images.length-1)i=-1;
        i++;
      document.getElementById('btncal').style.visibility = 'hidden';
     return setImg();
    }
    
    function setImg(){
        return slider_img.setAttribute('src',images[i]);
    }
}
export default Calendario;