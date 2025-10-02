function FeatureCard({ imgSrc, title, desc }) {
  return (
    <div className="feature-card">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default FeatureCard;
