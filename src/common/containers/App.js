import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import Slider from 'react-slick';

class App extends Component {

  constructor(props){
    super(props);
  }
  render() {
    let { advert } = this.props

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <div id="top">
          <Slider {...settings}>
            {
              advert && advert.map((el,index) => {
                return(
                    <img key={index} src={`${api}el`} alt={el}/>
                  )
              })
            }
          </Slider>
          <iframe id="baiduframe" marginWidth="0" marginHeight="0" scrolling="no"
                  width={"100%"} height={40}
                  src="http://unstat.baidu.com/bdun.bsc?tn=dabaoku&cv=1&cid=31577&csid=301&bgcr=ffffff&ftcr=000000&urlcr=0000ff&tbsz=260&sropls=1,2,3,4,5,6&defid=2&ch=1">
          </iframe>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    advert : state.advert,
    api : state.api
  };
}

export default connect(mapStateToProps)(App);
