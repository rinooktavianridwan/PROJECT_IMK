const FeedbackComponent = ({ closeFeedback }) => {
  return (
    <div
      className="feedback-container"
      style={{ width: "720px", height: "370px", border: "1px solid black" }}
    >
      <h2>Kritik dan Saran</h2>
      <div className="feedback-in-container">
        <p>Kritik untuk Website Malang City</p>
        <input type="text" placeholder="Jawab disini" />
        <p>Saran untuk Website Malang City</p>
        <input type="text" placeholder="Jawab disini" />
        <button onClick={closeFeedback}>Kirim</button>
      </div>
    </div>
  );
};

export default FeedbackComponent;
