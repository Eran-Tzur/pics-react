import React from 'react'

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 }

    this.imageRaf = React.createRef();
  }

  componentDidMount() {
    this.imageRaf.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRaf.current.clientHeight;

    const spans = Math.ceil(height / 20);

    this.setState({ spans })
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRaf} alt={description} src={urls.regular} />
      </div >
    )
  }
}

export default ImageCard;
