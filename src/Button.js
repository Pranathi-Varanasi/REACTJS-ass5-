function Button(props){
    return(
      <div className="ui cards">
    <div className="card">
      <div classsName="content">
            {props.children}
       
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">Approve</div>
              <div className="ui basic red button">Decline</div>
            </div>
          </div>
    </div>
    </div>
    </div>
 
    )
}
export default Button;