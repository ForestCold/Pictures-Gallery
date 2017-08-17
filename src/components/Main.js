require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

/*****图片处理*****/
var imageDatas = require('json!../data/imageData.json');
/**
 * 根据图片名字，获取图片路径
 * @param  图片数据
 * @return 更新后的图片数据，增加了一条imageURL属性
 */
imageDatas = (function getImageURL(imageDataArr){
  for (var i = 0, j = imageDataArr.length; i < j; i++){
    var singleImageData = imageDataArr[i];
    singleImageData.imageURL = '../images/' + singleImageData.fileName;
    imageDataArr[i] = singleImageData;
  }
  return imageDataArr;
})(imageDatas);

/*****图片处理结束*****/

/*****舞台搭建*****/

class AppComponent extends React.Component {
  render() {
    return (
      <section className = 'stage'>
        <section className = 'img-sec'>
        </section>
        <nav className = 'controller-nav'>
        </nav>
      </section>
    );
  }
}

/*****舞台搭建结束*****/

AppComponent.defaultProps = {
};

export default AppComponent;
