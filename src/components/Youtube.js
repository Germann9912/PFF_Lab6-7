import YouTube from 'react-youtube';
import './Youtube.css'

class Youtube extends React.Component {
    _onEnd=()=>{alert("Koniec Filmu");}
    _onPause=()=>{alert("Pauza");}
    _onReady=()=>{alert("pomyślnie załadowano film");}
    _onPlay=()=>{alert("Start FIlmu");}
  render() {
   

    return  <YouTube className="Youtube" videoId="2VsZA8UoPXs"  onReady={this._onReady} onPause={this._onPause} onPlay={this._onPlay} onEnd={this._onEnd} />;
  }

  _onReady(event) {
   
    event.target.onReady();
  }
  _onPlay(event) {
   
    event.target.onPlay();
  }
  _onPause(event) {
   
    event.target.onPause();
  }
  _onEnd(event) {
   
    event.target.onEnd();
  }
}
export default Youtube