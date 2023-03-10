const Book = (props) => {
  const { img, title, author, number } = props;

  return (
    <article className="book">
      <img alt={title} src={img} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <span className="number">#{number + 1}</span>
    </article>
  );
};

export default Book;
