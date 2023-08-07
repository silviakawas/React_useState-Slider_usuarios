const Users = ({profileImage, title, name, username, email })=>{
    return(
        <>
            <img src={profileImage} alt='' />
            <h1>
                Name: {title} {name}
            </h1>
            <p>
                Username: {username}
            </p>
            <p>
                Email: {email}
            </p>
        </>
    );
};

export default Users;