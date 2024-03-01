import profilePic from './assets/harsh.jpeg'

function Card(){

    return(
        <div className="card">
            <img className='card-image' src = {profilePic} alt="profile picture"></img>
            <h2 className='card-title'> Harsh</h2>
            <p className='card-desc'>I am a Student</p>
        </div>
    );

}

export default Card