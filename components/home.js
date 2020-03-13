import  React, { Component }  from 'react';
import { Slideshow } from 'react-native-slideshow';

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          position: 1,
          interval: null,
          dataSource: [
            {
              title: 'Title 1',
              caption: 'Caption 1',
              url: 'http://placeimg.com/640/480/any',
            }, {
              title: 'Title 2',
              caption: 'Caption 2',
              url: 'http://placeimg.com/640/480/any',
            },
          ],
        }
      }

      componentWillMount(){
        this.setState({
          interval: this.setInterval(() => {
            this.setState({
              position: this.state.position === this.state.dataSource.length? 0: this.state.position+1
            });
          }, interval)
        });
      }
    
      componentWillUnmount() {
        clearInterval(this.state.interval);
      }
    
      render() {
        return (
        <Slideshow
            dataSource = {this.state.dataSource}
            position = {this.state.position}
            onPositionChanged = {position => this.setState({ position })}
            />
        );
      }
}
