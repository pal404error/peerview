import React from 'react'

export const Homepage = () => {
    return (
        <>
            <div>Homepage</div>
            {/* <img src='https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg' /> */}
            <nav class="navbar navbar-dark bg-dark m-9">
                <a class="navbar-brand">Navbar</a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
                </form>
            </nav>

        </>
    )
}
