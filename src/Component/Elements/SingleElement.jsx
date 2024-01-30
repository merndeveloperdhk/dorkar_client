

const SingleElement = ({service}) => {
    const{category, division, email, name, title,price, picture} = service ;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure><img src={picture} alt={title} /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">{division}</div>
    </h2>
    <p>{name}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div> 
      <div className="badge badge-outline">$ {price}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleElement;