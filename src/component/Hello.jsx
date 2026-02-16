function Hello () {
    
    const isLoggedIn = true;

    return  (
        <>
            <h1>Hello Component...</h1>
            <div>
                {/* TERNANY OPERATOR  */}
                { isLoggedIn ? <h1>Welcome User!</h1> : <h2>Please Login!</h2> }

                {/* LOGICAL OPERATOR  */}
                { isLoggedIn && <h1>You have new message! </h1> }

                <h1 className={ isLoggedIn ? "visible" : "unvisible" }>Conditional Rendering</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ut consectetur nisi? Earum sequi et modi maxime laboriosam beatae doloribus labore, animi, provident dolorum quidem eum deserunt sint nobis eaque?</p>
            </div>
        </>
    )

}

export default Hello;