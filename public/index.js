'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    //   <Box
    //   sx={{
    //     width: 200,
    //     display: 'flex',
    //     alignItems: 'center',
    //   }}
    // >
    //   <Rating
    //     name="hover-feedback"
    //     value={value}
    //     precision={0.5}
    //     getLabelText={getLabelText}
    //     onChange={(event, newValue) => {
    //       setValue(newValue);
    //     }}
    //     onChangeActive={(event, newHover) => {
    //       setHover(newHover);
    //     }}
    //     emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    //   />
    //   {value !== null && (
    //     <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
    //   )}
    // </Box>
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));