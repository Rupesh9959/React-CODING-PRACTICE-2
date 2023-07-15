const Button = (props) => {
  const { name, className } = props;
  return <button className={`button ${className}`}>{name}</button>;
};

const element = (
  <div className="social-buttons-bg">
    <h1 className="social-buttons-heading">Social Buttons</h1>
    <div className="social-buttons-container">
      <Button name="Like" className="like-button" />
      <Button name="Comment" className="comment-button" />
      <Button name="Share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
