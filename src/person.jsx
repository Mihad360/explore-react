export default function Person({person}){
    const {username, phone} = person;
    return (
        <div className="box">
            <h4>Username : {username}</h4>
            <p>Phone : {phone}</p>
        </div>
    )
}