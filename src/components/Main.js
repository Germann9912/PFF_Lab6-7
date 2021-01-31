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
                    <p className="skateP">Film Przedstawia Montaż Tricków na deskorolce. jeżdże na niej od wielu lat i wciąż polepszam swoje umiejętności<br/>
                         Przykładowe Tricki:<br/>-Kickflip<br/>-Ollie<br/>-360 flip
                         </p>
                    
                    

                    </div>
                <div className="hobby code">
                    <h2 className="hobbyH2">Programowanie</h2>
                    <img className="hobbyImg1"  src={img1} alt="brak obrazu" />
                    <p className="skateP" >Lubie programować, dlatego poszedłem na studia informatyczne. Interesuje mnie tworzenie aspektów wizualnych stron.
                         </p>
                </div>
                <div className="hobby music">
                    <h2 className="hobbyH2">Muzyka</h2>
                    <img className="hobbyImg2" onMouseOver={this.aMouseOver} onMouseOut={this.aMouseOut} src={img2} alt="brak obrazu" />
                    <p className="skateP" ondblclick={this.aDblClick} >Lubie tworzyć muzyke, nagrywać piosenki oraz sledzic nowości na bierząco
                         </p>
                    </div>
                <div className="hobby series">
                    <h2 className="hobbyH2">Seriale</h2>
                    <img className="hobbyImg3" onDoubleClick={this.aDblClick} onCopy={this.aCopy} onPaste={this.aPaste}  src={img3} alt="brak obrazu" />
                    <p className="skateP"  >Lubie oglądać seriale i czasami poświecam na to aż za dużo. Zobacz moje ulubione:
                    <ALink/>
                         </p>
                    
                    </div>
                
                



            </div>

        );
    }
    
}
 
export default MMain;
