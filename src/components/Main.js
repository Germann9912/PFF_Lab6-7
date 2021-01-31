import React, {Component} from 'react' 
import './main.css';
import Youtube from './Youtube'
import ALink from './funE'
import img1 from '../img1.jpg'
import img2 from '../img2.jpg'
import img3 from '../img3.jpg'




class MMain extends Component{
     
        
    
      aMouseOver() {
        alert("Najechales na obraz");
      }
      aMouseOut() {
        alert("zjechales z obrazka");
      }
      aDblClick(){
          alert("kliknąłeś obrazek 2 razy")
      }
      aCopy(){
        alert("Skopiowales obrazek")
    }
    aPaste(){
        alert("Próbowałeś wkleić obraz")
    }
     
      
    
    render(){
        
        
        
        


        return(
            <div className="main">
                <div className="hobby skate">
                    <h2 className="hobbyH2">Deskorolka</h2>
                    <Youtube/>
                    <p className="skateP">Film Przedstawia Montaż Tricków na deskorolce. Jeżdże od mniej więcej 10 roku życia.<br/>
                         </p>
                    
                    

                    </div>
                <div className="hobby code">
                    <h2 className="hobbyH2">Matematyka</h2>
                    <img className="hobbyImg1"  src={img1} alt="brak obrazu" />
                    <p className="skateP" >W matematyce najbardziej fascynuje mnie fakt, iż została stworzona, dzięki możliwości abstrakcyjnego myślenia człowieka.
                    Zdążono rozwiązać już wiele zagadek, a co najlepsze, prawdopodobnie większość z nich nie zostało jeszcze odkrytych.
                         </p>
                </div>
                <div className="hobby music">
                    <h2 className="hobbyH2">Cloud/Phonk Rap</h2>
                    <img className="hobbyImg2" onMouseOver={this.aMouseOver} onMouseOut={this.aMouseOut} src={img2} alt="brak obrazu" />
                    <p className="skateP" ondblclick={this.aDblClick} >Moje życie jest bardzo mocno powiązane z muzyką. Moim ulubionym gatunkiem jest wyżej wymieniony Cloud Rap i Phonk Rap.
                     Dane gatunki charakteryzują się mrocznym klimatem.

                         </p>
                    </div>
                <div className="hobby series">
                    <h2 className="hobbyH2">Dania</h2>
                    <img className="hobbyImg3" onDoubleClick={this.aDblClick} onCopy={this.aCopy} onPaste={this.aPaste}  src={img3} alt="brak obrazu" />
                    <p className="skateP"  >Jestem miłośnikiem tego państwa i moim skrytym marzeniem jest kiedyś tam zamieszkać. 
                    Podoba mi się duńska kultura, krajobraz i strefa klimatyczna.
                    
                         </p>
                    
                    </div>
                
                



            </div>

        );
    }
    
}
 
export default MMain;
