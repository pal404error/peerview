import React from 'react'

export const Homepage = () => {
    return (
        <>
            <div>Homepage</div>
            {/* <img src='https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg' /> */}
            <nav class="navbar navbar-dark bg-dark m-9">
            <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
                <h5 class="text-white h4">Collapsed content</h5>
                <span class="text-muted">Toggleable via the navbar brand.</span>
            </div>
            </div>
            <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            </nav>
                <a class="navbar-brand">Navbar</a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
                </form>
            </nav>

        </>
    )
}
